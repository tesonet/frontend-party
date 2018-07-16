import React from 'react';
import renderer from 'react-test-renderer';
import List from './List';

describe('<List />', () => {
    it('should match snapshot', () => {
        const data = [
            {
                id: 1,
                name: 'Foo',
                value: 'foo',
            },
            {
                id: 2,
                name: 'Bar',
                value: 'bar',
            },
            {
                id: 3,
                name: 'Buz',
                value: 'buz',
            },
        ];
        const columns = [
            {
                header: 'Name',
                accessor: 'name',
            },
            {
                header: 'Value',
                accessor: 'value',
                suffix: '$',
            },
        ];
        const component = renderer.create(
            <List data={data} columns={columns} />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
