import reducer from "./auth";
import * as aT from "../actions/actionTypes";

describe("auth reducer", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, {})).toEqual({
			token: null,
			error: null,
			isLoggingIn: false,
		});
	});

	it("should store the token upon login", () => {
		expect(
			reducer(
				{
					token: null,
					error: null,
					isLoggingIn: false,
				},
				{
					type: aT.AUTH_SUCCESS,
					token: "some-token",
				}
			)
		).toEqual({
			token: "some-token",
			error: null,
			isLoggingIn: false,
		});
	});
});
