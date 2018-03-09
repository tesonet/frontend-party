import React from 'react';
import { shallow } from 'enzyme';
import { Row } from 'reactstrap';

import StyledRow from '../StyledRow';

describe('StyledRow component', () => {
  it('should render the <Row /> element.', () => {
    const renderedComponent = shallow(<StyledRow />).dive();

    expect(renderedComponent.type()).toEqual(Row);
    expect(renderedComponent).toMatchSnapshot();
  });
});
