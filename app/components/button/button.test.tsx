import * as React from 'react';
import { shallow } from 'enzyme';

import Button from './button';

describe('Button component:', () => {
  it('Should render', () => {
    const wrapper = shallow(
      <Button onClick={() => {}} type="primary">
        Btn
      </Button>,
    );
    expect(wrapper.length).toEqual(1);
  });

  it('Should have children content', () => {
    const wrapper = shallow(
      <Button onClick={() => {}} type="primary">
        Children!
      </Button>,
    );
    expect(wrapper.text()).toEqual('Children!');
  });
});
