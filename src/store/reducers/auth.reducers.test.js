import authReducer from "./auth.reducers";

describe("Auth reducer", () => {
    it("should return the initial state", () => {
        expect(authReducer(undefined, {})).toEqual({
            error: null,
            loading: false,
            token: null
        });
    });
});
