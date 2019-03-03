import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import React from 'react';

import reducerAuth from '../redux/auth/reducer.js';
import reducerList from '../redux/list/reducer.js';
import RouterContainer from '../components/router/RouterContainer.js';
import LoginContainer from '../components/login/LoginContainer.js';
import ListContainer from '../components/list/ListContainer.js';

import { render, fireEvent } from 'react-testing-library';

const rootReducer = combineReducers({
  reducerAuth,
  reducerList,
});

// helper function to render with initial state
function renderWithRedux(ui, { initialState, store = createStore(rootReducer, initialState) } = {}) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

test('login page renders with default state', () => {
  const { getByPlaceholderText, getByTestId } = renderWithRedux(<LoginContainer />);
  const inputName = getByPlaceholderText(/username/i);
  expect(inputName).toHaveAttribute('type', 'text');
  const inputPassword = getByPlaceholderText(/password/i);
  expect(inputPassword).toHaveAttribute('type', 'password');
  const submitInput = getByTestId('login-button');
  expect(submitInput).toBeInTheDocument();
});

test('username input autofocuses', () => {
  const { getByPlaceholderText } = renderWithRedux(<LoginContainer />);
  const inputName = getByPlaceholderText(/username/i);
  expect(inputName).toHaveFocus();
});

test('login load indicator works', () => {
  const { getByTestId } = renderWithRedux(<LoginContainer />);
  const submitInput = getByTestId('login-button');
  expect(submitInput).toHaveAttribute('value', 'Log In');
  fireEvent.click(submitInput);
  expect(submitInput).toHaveAttribute('value', 'Logging In..');
});

test('login state renders correct component', () => {
  const { getByTestId, store } = renderWithRedux(<RouterContainer />);
  store.dispatch({
    type: 'LOCAL_TOKEN_FOUND',
  });
  store.dispatch({
    type: 'LOG_IN_SUCCESS',
  });

  const logOutButton = getByTestId('logout-button');
  expect(logOutButton).toBeInTheDocument();

  store.dispatch({
    type: 'LOG_OUT',
  });

  const submitInput = getByTestId('login-button');
  expect(submitInput).toBeInTheDocument();
});

test('render list items', () => {
  const serverName = 'Server #1337';
  const { getByText, store } = renderWithRedux(<ListContainer />);

  store.dispatch({
    type: 'API_FETCH_SERVERS_SUCCESS',
    payload: {
      data: [
        {
          name: serverName,
          distance: 59,
        },
      ],
    },
  });

  const listItemWithText = getByText(new RegExp(`${serverName}`, 'i'));
  expect(listItemWithText).toBeInTheDocument();
});

test('correctly sort list items', () => {
  const { getByText, store, debug } = renderWithRedux(<ListContainer />);
  const name1 = 'ccc';
  const name2 = 'bbb';
  const name3 = 'aaa';
  store.dispatch({
    type: 'API_FETCH_SERVERS_SUCCESS',
    payload: {
      data: [
        {
          name: name1,
          distance: 59,
        },
        {
          name: name2,
          distance: 59,
        },
        {
          name: name3,
          distance: 59,
        },
      ],
    },
  });
  const listFromStore = store.getState().reducerList.list;
  expect(listFromStore[0]['name']).toEqual('aaa');
  expect(listFromStore[1]['name']).toEqual('bbb');
  expect(listFromStore[2]['name']).toEqual('ccc');
});

test('fetch error display', () => {
  const errorMessage = 'no bueno';
  const { getByText, store } = renderWithRedux(<ListContainer />);

  store.dispatch({
    type: 'API_FETCH_SERVERS',
  });
  store.dispatch({
    type: 'API_FETCH_SERVERS_FAILED',
    payload: { error: errorMessage },
  });

  const error = getByText(new RegExp(`${errorMessage}`, 'i'));
  expect(error).toBeInTheDocument();
});

test('login error display', () => {
  const { getByTestId, store } = renderWithRedux(<LoginContainer />);
  const errorMessage = 'example error message';

  store.dispatch({
    type: 'LOG_IN_ERROR',
    payload: { error: errorMessage },
  });

  const errorContainer = getByTestId('login-error');
  expect(errorContainer).toHaveTextContent(errorMessage);
});
