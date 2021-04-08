import React from "react";

import { InternalPageHeader } from "./InternalPageHeader";
import { mountWithIntl } from "../../utils/testsUtils"

const mockUseHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  useHistory: () => {
    return {
      push: mockUseHistoryPush
    };
  },
}));

Object.defineProperty(window, "localStorage", {
  configurable: true,
  writable: true,
  value: {
    removeItem: jest.fn(),
  },
});

describe("InternalPageHeader", () => {
  const setup = () => mountWithIntl(<InternalPageHeader />);

  it("should remove localStorage token and redirect to login screen on logout click", () => {
    const wrapper = setup();
    const logoutButton = wrapper.find('[data-testid="logout-button"]');
    logoutButton.simulate("click");
    expect(window.localStorage.removeItem).toHaveBeenCalledWith("token");
    expect(mockUseHistoryPush).toHaveBeenCalled();
  });
});