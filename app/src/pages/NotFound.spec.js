import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import NotFound from './NotFound';

describe('NotFound', () => {
  it('renders', () => {
    expect(shallow(<NotFound />))
      .to.have.length(1);
  });

  it('has an h1 with a text "404 Page Not Found!"', () => {
    expect(shallow(<NotFound />).find('h1')).to.have.length(1);
    expect(shallow(<NotFound />).find('h1').text())
      .to.be.equal('404 Page Not Found!');
  });

  it('has a Link component pointing to "/"', () => {
    expect(shallow(<NotFound />).find(Link)).to.have.length(1);
    expect(shallow(<NotFound />).find(Link).props().to)
      .to.be.equal('/');
  });
});
