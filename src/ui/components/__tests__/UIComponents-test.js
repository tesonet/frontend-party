import React from 'react';

import { shallow } from 'enzyme';

// Components
import Spin from '../common/spin';
import Icon from '../common/icon';
import LoginForm from '../login/LoginForm';
import LogoContainer from '../login/LogoContainer';

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

});
