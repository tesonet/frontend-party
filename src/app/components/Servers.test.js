import React from 'react';
import {shallow} from 'enzyme';
import _ from 'lodash';

import {Servers} from './Servers';


const MOCK_TRANSLATIONS = {
  servers: {
    noData: 'No data text',
  },
};


jest.mock('~/api', () => ({}));
jest.mock('~/i18n', () => ({
  t: key => _.get(MOCK_TRANSLATIONS, key),
}));


describe('Servers', () => {
  it('should display {Loading} component', () => {
    const wrapper = shallow(<Servers isLoading hasLoaded={false} />);
    expect(wrapper.find('Loading').length).toBe(1);
    expect(wrapper.contains(MOCK_TRANSLATIONS.servers.noData)).toBeFalsy();
  });


  it('should display {noData} text from i18n when loading is complete and no data {null} passed', () => {
    const wrapper = shallow(<Servers isLoading={false} hasLoaded />);
    expect(wrapper.find('Loading').length).toBe(0);
    expect(wrapper.contains(MOCK_TRANSLATIONS.servers.noData)).toBeTruthy();
  });


  it('should display {noData} text from i18n when loading is complete and no data {[]} passed', () => {
    const wrapper = shallow(<Servers isLoading={false} hasLoaded data={[]} />);
    expect(wrapper.find('Loading').length).toBe(0);
    expect(wrapper.contains(MOCK_TRANSLATIONS.servers.noData)).toBeTruthy();
  });


  it('should display servers data ({name} and {distance})', () => {
    const servers = [{
      name: 'Serveronator777',
      distance: 1230001337,
    }, {
      name: 'rackspacexxxxx',
      distance: 13579000111,
    }];
    const wrapper = shallow(<Servers isLoading={false} hasLoaded data={servers} />);

    expect(wrapper.find('Loading').length).toBe(0);
    expect(wrapper.contains(MOCK_TRANSLATIONS.servers.noData)).toBeFalsy();
    expect(wrapper.contains(servers[0].name)).toBeTruthy();
    expect(wrapper.contains(servers[0].distance)).toBeTruthy();
    expect(wrapper.contains(servers[1].name)).toBeTruthy();
    expect(wrapper.contains(servers[1].distance)).toBeTruthy();
  });
});
