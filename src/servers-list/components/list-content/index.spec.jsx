import React from 'react';
import { shallow } from 'enzyme';
import { ListContent } from '.';

describe('List Content', () => {
    it('should render loader', () => {
        const props = {
            serversList: [],
            loading: true
        };

        const renderedComponent = shallow(<ListContent {...props} />);
        expect(renderedComponent).toMatchSnapshot();
    });

    it('should render servers list', () => {
        const props = {
            serversList: [{
                distance: 11,
                name: 'Server1',
                key: '1'
            }, {
                distance: 1,
                name: 'Server2',
                key: '2'
            }],
            loading: false
        };

        const renderedComponent = shallow(<ListContent {...props} />);
        expect(renderedComponent).toMatchSnapshot();
    });

    it('should render error message', () => {
        const props = {
            serversList: [],
            loading: false,
            failedToLoad: true
        };

        const renderedComponent = shallow(<ListContent {...props} />);
        expect(renderedComponent).toMatchSnapshot();
    });
});
