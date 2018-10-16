import * as React from 'react';
import { shallow } from 'enzyme';

import Input from './input';

const props = {
  value: '',
  onChange: () => {},
};

describe('Input component:', () => {
  it('Should render', () => {
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.length).toEqual(1);
  });

  it('Should render without icon', () => {
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.find('[data-test-id="input-icon"]').length).toEqual(0);
  });

  it('Should render with icon', () => {
    const wrapper = shallow(<Input {...props} icon={<div />} />);
    expect(wrapper.find('[data-test-id="input-icon"]').length).toEqual(1);
  });
});
