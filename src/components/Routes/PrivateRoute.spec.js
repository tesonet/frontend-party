import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import storage from '../../utils/localStorage';

describe('Private route', () => {
    let wrapper;
    const mockComponent = () => <div id="testId">A mock</div>;

    afterEach(() => {
        localStorage.clear();
    });

    describe('on component load', () => {
        it('should load provided component if auth token exists', () => {
            storage.set('authToken', JSON.stringify('testToken'));

            wrapper = mount(
                <BrowserRouter>
                    <Switch>
                        <PrivateRoute component={mockComponent} />
                    </Switch>
                </BrowserRouter>
            );

            expect(wrapper.find('#testId').exists()).toBe(true);
        });

        it('should redirect user if auth token does not exist', () => {
            wrapper = mount(
                <BrowserRouter>
                    <Switch>
                        <PrivateRoute component={mockComponent} />
                    </Switch>
                </BrowserRouter>
            );

            expect(wrapper.find(Redirect).exists()).toBe(true);
        });
    });
});
