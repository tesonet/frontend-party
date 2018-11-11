import React from 'react';
import { shallow } from 'enzyme';
import EmptyState from '.';

describe('Empty State', () => {
    it('should should render empty state', () => {
        const renderedComponent = shallow(<EmptyState />);
        expect(renderedComponent).toMatchSnapshot();
    });
});
