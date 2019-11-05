import React from 'react';

import { shallow } from 'enzyme';

// Components
import Spin from '../common/spin';
import Icon from '../common/icon';
import LoginForm from '../login/LoginForm';
import LogoContainer from '../login/LogoContainer';
import ServersList from '../dashboard/servers/ServersList';
import ServersListItem from '../dashboard/servers/ServersListItem';
import ServersListHeader from '../dashboard/servers/ServersListHeader';


describe('UI Components', () => {

    describe('Spin component', () => {
        const spinComponent = shallow(<Spin/>);
        test('renders correctly', () => {
            expect(spinComponent).toMatchSnapshot();
        });
    });

    describe('Icon component', () => {
        const iconComponent = shallow(<Icon name={'attention'}/>);
        test('renders correctly', () => {
            expect(iconComponent).toMatchSnapshot();
        });
    });

    describe('Login form component', () => {
        const loginFormComponent = shallow(<LoginForm loading={false} onLogin={() => {}} />);
        test('renders correctly', () => {
            expect(loginFormComponent).toMatchSnapshot();
        });
    });

    describe('Logo container component', () => {
        const logoContainerComponent = shallow(<LogoContainer />);
        test('renders correctly', () => {
            expect(logoContainerComponent).toMatchSnapshot();
        });
    });

    describe('ServersList component', () => {
        const serverMock = [
            {
                "name": "Germany #81",
                "distance": 650
            },
            {
                "name": "Lithuania #70",
                "distance": 210
            },
            {
                "name": "United States #98",
                "distance": 498
            },
        ];
        const activeSort = 'name';

        const changeServersSort = () => {}
        const serversListComponent = shallow(<ServersList {...{ servers: serverMock, activeSort, changeServersSort}}/>);
        test('renders correctly', () => {
            expect(serversListComponent).toMatchSnapshot();
        });
    });

    describe('Servers List Item component', () => {
        const serversListItemComponent = shallow(<ServersListItem />);
        test('renders correctly', () => {
            expect(serversListItemComponent).toMatchSnapshot();
        });
    });

    describe('ServersListHeader component', () => {
        const activeSort = 'name';
        const changeServersSort = () => {};
        const serversListHeader = shallow(<ServersListHeader {...{activeSort, changeServersSort}} />);
        test('renders correctly', () => {
            expect(serversListHeader).toMatchSnapshot();
        });
    });

});
