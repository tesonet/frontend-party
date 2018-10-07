import { ListHeader } from '../ListHeader';

const tableColumns = [{
        title: 'Name',
        sortBy: 'name',
        sortingType: 'alphabetically'
    },
    {
        title: 'Distance',
        sortBy: 'distance',
        sortingType: 'numbers'
    }
];

it("should match snapshot", () => {
    const wrapper = shallow(
        <ListHeader tableColumns={tableColumns} handleSorting={() => {}}/>
    );
    expect(wrapper).toMatchSnapshot();
});

it("should add list headers", () => {
    const wrapper = mount(
        <ListHeader tableColumns={tableColumns} handleSorting={() => {}}/>
    );

    expect(wrapper.find('.list-header-container').children()).toHaveLength(tableColumns.length);
});
