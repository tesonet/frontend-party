import React from 'react';
import {shallow} from 'enzyme';
import {ITableProps, Table} from '../Table';

const tableData = [
	{key: '1', first: 'Val1', second: 'Val2'},
	{key: '2', first: 'Val3', second: 'Val4'},
];

const columns: ITableProps['columns'] = [
	{
		key: '1',
		title: 'A',
		dataIndex: 'first'
	},
	{
		key: '2',
		title: 'B',
		dataIndex: 'second',
		align: 'right'
	}
];

describe('Table', () => {
	const setup = (overrides?: Partial<ITableProps>) => {
		const wrapper = shallow(
			<Table
				columns={overrides?.columns || []}
				data={overrides?.data || []}
			/>
		);
		return {wrapper};
	};

	it('should render component', () => {
		const {wrapper} = setup();
		expect(wrapper.exists('table')).toBe(true);
	});

	it('should render header with correct data', () => {
		const {wrapper} = setup({columns});
		const header = wrapper.find('.table__thead > tr');
		expect(header.find('th').at(0).text()).toBe(columns[0].title);
		expect(header.find('th').at(1).text()).toBe(columns[1].title);
	});

	it('should render correct align properties', () => {
		const {wrapper} = setup({columns, data: tableData});
		const header = wrapper.find('.table__thead > tr');
		const body = wrapper.find('.table__tbody > tr').at(0);
		expect(header.find('th').at(0).prop('align')).toBe(columns[0].align);
		expect(header.find('th').at(1).prop('align')).toBe(columns[1].align);
		expect(body.find('td').at(0).prop('align')).toBe(columns[0].align);
		expect(body.find('td').at(1).prop('align')).toBe(columns[1].align);
	});

	it('should render correct body rows', () => {
		const {wrapper} = setup({columns, data: tableData});
		tableData.forEach((data, idx) => {
			const row = wrapper.find('.table__tbody > tr').at(idx);
			expect(row.find('td').at(0).text()).toBe(data.first);
			expect(row.find('td').at(1).text()).toBe(data.second);
		});
	});
});