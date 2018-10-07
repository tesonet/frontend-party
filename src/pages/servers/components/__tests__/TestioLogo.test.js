import { TestioLogo } from '../TestioLogo';

it("should match snapshot", () => {
    const wrapper = shallow(
        <TestioLogo logo='logo'/>
    );
    expect(wrapper).toMatchSnapshot();
});