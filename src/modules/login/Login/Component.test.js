import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { compose } from 'recompose';
import { withStyletron, withReduxForm } from '../../../lib/test-utils';
import Login from './Component';

configure({ adapter: new Adapter() });

const context = { styletron: { injectRawDeclaration: () => {} } };

describe('Login', () => {
  it('Component renders corectly', () => {
    const LoginWithProviders = compose(withStyletron, withReduxForm)(Login);
    const component = renderer.create(
      <LoginWithProviders handleSubmit={() => {}} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('All form elements are rendered', () => {
    const login = shallow(<Login handleSubmit={() => {}} />, { context });
    // find username field
    const username = login.find({ type: 'text' });
    // find password field
    const password = login.find({ type: 'password' });
    // find submit button
    const submit = login.find({ type: 'submit' });
    expect(username).toHaveLength(1);
    expect(username.prop('placeholder')).toEqual('Username');
    expect(password).toHaveLength(1);
    expect(password.prop('placeholder')).toEqual('Password');
    expect(submit).toHaveLength(1);
    expect(
      submit
        .dive()
        .find('Button')
        .dive()
        .text(),
    ).toEqual('Log In');
  });

  it('Form submit callback is triggered', done => {
    shallow(<Login handleSubmit={done} />, { context })
      .find('form')
      .simulate('submit');
  });
});
