import React from 'react';
import Login from '../routes/Login';
import renderer from 'react-test-renderer';

test('Test rendering of login', () => {
    const component = renderer.create(
      <Login/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
   
  });