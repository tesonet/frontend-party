import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import List from './List';

describe('LoginForm', () => {
  const props = {
    data: [{
      name: 'Lithuania',
      distance: 11,
    }, {
      name: 'Panama',
      distance: 10150,
    }],
  };

  it('renders', () => {
    expect(shallow(<List {...props} />))
      .to.have.length(1);
  });

  it('has a header', () => {
    expect(shallow(<List {...props} />).find('.list-header'))
      .to.have.length(1);
  });

  it('has a correct number of rows', () => {
    expect(shallow(<List {...props} />).find('.list-item'))
      .to.have.length(2);
  });

  it('adds "km" at the end of the distance unit', () => {
    shallow(<List {...props} />).find('.list-item').forEach((item, i) => {
      const expected = `${props.data[i].name + props.data[i].distance} km`;
      expect(item.text()).to.be.equal(expected);
    });
  });
});
