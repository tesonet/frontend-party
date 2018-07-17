import React from 'react';
import { shallow } from 'enzyme';
import Servers from './Servers';
import List from '../../../common/components/List/List';
import IconLabel from '../../../common/components/IconLabel/IconLabel';
import serversService from '../../services/servers.service';

jest.mock('../../services/servers.service', () => ({getServers: jest.fn()}));

describe('<Servers />', () => {
    it('should call serversService.getServers', () => {
        serversService.getServers.mockImplementation(() => Promise.resolve({}));
        const wrapper = shallow(<Servers history={{}} />);
        wrapper.instance().componentDidMount();
        expect(serversService.getServers).toHaveBeenCalled;
    });
    it('should render Logo', () => {
        const wrapper = shallow(<Servers history={{}} />);
        expect(wrapper.find('img[alt="Logo"]').length).toEqual(1);
    });
    it('should render IconLabel', () => {
        const wrapper = shallow(<Servers history={{}} />);
        expect(wrapper.find(IconLabel).length).toEqual(1);
    });
    it('should render List', () => {
        const wrapper = shallow(<Servers history={{}} />);
        expect(wrapper.find(List).length).toEqual(1);
    });
});