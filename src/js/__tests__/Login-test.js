import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginPage from '../components/page/LoginPage';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<LoginPage />);
});