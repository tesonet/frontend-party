import reducer from "./authReducer";
import * as types from "../../actions/types";

describe("auth reducer", () => {
    it("should return initial state", () => {
        expect(reducer(undefined, {})).toEqual({
            isAuth: false,
            authToken: "",
            username: "" 
        })
    })

    it("should handle AUTH_USER", () => {
        expect(reducer([], {
            type: types.AUTH_USER,
            authToken: "authtoken",
            username: "username"
        })).toEqual({
            isAuth: true,
            authToken: "authtoken",
            username: "username"
        })
    })

    it("should handle LOG_OUT", () => {
        expect(reducer([], {
            type: types.LOG_OUT
        })).toEqual({
            isAuth: false,
            authToken: "",
            username: "" 
        })
    })
})