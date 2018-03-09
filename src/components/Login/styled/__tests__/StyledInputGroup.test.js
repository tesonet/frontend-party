import React from 'react';
import { shallow } from 'enzyme';
import { InputGroup } from 'reactstrap';

import StyledInputGroup from '../StyledInputGroup';

describe('StyledInputGroup component', () => {
  it('should render the <InputGroup /> element.', () => {
    const renderedComponent = shallow(<StyledInputGroup />).dive();

    expect(renderedComponent.type()).toEqual(InputGroup);
    expect(renderedComponent).toMatchSnapshot();
  });
});
