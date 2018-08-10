import React from 'react';
import LoginView from './LoginView';

it('renders without crashing', () => {
  const wrapper = shallow(<LoginView />);
  expect(wrapper).toHaveLength(1);
});

it('has reasonable defaultProps', () => {
  expect(LoginView.defaultProps).toEqual({
    showErrors: false,
    globalError: null,
    errors: null,
    isDisabled: false,
    username: '',
    password: '',
    onSubmit: expect.any(Function),
    onChange: expect.any(Function)
  });
});

it('has a form that calls the onSubmit() handler', () => {
  const spy = jest.fn();
  const wrapper = shallow(<LoginView onSubmit={ spy } />);
  wrapper.find('form').simulate('submit');
  expect(spy).toHaveBeenCalled();
});

const table = [['username'], ['password'],];

for (let field of table) {
  let selector = { name: field[0] };

  describe(`input[${field[0]}]`, () => {
    it('exists', () => {
      const wrapper = shallow(<LoginView />);
      expect(wrapper.find(selector)).toHaveLength(1);
    });

    it('is populated with a value from the props', () => {
      const wrapper = shallow(<LoginView />);
      expect(wrapper.find(selector).prop('value')).toBe(LoginView.defaultProps[field[0]]);

      const newValue = 'A new value!';
      wrapper.setProps({ [field[0]]: newValue });
      expect(wrapper.find(selector).prop('value')).toBe(newValue);
    });

    it('calls onChange() handler', () => {
      const event = 'An event object';
      const spy = jest.fn();
      const wrapper = shallow(<LoginView onChange={ spy } />);

      wrapper.find(selector).simulate('change', event);
      expect(spy).toHaveBeenCalledWith(event);
    });
  });
}

describe('button[submit]', () => {
  const selector = 'button[type="submit"]';

  it('exists', () => {
    const wrapper = shallow(<LoginView />);
    expect(wrapper.find(selector)).toHaveLength(1);
  });

  it('becomes disabled based on prop input', () => {
    const wrapper = shallow(<LoginView isDisabled={ false } />);
    expect(wrapper.find(selector).prop('disabled')).toBe(false);

    wrapper.setProps({ isDisabled: true });
    expect(wrapper.find(selector).prop('disabled')).toBe(true);
  });
});

describe('errors', () => {
  const errors = { username: 'Bad username', password: 'Bad password' };
  const globalError = 'Global error';

  it('will not display any errors when `showErrors` flag is `false`', () => {
    const wrapper = shallow(<LoginView errors={ errors } globalError={ globalError } showErrors={ false } />);
    expect(wrapper.text()).not.toContain(errors.username);
    expect(wrapper.text()).not.toContain(errors.password);
    expect(wrapper.text()).not.toContain(globalError);
  });

  it('will display errors when `showErrors` flag is `true`', () => {
    const wrapper = shallow(<LoginView errors={ errors } globalError={ globalError } showErrors={ true } />);
    expect(wrapper.text()).toContain(errors.username);
    expect(wrapper.text()).toContain(errors.password);
    expect(wrapper.text()).toContain(globalError);
  });
});
