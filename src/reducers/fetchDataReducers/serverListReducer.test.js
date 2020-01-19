import * as types from "../../actions/types";
import reducer from "./serverListReducer";

describe("serverlist reducer", () => {
    it("should return initial state", () => {
        expect(reducer(undefined, {})).toEqual({
            serverList: [],
            error: "",
            loading: false
        })
    })

    it("should handle SERVER_LIST_FETCH", () => {
        expect(reducer([], {
            type: types.SERVER_LIST_FETCH,
        })).toEqual({
            loading: true
        })
    })

    it("should handle SERVER_LIST_FETCH_ERROR", () => {
        expect(reducer([], {
            type: types.SERVER_LIST_FETCH_ERROR,
            error: "error message"
        })).toEqual({
            error: "error message",
            loading: false
        })
    })

    it("should handle LOGIN_FORM_SUCCESS", () => {
        expect(reducer([], {
            type: types.SERVER_LIST_FETCH_SUCCESS,
            serverList: [{item: 1}, {item: 2}]
        })).toEqual({
            serverList: [{item: 1}, {item: 2}],
            error: "",
            loading: false
        })
    })
})