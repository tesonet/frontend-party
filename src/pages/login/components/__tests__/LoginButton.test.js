import { LoginButton } from '../LoginButton';

it("should match snapshot", () => {
    const wrapper = shallow(
        <LoginButton handleClick={() => {}}/>
    );
    expect(wrapper).toMatchSnapshot();
})