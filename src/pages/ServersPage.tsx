import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SiteWrapper, Modal, SiteHeader } from '../components';
import { Row, Col } from 'react-grid-system';
import { GlobalReduxState, Server } from '../types';
import { inventoryActions } from '../actions';
import { v4 as uuidv4 } from 'uuid';

const ServersPage = () => {

    //Tap into reducers
    const { expire, servers, loading, logoutModal } = useSelector((state: GlobalReduxState) => ({
        expire: state.inventoryReducer.expirationTimestamp,
        servers: state.inventoryReducer.servers,
        loading: state.inventoryReducer.loading,
        logoutModal: state.modalReducer.confirmLogout
    }));

    const dispatch = useDispatch();

    useEffect(() => {

        if (servers.length === 0 || Date.now() > expire) {

            const timer = setTimeout(() => {
                dispatch(inventoryActions.getServers());
            }, 1000);

            return () => clearTimeout(timer);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div id="content-wrapper">

                <div id="content" className="content" style={{ flex: 1 }}>

                    <SiteHeader />

                    <SiteWrapper>

                        {(loading || servers.length === 0) && <Row>
                            <Col lg={12} md={12} sm={12}>

                                <div className="list-header">
                                    Loading ...
                                </div>

                            </Col>
                        </Row>}

                        {servers.length > 0 && <Row>
                            <Col lg={12} md={12} sm={12}>

                                <div className="list-header">
                                    Server <span className="right">Distance</span>
                                </div>

                                <div className="server-list">
                                    <ul>
                                        {servers.map((singleServer: Server) => <li key={uuidv4()}>{singleServer.name} <span className="right">{singleServer.distance} km</span></li>)}
                                    </ul>
                                </div>

                            </Col>
                        </Row>}

                    </SiteWrapper>

                </div>
            </div>

            <Modal.ConfirmModal active={logoutModal} />
        </>
    );
}

export default ServersPage;