import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {
  Glyphicon,
} from 'react-bootstrap';
import FlatButton from './FlatButton';

describe('FlatButton', () => {
  const props = {
    icon: 'ok',
    onClick: () => {},
  };

  it('renders', () => {
    expect(shallow(<FlatButton {...props}>Submit</FlatButton>))
      .to.have.length(1);
  });

  it('has Glyphicon component', () => {
    expect(shallow(<FlatButton {...props}>Submit</FlatButton>).find(Glyphicon))
      .to.have.length(1);
  });

  it('has correct children', () => {
    const expected = '<Glyphicon />Submit';
    expect(shallow(<FlatButton {...props}>Submit</FlatButton>).text())
      .to.be.equal(expected);
  });
});
