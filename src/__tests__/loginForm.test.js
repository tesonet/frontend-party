import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

//Component.
import LoginForm from "../components/LoginForm/LoginForm";

const mockStore = configureMockStore();
const store = mockStore({});

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
