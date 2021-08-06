import React from 'react';
import { combineReducers, createStore } from 'redux';
import { reduxForm, reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';

import userReducer from '../../store/user/reducer';

const withReduxForm = (Component, formOptions, props = {}) => {
  const ComponentWithReduxForm = reduxForm(formOptions)(Component);

  const store = createStore(combineReducers({
    form: formReducer,
    user: userReducer,
  }));

  return () => (
    <Provider store={store}>
      <ComponentWithReduxForm {...props} />
    </Provider>
  );
};

export default withReduxForm;
