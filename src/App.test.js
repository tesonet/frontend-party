import React from "react";
import { render, wait, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import { loginSuccessful } from "./actions/authActions";

const Testio = (
  <Provider store={store}>
    <App />
  </Provider>
);

const mockedFetch = url => {
  const isAuthRequest = url.includes("tokens");
  const mockJson = isAuthRequest
    ? { token: "sometoken" }
    : [{ name: "Lithuania", distance: "10" }];
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockJson)
  });
};

const click = el =>
  fireEvent(
    el,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
  );

describe("Testio", () => {
  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(mockedFetch);
  });

  afterAll(() => {
    window.fetch.mockRestore();
  });

  describe("when user is not logged in", () => {
    it("login page loads", () => {
      const { getByText } = render(Testio);
      expect(getByText("Log In")).toBeInTheDocument();
    });

    it("login works", async () => {
      const { getByPlaceholderText, getByText } = render(Testio);
      const username = getByPlaceholderText("Username");
      const password = getByPlaceholderText("Password");
      const loginButton = getByText("Log In");

      fireEvent.change(username, { target: { value: "username" } });
      fireEvent.change(password, { target: { value: "password" } });
      click(loginButton);

      await wait(() => getByText("Lithuania"));
      expect(getByText("Log out")).toBeInTheDocument();
      expect(getByText("Lithuania")).toBeInTheDocument();
    });
  });

  describe("when user is logged in", () => {
    it("renders servers page when logged in", async () => {
      store.dispatch(loginSuccessful("sometoken"));
      const { getByText } = render(Testio);
      await wait(() => getByText("Lithuania"));
      expect(getByText("Lithuania")).toBeInTheDocument();
    });

    it("logout works", async () => {
      store.dispatch(loginSuccessful("sometoken"));
      const { getByText, getByPlaceholderText } = render(Testio);
      const logoutButton = getByText("Log out");

      click(logoutButton);

      await wait(() => getByText("Log In"));
      expect(getByPlaceholderText("Username")).toBeInTheDocument();
      expect(getByPlaceholderText("Password")).toBeInTheDocument();
    });
  });

  describe("when user navigates to invalid page", () => {
    it("renders not found page", () => {
      window.history.pushState({}, "", "/wronggg");
      const { getByText } = render(Testio);
      expect(getByText("Whoops. Page not found.")).toBeInTheDocument();
    });
  });
});
