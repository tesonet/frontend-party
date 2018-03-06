import React from 'react';
import { shallow } from 'enzyme';
import { Input } from 'reactstrap';

import StyledInput from '../StyledInput';

describe('StyledInput component', () => {
  it('should render the <Input /> element.', () => {
    const renderedComponent = shallow(<StyledInput />).dive();

    expect(renderedComponent.type()).toEqual(Input);
    expect(renderedComponent).toMatchSnapshot();
  });
});
