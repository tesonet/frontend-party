import * as React from 'react';
import { shallow } from 'enzyme';

import LoginForm from './login-form';

const props = {
  error: '',
};

describe('LoginForm component:', () => {
  it('Should render', () => {
    const wrapper = shallow(<LoginForm.WrappedComponent {...props} />);
    expect(wrapper.length).toEqual(1);
  });

  it('Should render without errors', () => {
    const wrapper = shallow(<LoginForm.WrappedComponent {...props} />);
    expect(wrapper.find('[data-test-id="login-error"]').text()).toEqual('');
  });

  it('Should render with error', () => {
    const wrapper = shallow(
      <LoginForm.WrappedComponent {...props} error="error" />,
    );
    expect(wrapper.find('[data-test-id="login-error"]').text()).toEqual(
      'error',
    );
  });
});
