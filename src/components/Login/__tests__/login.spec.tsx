import React from "react";
import { Login } from "..";
import { renderWithRouter } from "utils/testUtils";
import { fireEvent } from "react-testing-library";

describe("login page", () => {
  test("renders login component", () => {
    const { getByTestId } = renderWithRouter(<Login />);
    getByTestId("loginForm");
  });
  test("submits login form with empty inputs", async () => {
    const { getByTestId, getByText, getByPlaceholderText } = renderWithRouter(
      <Login />
    );
    const loginForm = getByTestId("loginForm");
    fireEvent.submit(loginForm);
    getByText(/username can not be empty/i);
    const username = getByPlaceholderText(/username/i);

    fireEvent.change(username, { target: { value: "tesonet" } });
    fireEvent.submit(loginForm);
    getByText(/password can not be empty/i);
    // there is a problem with async/await testing.
    // The new react has some issues with the act(...) warning.
    // https://github.com/facebook/react/issues/14769
    // https://github.com/kentcdodds/react-testing-library/issues/281
    // I would try to do something like this to test the async part of login

    // const password = getByPlaceholderText(/password/i);
    // fireEvent.change(password, { target: { value: "not party animal" } });
    // fireEvent.submit(loginForm);
    // // @ts-ignore
    // axiosMock.post.mockResolvedValueOnce({
    //   data: { message: "unauthorized" }
    // });
    // const unauthorizedErrorElement = await waitForElement(() =>
    //   getByTestId("errorMessage")
    // );
    // expect(axiosMock.post).toHaveBeenCalledTimes(1);
    // expect(unauthorizedErrorElement).toHaveTextContent(/unauthorized/i);
  });
});
