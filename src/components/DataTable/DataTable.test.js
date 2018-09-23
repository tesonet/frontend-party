import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DataTable from "./DataTable.js";

//connect enzyme
configure({ adapter: new Adapter() });

describe("DataTable component", () => {
	const allDataProp = {
		data: [{ test: "test", test2: "test2" }, { test: "test", test2: "test2" }, { test: "test", test2: "test2" }],
		error: null,
		isFetching: false,
	};
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<DataTable />);
	});

	it("should show error if server request failed", () => {
		wrapper.setProps({ allData: { data: null, error: { message: "some-error" }, isFetching: false } });
		const error = wrapper.find("tbody tr td");
		expect(error).toHaveLength(1);
		expect(error.text()).toBe("some-error");
	});

	it("should show all data on table if server request successful", () => {
		wrapper.setProps({ allData: allDataProp });
		const dataRows = wrapper.find("tbody tr");
		expect(dataRows).toHaveLength(allDataProp.data.length);
		const headers = wrapper.find("thead tr th");
		expect(headers).toHaveLength(Object.keys(allDataProp.data[0]).length);
	});

	it("should have correct initial state when allData.data is null", () => {
		wrapper.setProps({ allData: { data: null, error: null, isFetching: true } });
		expect(wrapper.state().currentKey).toEqual(null);
		expect(wrapper.state().availableSortKeys).toEqual([]);
	});

	it("should have correct initial state when allData.data is not null and have proper structure", () => {
		wrapper.setProps({ allData: allDataProp });
		const newSortKey = Object.keys(allDataProp.data[0])[0];
		expect(wrapper.state().currentKey).toEqual(newSortKey);
		expect(wrapper.state().availableSortKeys).toEqual([{ sortKey: newSortKey, isAscending: true }]);
	});

	it("should update correctly state when table header is clicked", () => {
		wrapper.setProps({ allData: allDataProp });
		console.log("last test");
		const headers = wrapper.find("thead tr th");
		let index = 0;
		let header = headers.at(index);
		while (header) {
			const oldState = wrapper.state();
			const newSortKey = Object.keys(allDataProp.data[0])[index];
			const keyIndex = oldState.availableSortKeys.findIndex(sortData => sortData.sortKey === newSortKey);
			const updatedAvailableSortKeys = [...oldState.availableSortKeys];
			if (keyIndex !== -1) {
				const sortData = updatedAvailableSortKeys[keyIndex];
				const newOrder = !sortData.isAscending;
				updatedAvailableSortKeys[keyIndex] = { sortKey: newSortKey, isAscending: newOrder };
			} else {
				updatedAvailableSortKeys.push({ sortKey: newSortKey, isAscending: true });
			}

			header.simulate("click");
			expect(wrapper.state().currentKey).toEqual(newSortKey);
			expect(wrapper.state().availableSortKeys).toEqual(updatedAvailableSortKeys);

			index++;
			if (headers.get(index)) {
				header = headers.at(index);
			} else {
				break;
			}
		}
	});
});
