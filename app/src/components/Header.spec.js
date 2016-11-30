import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from './Header';
import FlatButton from './FlatButton';

describe('Header', () => {
  const props = {
    onButtonClick: () => {},
  };

  it('renders', () => {
    expect(shallow(<Header {...props} />))
      .to.have.length(1);
  });

  it('has a FlatButton component', () => {
    expect(shallow(<Header {...props} />).find(FlatButton))
      .to.have.length(1);
  });

  it('has a img component', () => {
    expect(shallow(<Header {...props} />).find('img'))
      .to.have.length(1);
  });
});
