import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions, modalActions } from '../../actions';
import Button from '../Button/Button';

interface ConfirmModalProps {
    active: boolean
}

const ConfirmModal = (props: ConfirmModalProps) => {

    const { active } = props;

    const dispatch = useDispatch();

    const close = () => dispatch(modalActions.hideModals());

    const logout = () => {
        dispatch(modalActions.hideModals());
        dispatch(authActions.logout());
    }

    if (!active) return null;

    return (
        <>
            <div className="modal__container" style={{ animation: "show-modal 0.5s forwards" }}>
                <div className="modal__content">
                    <div className="modal__body" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h1>Are you sure?</h1>
                        <p style={{ fontSize: "16px", lineHeight: "24px", textAlign: "center", marginBottom: "32px" }}>There are some many(!) servers available here!<br />Please stay!</p>
                        <Button id="logout" label="Logout" className="button button--big" handleClick={logout} />
                        <Button id="stay" label="Ok, I will stay!" className="button button--link button--big" handleClick={close} />
                    </div>
                </div>
            </div>
            <div className="modal__backdrop" ></div>
        </>
    )
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { ConfirmModal };