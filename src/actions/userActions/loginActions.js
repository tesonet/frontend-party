import * as types from "../types";

export const onInputChange = (e) => {
    return {
        type: types.LOGIN_FORM_INPUT_CHANGE,
        name: e.target.name,
        value: e.target.value
    }
}