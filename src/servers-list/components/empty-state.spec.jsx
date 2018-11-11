import React from 'react';
import { shallow } from 'enzyme';
import EmptyState from './empty-state';

describe('Empty State', () => {
    it('should should render empty state', () => {
        const renderedComponent = shallow(<EmptyState />);
        expect(renderedComponent).toMatchSnapshot();
    });
});
