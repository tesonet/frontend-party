import { DATA_LOAD_SUCCESS, DATA_LOAD_ERROR } from "../types/typesData";

export default function user(state = {}, action = {}) {
    switch (action.type) {
        case DATA_LOAD_SUCCESS:
            return action.data;
        case DATA_LOAD_ERROR:
            return {};
        default: return state;
    }
}