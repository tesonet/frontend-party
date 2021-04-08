import React from "react";
import * as Enzyme from "enzyme";
import {Provider} from "react-redux";
import { ServersList } from "./ServersList";
import { getStore } from "../../app/store";
import { SERVERS_LIST_LOADING_FAILED_MESSAGE, SERVERS_LIST_LOADING_IN_PROGRESS_MESSAGE } from "./utils/constants";

let store = getStore();

describe("ServersList", () => {
  const setup = (_props) => {
    const props = Object.assign({}, {
      errors: {},
    }, _props);

    const wrapper = Enzyme.mount((
      <Provider store={store}>
        <ServersList {...props} />
      </Provider>
    ));

    return {
      wrapper,
      props
    };
  };

  it("should generate list of servers from servers list inside redux store", () => {
    const SERVERS_LIST = [
      {
        name: "Server1",
        distance: 0
      },
      {
        name: "Server2",
        distance: 0
      }
    ];
    store.getState = () => ({
      serversList: {
        serversList: SERVERS_LIST,
        isServersListLoading: false,
        serversListLoadingFailed: false,
      }
    });
    const { wrapper } = setup();
    expect(wrapper.find('[data-testid="server"]').length).toBe(SERVERS_LIST.length);
  });

  it("should show 'Servers list loading...' if servers list loading is in progress", () => {
    const SERVERS_LIST = [];
    store.getState = () => ({
      serversList: {
        serversList: SERVERS_LIST,
        isServersListLoading: true,
        serversListLoadingFailed: false,
      }
    });
    const { wrapper } = setup();
    expect(wrapper.find('[data-testid="servers-list-loading-error-text"]').text()).toBe(SERVERS_LIST_LOADING_IN_PROGRESS_MESSAGE);
  });

  it("should show 'Servers list loading failed. Try to refresh the page.' if error was thrown while loading", () => {
    const SERVERS_LIST = [];
    store.getState = () => ({
      serversList: {
        serversList: SERVERS_LIST,
        isServersListLoading: false,
        serversListLoadingFailed: true,
      }
    });
    const { wrapper } = setup();
    expect(wrapper.find('[data-testid="servers-list-loading-error-text"]').text()).toBe(SERVERS_LIST_LOADING_FAILED_MESSAGE);
  });
});