import {
    ModalShowAction,
    ModalHideAction,
    MODAL_HIDE,
    MODAL_SHOW,
    ModalState
} from "../types";

const initialState = {
    confirmLogout: false
} as ModalState;

const modalReducer = (
    state = initialState,
    action:
        ModalShowAction |
        ModalHideAction
) => {
    switch (action.type) {

        case MODAL_SHOW:

            if (action.payload.modal === 'logout') {
                return {
                    ...state,
                    confirmLogout: true
                };
            }

            return state;

        case MODAL_HIDE:

            return {
                ...state,
                confirmLogout: false,
            };

        default:
            return state;
    }
};

export default modalReducer;