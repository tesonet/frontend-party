import {
    MODAL_SHOW,
    MODAL_HIDE
} from '../types';

const showModal = (modal: string) => {

    return async (dispatch: any) => {
        dispatch({ type: MODAL_SHOW, payload: { modal: modal } });
    }
};

const hideModals = () => {

    return async (dispatch: any) => {
        dispatch({ type: MODAL_HIDE });
    }
};

export const modalActions = { showModal, hideModals };