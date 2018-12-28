import React from 'react';
import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Auth } from './Auth';
import AlertMessage from '../AlertMessage/AlertMessage';
import Spinner from '../Spinner/Spinner';

configure({adapter: new Adapter()});

describe('<Auth/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Auth/>);
    });

    it('should render <AlerMessage/> element if error is not null', () => {
        wrapper.setProps({error: 'error'});        
        expect(wrapper.find(AlertMessage)).toHaveLength(1);
    });

    it('should render <Spinner/> element if loading is true', () => {
        wrapper.setProps({loading: true});        
        expect(wrapper.find(Spinner)).toHaveLength(1);
    });

});