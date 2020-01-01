import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import Header from './tableHeader';
import TableRow from './tableRow';

it('tableheader should match snapshot', () => {
  const wrapper = shallow(
    <Header
      direction="desc"
      handleSort={() => {}}
      handleDirection={() => {}}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});

it('tablerow should match snapshot', () => {
  const wrapper = shallow(
    <TableRow
      measurement="km"
      rowData={[{ name: 'LT', distance: 10 }]}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
