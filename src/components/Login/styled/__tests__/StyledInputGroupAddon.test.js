import React from 'react';
import { shallow } from 'enzyme';
import { InputGroupAddon } from 'reactstrap';

import StyledInputGroupAddon from '../StyledInputGroupAddon';

describe('StyledInputGroupAddon component', () => {
  it('should render the <InputGroupAddon /> element.', () => {
    const renderedComponent = shallow(<StyledInputGroupAddon />).dive();

    expect(renderedComponent.type()).toEqual(InputGroupAddon);
    expect(renderedComponent).toMatchSnapshot();
  });
});
