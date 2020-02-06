import serversReducer from "./servers.reducers";

describe("Servers reducer", () => {
    it("should return the initial state", () => {
        expect(serversReducer(undefined, {})).toEqual({
            error: null,
            loading: false,
            data: null,
            nameSortAsc: false,
            distanceSortAsc: false
        });
    });
});
