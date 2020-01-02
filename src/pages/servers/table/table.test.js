import React from 'react';
import { shallow } from 'enzyme';
import Header from './tableHeader';
import TableRow from './tableRow';

it('table header should match snapshot', () => {
  const wrapper = shallow(
    <Header
      direction="desc"
      handleSort={() => {}}
      handleDirection={() => {}}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});

it('table header contains column names', () => {
  const wrapper = shallow(
    <Header
      direction="desc"
      handleSort={() => {}}
      handleDirection={() => {}}
    />,
  );
  expect(wrapper.contains('Server')).toEqual(true);
  expect(wrapper.contains('Distance')).toEqual(true);
});

it('table row should match snapshot', () => {
  const wrapper = shallow(
    <TableRow
      index={1}
      measurement="km"
      rowData={{ name: 'LT', distance: 10 }}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
