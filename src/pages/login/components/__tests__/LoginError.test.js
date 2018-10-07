import { LoginError } from '../LoginError';

it("should match snapshot", () => {
    const wrapper = shallow(
        <LoginError errorMessage='Error message'/>
    );

    expect(wrapper).toMatchSnapshot();
})
it("should render error message", () => {
    const wrapper = mount(
        <LoginError errorMessage='Error message'/>
    );
    const text = wrapper.text();

    expect(text).toEqual('Error message')
})