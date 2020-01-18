import * as actions from "./authAction";
import * as types from "../types";

describe("actions", () => {
    it("should create action to authenticate user", () => {
        const username = {username: "test"};
        const authToken = "damlskpmasdoap";
        const expectedAction = {
            type: types.AUTH_USER,
            username,
            authToken
        }
        expect(actions.authUser(username, authToken)).toEqual(expectedAction)
    })

    it("should create action to logout user", () => {
        const expectedAction = {
            type: types.LOG_OUT
        }
        expect(actions.logoutUser()).toEqual(expectedAction)
    })
})