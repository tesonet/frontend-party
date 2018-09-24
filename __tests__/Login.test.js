import React from 'react';
//import ReactDOM from 'react-dom';
import Login from '../src/components/Login';
import renderer from 'react-test-renderer';

test(" snapshot test", () => {
    const tree =renderer.create(<Login />).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
})