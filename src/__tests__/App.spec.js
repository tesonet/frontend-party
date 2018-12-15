import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from "react-testing-library";

import "../__mocks__/getToken";
import App from "../App";

import { MOCK_TOKEN } from "../__mocks__/constants";

beforeEach(() => localStorage.clear());
afterEach(cleanup);

describe("Local Storage", () => {
  it("should write and clean token to LS after login & logout", async () => {
    const { getByText, container } = render(<App />);

    expect(container.firstChild).toMatchSnapshot();
    expect(localStorage.getItem("token")).toEqual(null);

    fireEvent.click(getByText(/log in/i));

    await waitForElement(() => getByText(/Logout/i));
    expect(container.firstChild).toMatchSnapshot();
    expect(localStorage.getItem("token")).toEqual(MOCK_TOKEN);

    fireEvent.click(getByText(/Logout/i));

    expect(localStorage.getItem("token")).toEqual(null);
    expect(container.firstChild).toMatchSnapshot();
  });
});
