import * as types from "../../actions/types";

const initialState = {
    username: "",
    password: "",
    error: "",
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_FORM_INPUT_CHANGE:
            return {...state, [action.name]: action.value};
        default:
            return state;
    }
}