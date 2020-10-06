import React from 'react';
import { shallow } from 'enzyme';
import ServersTable from '../components/ServersTable';

const serverList = [
	{
		name: 'Latvia #32',
		distance: 52,
	},
	{
		name: 'Lithuania #1',
		distance: 123,
	},
	{
		name: 'United States #15',
		distance: 7893,
	},
	{
		name: 'Spain #53',
		distance: 474,
	},
	{
		name: 'Germany #25',
		distance: 741,
	},
];

describe('<ServersTable/>', () => {
	test('displays received data correctly', () => {
		const wrapper = shallow(<ServersTable serverList={serverList} />);
		const loadedServers = wrapper.find('.table__row');
		expect(loadedServers).toHaveLength(serverList.length);
	});
});
