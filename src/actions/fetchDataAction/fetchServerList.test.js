import * as actions from "./fetchServerList";
import * as types from "../types";

describe("actions", () => {
    it("should create action to fetch data", () => {
        const expectedAction = {
            type: types.SERVER_LIST_FETCH,
        }
        expect(actions.onServerListFetch()).toEqual(expectedAction)
    })

    it("should create action to handle fetch error", () => {
        const error = "Fetch error";
        const expectedAction = {
            type: types.SERVER_LIST_FETCH_ERROR,
            error
        }
        expect(actions.onServerListFetchError(error)).toEqual(expectedAction)
    })


    it("should create action to handle fetch success", () => {
        const serverList = [];
        const expectedAction = {
            type: types.SERVER_LIST_FETCH_SUCCESS,
            serverList
        }
        expect(actions.onServerListFetchSuccess(serverList)).toEqual(expectedAction)
    })
})