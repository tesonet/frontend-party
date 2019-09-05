import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Provider as AlertProvider } from 'react-alert';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ProtectedRoute } from './authorization/protectedRoute';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders AlertProvider component', () => {
  const wrapper = shallow( <App /> );
  
  expect(wrapper.find(AlertProvider)).toHaveLength(1);
});

it('renders Route component times 2', () => {
  const wrapper = shallow( <App /> );

  expect(wrapper.find(Route)).toHaveLength(2);
})

it('renders ProtectedRoute component times 2', () => {
  const wrapper = shallow( <App /> );

  expect(wrapper.find(ProtectedRoute)).toHaveLength(2);
})

it('renders Router component', () => {
  const wrapper = shallow( <App /> );

  expect(wrapper.find(Router)).toHaveLength(1);
})