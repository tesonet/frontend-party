import { PageHeader } from '../PageHeader';

it("should match snapshot", () => {
    const wrapper = shallow(
        <PageHeader handleLogout={() => {}} logo='Logo'/>
    );
    expect(wrapper).toMatchSnapshot();
})