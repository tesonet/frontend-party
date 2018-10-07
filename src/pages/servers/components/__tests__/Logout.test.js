import { Logout } from '../Logout';

it("should match snapshot", () => {
    const wrapper = shallow(
        <Logout handleLogout={() => {}}/>
    );
    expect(wrapper).toMatchSnapshot();
});