import { ListRow } from '../ListRow';

it("should match snapshot", () => {
    const wrapper = shallow(
        <ListRow rowEntry={{name: 'name', distance: '100'}} key='1' distanceSuffix='km'/>
    );

    expect(wrapper).toMatchSnapshot();
})

it("should add suffix", () => {
	const suffix = 'km';
    const wrapper = mount(
        <ListRow rowEntry={{name: 'name', distance: '100'}} key='1' distanceSuffix={suffix}/>
    );
    
    expect(wrapper.find('.distance').text()).toEqual(`100 ${suffix}`)
})