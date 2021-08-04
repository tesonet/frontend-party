import React from 'react';
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';

import withReduxStore from '../../../common/tests/withReduxStore';
import { LOGIN_FORM } from '../../../config/constants';
import LoginForm from '../LoginForm';

jest.mock('../utils/validateLoginForm', () => jest.fn());

describe('LoginForm', () => {
  it('should render and call onSubmit on submit', () => {
    const onSubmit = jest.fn();

    const Component = withReduxStore(
      LoginForm,
      {
        form: LOGIN_FORM,
      },
      { onSubmit },
    );

    render(<Component />);

    fireEvent.click(screen.getByText('Login'));

    expect(onSubmit).toHaveBeenCalled();
  });
});
