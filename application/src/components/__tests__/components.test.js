import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LoginPage from '../login/LoginPage';
import Form from '../login/Form';
import PageNotFound from '../PageNotFound';
import LoadingPage from '../LoadingPage';
import Header from '../servers/Header';
import ServersPage from '../servers/ServersPage';
import configureStore from 'redux-mock-store';
import store from '../../Store';

test('Login page should render as expected',() => {
  const component = shallow(<LoginPage />);
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

test('Form should render as expected',() => {
  const component = shallow(<Form store={store} onSubmit={() => console.log('onSubmit works')}/>);
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();

  tree.props.onSubmit();

  tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

test('404 page should render as expected',() => {
  const component = shallow(<PageNotFound store={store}/>);
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

test('Loading page should render as expected',() => {
  const component = shallow(<LoadingPage />);
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

test('Header should render as expected',() => {
  const component = shallow(<Header store={store}/>);
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
})

test('Server list should render as expected', () => {
  const component = shallow(<ServersPage store={store}/>);
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
})
