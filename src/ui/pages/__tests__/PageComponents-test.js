import React from 'react';

import { shallow } from 'enzyme';

// Components
import Home from '../home';
import Dashboard from '../dashboard';
import Login from '../login';
import NotFound from '../notFound';
import Servers from '../dashboard/servers';

describe('Page UI components', () => {

    describe('Home page component', () => {
        const homePageComponent = shallow(<Home/>);
        test('renders correctly', () => {
            expect(homePageComponent).toMatchSnapshot();
        });
    });

    describe('Login page component', () => {
        const loginpageComponent = shallow(<Login />);
        test('renders correctly', () => {
            expect(loginpageComponent).toMatchSnapshot();
        });
    });

    describe('NotFound page container component', () => {
        const notFoundPageComponent = shallow(<NotFound />);
        test('renders correctly', () => {
            expect(notFoundPageComponent).toMatchSnapshot();
        });
    });

    describe('Dashboard pages', () => {
        describe('Dashboard Home page component', () => {
            const dashboardHomePageComponent = shallow(<Dashboard />);
            test('renders correctly', () => {
                expect(dashboardHomePageComponent).toMatchSnapshot();
            });
        });

        describe('Dashboard Servers page component', () => {
            const dashboardServersPageComponent = shallow(<Servers />);
            test('renders correctly', () => {
                expect(dashboardServersPageComponent).toMatchSnapshot();
            });
        });
    });

});
