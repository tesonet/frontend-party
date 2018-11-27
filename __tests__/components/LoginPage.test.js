import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import LoginPage from '../../src/components/pages/LoginPage';
import LoginForm from '../../src/components/forms/LoginForm';

const mockStore = configureStore();
const initialState = {
    loading: true,
    errors: ['error1']
};
const store = mockStore(initialState);


describe('<LoginPage />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<LoginPage store={store} />);
            const component = wrapper.find(<LoginForm />);
            expect(toJson(component)).toMatchSnapshot();
        });

        test('dispatches event', () => {
            shallow(<LoginPage store={store} />);
            expect(store.getActions()).toMatchSnapshot();
        });
    });
});