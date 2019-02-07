import * as React from 'react';
import TextInput from '../../../components/form/TextInput';
import { shallow, mount } from 'enzyme';
import '../../../utils/mocalStorage';

describe('TextInput component', () => {
  it('On change returns and changed value and input name from props', () => {
    let inputVal: string = '';
    let inputName: string = '';

    const onChange = (value: string, name: string) => {
      inputVal = value;
      inputName = name;
    }

    const wrapper = mount(<TextInput
      value={inputVal}
      type="text"
      name="test"
      onChanged={onChange}
    />);

    const input = wrapper.find('input');

    (input.instance() as any).value = 'change';
    input.simulate('change');

    expect(inputVal === 'change' && inputName === "test").toBeTruthy();
  });

  it('Sets input type correctly', () => {
    const wrapper = shallow(<TextInput
      value=""
      type="text"
      name="test"
      onChanged={() => {}}
    />);

    expect(wrapper.find('input[name="test"][type="text"]')).toBeDefined();
  });
});
