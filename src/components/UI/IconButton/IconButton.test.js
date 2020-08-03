import React from 'react';
import { shallow, mount } from 'enzyme';
import IconButton from './IconButton';

describe('<IconButton />', () => {
  let wrapped = shallow(<IconButton icon="user" buttonText="test" onClick={() => { }} />);

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render', () => {
    expect(wrapped).toBeTruthy();
  });

  it('should match latest snapshot', () => {
    expect(wrapped.debug()).toMatchSnapshot();
  });

  it('should pass icon prop', () => {
    wrapped = mount(<IconButton icon="user" buttonText="test" onClick={() => { }} />);
    expect(wrapped.prop('icon')).toEqual('user');
  });

  it('should simulate event', () => {
    const mockCallback = jest.fn();

    wrapped = shallow(<IconButton icon="user" buttonText="test" onClick={mockCallback} />).simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(1);
  });

  it('should have text from props', () => {
    expect(wrapped.contains('test')).toEqual(true);
  });
});
