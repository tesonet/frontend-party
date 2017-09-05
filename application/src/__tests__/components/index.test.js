import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import LoginPage from '../../components/login/LoginPage';
import Form from '../../components/login/Form';
import PageNotFound from '../../components/PageNotFound';
import LoadingPage from '../../components/LoadingPage';
import store from '../../Store';

test('Login page should render as expected',() => {
  const component = shallow(<LoginPage />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

test('Form should render as expected',() => {
  const component = shallow(<Form store={store}/>);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

test('404 page should render as expected',() => {
  const component = shallow(<PageNotFound store={store}/>);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

test('Loading page should render as expected',() => {
  const component = shallow(<LoadingPage />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
