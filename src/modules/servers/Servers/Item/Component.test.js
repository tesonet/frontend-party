import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Item from './Component';

configure({ adapter: new Adapter() });

const context = { styletron: { injectRawDeclaration: () => {} } };

it('All elements are rendered', () => {
  const item = shallow(<Item name="Server1" distance={100} />, {
    context,
  });
  expect(
    item
      .children()
      .first()
      .dive()
      .text(),
  ).toEqual('Server1');
  expect(
    item
      .children()
      .at(1)
      .dive()
      .text(),
  ).toEqual('100 km');
});
