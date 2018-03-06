import React from 'react';
import { shallow } from 'enzyme';

import Login from '../Login';

const withFormik = jest.fn(); // eslint-disable-line no-unused-vars

describe('Login component', () => {
  const props = {
    store: {
      getState: () => ({
        auth: {
          token: null,
          isLoading: false,
          error: null,
        },
      }),
      subscribe: jest.fn(),
      dispatch: jest.fn(),
    },
    values: {},
    touched: {},
    errors: {},
    isSubmitting: false,
    handleChange: jest.fn(),
    handleBlur: jest.fn(),
    handleSubmit: jest.fn(),
    push: jest.fn(),
    errorDismiss: jest.fn(),
    isLoading: false,
    token: null,
    error: null,
  };

  it('should render the Login component.', () => {
    const renderedComponent = shallow(<Login {...props} />).dive();

    expect(renderedComponent).toMatchSnapshot();
  });
});
