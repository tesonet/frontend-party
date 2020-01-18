import * as actions from "./loginActions";
import * as types from "../types";

describe("actions", () => {
    it("should create action for login form loading", () => {
        const expectedAction = {
            type: types.LOGIN_FORM_LOADING,
        }
        expect(actions.onLoginLoading()).toEqual(expectedAction)
    })

    it("should create action to handle login error", () => {
        const error = "Incorrect data";
        const expectedAction = {
            type: types.LOGIN_FORM_ERROR,
            error
        }
        expect(actions.onLoginError(error)).toEqual(expectedAction)
    })

    it("should create action to handle login success", () => {
        const expectedAction = {
            type: types.LOGIN_FORM_SUCCESS
        }
        expect(actions.onLoginSuccess()).toEqual(expectedAction)
    })

})