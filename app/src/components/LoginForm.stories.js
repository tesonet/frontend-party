import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@kadira/storybook';
import configureStore from '../store/configureStore';
import LoginForm from './LoginForm';
import '../style.scss';

const props = {
  handleSubmit: () => {},
};

const store = configureStore();

storiesOf('LoginForm', module)
  .addDecorator(story => (
    <Provider store={store}>
      {story()}
    </Provider>
  ))
  .add('empty', () => (
    <LoginForm {...props} />
  ));
