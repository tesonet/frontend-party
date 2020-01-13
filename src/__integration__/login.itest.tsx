import React from "react";
import { mount } from "enzyme";
import App from "./../components/App/App";
import { MemoryRouter } from "react-router-dom";
import { FetchMock } from "jest-fetch-mock/types";
import { act } from "react-dom/test-utils";
import Servers from "../components/Servers/Servers";
import { MockStoreEnhanced } from "redux-mock-store";
import { State } from "../store/store";
import { Provider } from "react-redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { logIn } from "../store/user/actions";
import { AnyAction } from "redux";
import createMockStore from "redux-mock-store";

const initialState: State = {
  user: { token: null },
  servers: { servers: null }
};
type DispatchExts = ThunkDispatch<State, undefined, AnyAction>;

const mockStore = createMockStore<State, DispatchExts>([thunk]);

describe("Integration: Log In", () => {
  let store: MockStoreEnhanced<State, DispatchExts>;

  beforeEach(() => {
    (fetch as FetchMock).resetMocks();
    store = mockStore(initialState);
  });

  it("should send a request to the api to get the token", async () => {
    const apiUrl = "http://playground.tesonet.lt/v1/tokens";

    (fetch as FetchMock).mockResponseOnce(
      JSON.stringify({ token: "testToken" })
    );

    const wrapper = mount(
      <MemoryRouter initialEntries={["/login"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    const usernameField = wrapper.find('input[name="username"]');
    const passwordField = wrapper.find('input[name="password"]');
    const loginButton = wrapper.find('button[children="Log In"]');

    expect(usernameField).toHaveLength(1);
    expect(passwordField).toHaveLength(1);
    expect(loginButton).toHaveLength(1);

    act(() => {
      usernameField.simulate("change", {
        target: { name: "username", value: "test" }
      });
      passwordField.simulate("change", {
        target: { name: "password", value: "pw" }
      });
    });

    loginButton.simulate("click");

    expect(fetch).toHaveBeenCalledWith(apiUrl, {
      body: '{"username":"test","password":"pw"}',
      headers: { "Content-Type": "application/json" },
      method: "POST"
    });
  });

  it("should dispatch a log in success action on succesful request", () => {
    (fetch as FetchMock).mockResponseOnce(
      JSON.stringify({ token: "testToken" })
    );

    return store.dispatch(logIn("test", "password")).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        payload: { token: "testToken" },
        type: "LOG_IN_SUCCESS"
      });
    });
  });

  it("should redirect to servers list when the token is set", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/login"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    store = mockStore({ ...initialState, user: { token: "testToken" } });

    expect(wrapper.find(Servers)).toHaveLength(1);
  });
});
