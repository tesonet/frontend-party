import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as apis from '../../api/teso';
import ServersList from './ServersList';
import ServersErrorMessage from '../ServersErrorMessage/ServersErrorMessage';
import { INITIAL_STATE } from '../../reducers/servers';

describe('Servers List', () => {
    let wrapper;
    let store;
    let serversFetchSpy;
    const mockStore = configureMockStore([thunk]);

    const serversListMock = [
        { name: 'testName1', distance: 10 },
        { name: 'testName2', distance: 5 },
        { name: 'testName3', distance: 20 }
    ];

    beforeEach(() => {
        serversFetchSpy = jest.spyOn(apis, 'getServersList').mockResolvedValue({});
        store = mockStore({ servers: { ...INITIAL_STATE } });
        wrapper = mount(<ServersList store={store} />);
    });

    afterEach(() => {
        serversFetchSpy.mockClear();
    });

    describe('on component load', () => {
        it('should call api to retrieve servers', () => {
            expect(serversFetchSpy).toHaveBeenCalledTimes(1);
        });
    });

    describe('on servers list retrieval', () => {
        it('should display retrieved servers', () => {
            store = mockStore({ servers: { ...INITIAL_STATE, serversList: serversListMock } });
            wrapper = mount(<ServersList store={store} />);

            expect(wrapper.find('.servers__item')).toHaveLength(3);
        });

        it('should display spinner when loading', () => {
            store = mockStore({ servers: { ...INITIAL_STATE, loading: true } });
            wrapper = mount(<ServersList store={store} />);

            expect(wrapper.find('.servers__spinner').exists()).toBe(true);
        });

        it('should display server error when it exists', () => {
            store = mockStore({ servers: { ...INITIAL_STATE, errorType: 'error' } });
            wrapper = mount(<ServersList store={store} />);

            expect(wrapper.find(ServersErrorMessage).exists()).toBe(true);
            expect(wrapper.find('.servers__item')).toHaveLength(0);
        });
    });

    describe('on servers sort', () => {
        it('should sort list accordingly', () => {
            store = mockStore({ servers: { ...INITIAL_STATE, serversList: serversListMock } });
            wrapper = mount(<ServersList store={store} />);

            const nameHeaderElement = wrapper.find('.servers__server');
            const distanceHeaderElement = wrapper.find('.servers__distance');

            let itemDistance;
            let itemName;

            distanceHeaderElement.simulate('click');
            itemDistance = wrapper.find('.servers__item-distance');
            expect(itemDistance.at(0).text()).toEqual('5 km');
            expect(itemDistance.at(2).text()).toEqual('20 km');

            distanceHeaderElement.simulate('click');
            itemDistance = wrapper.find('.servers__item-distance');
            expect(itemDistance.at(0).text()).toEqual('20 km');
            expect(itemDistance.at(2).text()).toEqual('5 km');

            nameHeaderElement.simulate('click');
            itemName = wrapper.find('.servers__item-name');
            expect(itemName.at(0).text()).toEqual('testName1');
            expect(itemName.at(2).text()).toEqual('testName3');

            nameHeaderElement.simulate('click');
            itemName = wrapper.find('.servers__item-name');
            expect(itemName.at(0).text()).toEqual('testName3');
            expect(itemName.at(2).text()).toEqual('testName1');
        });
    });
});
