import React from 'react';
import { Container } from 'react-grid-system';
import { useSelector } from 'react-redux';
import { GlobalReduxState } from '../../types';
import { Modal } from '..';

interface SiteWrapperProps {
    children: React.ReactNode,
    className?: string
}

const SiteWrapper = (props: SiteWrapperProps) => {

    const { children } = props;

    // Tap into reducers..
    const { showConfirmLogout } = useSelector((state: GlobalReduxState) => ({
        showConfirmLogout: state.modalReducer.confirmLogout,
        // add more here...
    }));

    return (
        <>
            <Container>

                {children}

            </Container>

            <Modal.ConfirmModal active={showConfirmLogout} />
        </>
    );
};

export default SiteWrapper;