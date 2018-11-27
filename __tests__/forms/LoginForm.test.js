import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import LoginForm from '../../src/components/forms/LoginForm';
const mockStore = configureStore();
const initialState = {
    loading: true,
    errors: ['error1']
};
const store = mockStore(initialState);

describe('<LoginForm />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<LoginForm store={store} />);
            const component = wrapper.dive();
            expect(toJson(component)).toMatchSnapshot();
        });

        test('dispatches event', () => {
            shallow(<LoginForm store={store} />);
            expect(store.getActions()).toMatchSnapshot();
        });

        test('should fail if no credentials are provided', () => {
            const fakeEvent = { preventDefault: () => console.log('preventDefault') };
            const loginComponent = shallow(<LoginForm store={store} />);
            expect(loginComponent.find('.form-login').length).toBe(1);
            loginComponent.find('.form-login').simulate('onSubmit', fakeEvent);
        });
    });
});