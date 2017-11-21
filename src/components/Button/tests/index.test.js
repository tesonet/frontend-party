import React from 'react';
import { shallow } from 'enzyme';
import Button from '../index';

describe('# Components / <Button />', () => {
  it('should should render <button /> tag', () => {
    const renderedComponent = shallow(<Button />).dive();
    expect(renderedComponent.type()).toEqual('button');
    expect(renderedComponent).toMatchSnapshot();
  });
});
