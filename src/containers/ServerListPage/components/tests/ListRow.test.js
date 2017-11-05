import React from 'react';
import { shallow } from 'enzyme';
import ListRow from '../ListRow';

describe('# Server list page <ListRow />', () => {
  it('should should render <div /> tag', () => {
    const renderedComponent = shallow(<ListRow />);
    expect(renderedComponent.type()).toEqual('div');
    expect(renderedComponent).toMatchSnapshot();
  });
});
