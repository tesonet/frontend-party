import reducer from "./serverList";
import * as aT from "../actions/actionTypes";

describe("serverList reducer", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, {})).toEqual({
			data: null,
			error: null,
			isFetching: false,
		});
	});

	it("should store data upon successs", () => {
		expect(
			reducer(
				{
					data: null,
					error: null,
					isFetching: true,
				},
				{
					type: aT.REQUEST_SERVER_LIST_SUCCESS,
					data: "some-data",
				}
			)
		).toEqual({
			data: "some-data",
			error: null,
			isFetching: false,
		});
	});

	it("should store error upon failure", () => {
		expect(
			reducer(
				{
					data: null,
					error: null,
					isFetching: true,
				},
				{
					type: aT.REQUEST_SERVER_LIST_FAIL,
					error: "some-error",
				}
			)
		).toEqual({
			data: null,
			error: "some-error",
			isFetching: false,
		});
	});
});
