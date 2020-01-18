import reducer from "./loginReducer";
import * as types from "../../actions/types";

describe("auth reducer", () => {
    it("should return initial state", () => {
        expect(reducer(undefined, {})).toEqual({
            error: "",
            loading: false
        })
    })

    it("should handle LOGIN_FORM_LOADING", () => {
        expect(reducer([], {
            type: types.LOGIN_FORM_LOADING,
        })).toEqual({
            loading: true
        })
    })

    it("should handle LOGIN_FORM_ERROR", () => {
        expect(reducer([], {
            type: types.LOGIN_FORM_ERROR,
            error: "error message"
        })).toEqual({
            error: "error message",
            loading: false
        })
    })

    it("should handle LOGIN_FORM_SUCCESS", () => {
        expect(reducer([], {
            type: types.LOGIN_FORM_SUCCESS,
        })).toEqual({
            error: "",
            loading: false
        })
    })
})