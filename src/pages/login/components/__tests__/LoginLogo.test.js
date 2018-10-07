import { LoginLogo } from '../LoginLogo';

it("should match snapshot", () => {
    const wrapper = shallow(
        <LoginLogo logo='logo'/>
    );
    expect(wrapper).toMatchSnapshot();
})