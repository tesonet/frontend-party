import React from 'react';
import { mount } from 'enzyme';
import Table from './Table';

const columns = ['Column1', 'Column2'];
const data = [
  { name: 'row1', distance: 12 },
  { name: 'row2', distance: 15 },
];

describe('<Table />', () => {
  // Input = ({ icon, type, placeholder, value, onChange, required })
  let wrapped;
  beforeEach(() => {
    wrapped = mount(<Table data={data} columns={columns} />);
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('should render', () => {
    expect(wrapped).toBeTruthy();
  });

  it('should match latest snapshot', () => {
    expect(wrapped.debug()).toMatchSnapshot();
  });

  it('should have correct headers', () => {
    const header = wrapped.find('[data-test="table-header"]');
    expect(header.contains(columns[0])).toEqual(true);
    expect(header.contains(columns[1])).toEqual(true);
  });

  it('should have correct data', () => {
    const body = wrapped.find('[data-test="table-body"]');
    expect(body.contains(data[0].name)).toEqual(true);
    expect(body.contains(data[0].distance)).toEqual(true);
    expect(body.contains(data[1].name)).toEqual(true);
    expect(body.contains(data[1].distance)).toEqual(true);
  });
});
