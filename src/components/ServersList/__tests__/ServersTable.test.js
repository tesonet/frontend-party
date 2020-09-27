import React from 'react';
import { shallow, mount } from 'enzyme';
import ServersTable from '../ServersTable';

describe('ServersTable', () => {
    const mockData = [{
        name: 'Stu Bob',
        distance: 1000,
    }, {
        name: 'Bob Stu',
        distance: 20,
    }, {
        name: 'Robert Stu',
        distance: 42,
    }, {
        name: 'Stuart Bob',
        distance: 432,
    }, {
        name: 'Stuart Bob',
        distance: 99,
    }, {
        name: 'Stuart Bob',
        distance: 9111,
    }];

    const mockColumns = [{
        accessor: 'name',
        Header: 'Bright',
        className: 'nameClass',
    }, {
        accessor: 'distance',
        Header: 'Dark',
        className: 'distanceClass',
    }];

    it('table elements are being rendered properly', () => {
        const wrapper = shallow(
            <ServersTable
                data={mockData}
                columns={mockColumns}
            />,
        );
        const headers = wrapper.find('th');
        const rows = wrapper.find('td');

        expect(wrapper.find(`.${mockColumns[0].className}`)).toHaveLength(mockData.length + 1);
        expect(headers).toHaveLength(mockColumns.length);
        expect(rows).toHaveLength(mockColumns.length * mockData.length);
    });

    it('distance values are being rendered in correct order', () => {
        const wrapper = mount(
            <ServersTable
                data={mockData}
                columns={mockColumns}
                initialState={{
                    sortBy: [
                        {
                            id: 'distance',
                        },
                        {
                            id: 'name',
                        },
                    ],
                }}
            />,
        );

        const cells = wrapper.find('.distanceClass').children();
        const renderedValues = cells.map((cell) => cell.prop('value'));
        renderedValues.shift();
        const sortedData = mockData.map(data => data.distance).sort((a, b) => a - b);

        expect(sortedData).toEqual(renderedValues);
    });
});
