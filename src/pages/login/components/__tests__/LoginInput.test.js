import { LoginInput } from '../LoginInput';

it("should match snapshot", () => {
    const wrapper = shallow(
        <LoginInput value='' handleChange={() => {}} name='name' type='text' placeholder='name'/>
    );
    expect(wrapper).toMatchSnapshot();
});

it("should add classname", () => {
    const wrapper = mount(
        <LoginInput value='' handleChange={() => {}} name='name' type='text' placeholder='name'/>
    );
    expect(wrapper.exists('.input-container-name')).toEqual(true);
});