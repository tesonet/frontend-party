import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'reactstrap';

import StyledButton from '../StyledButton';

describe('StyledButton component', () => {
  it('should render the <Button /> element.', () => {
    const renderedComponent = shallow(<StyledButton />).dive();

    expect(renderedComponent.type()).toEqual(Button);
    expect(renderedComponent).toMatchSnapshot();
  });
});
