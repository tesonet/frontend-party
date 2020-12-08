import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
import { Button } from 'components';
import Logo from '../../assets/images/logo-dark.png';
import { modalActions } from '../../actions';
import ExitSvg from 'assets/vectors/exit.svg'

const SiteHeader = () => {

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(modalActions.showModal("logout"));
    }

    return (
        <>
            <header className="navbar">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "29px 16px" }}>

                                <div style={{ flexGrow: 0 }}>
                                    <a href={`/servers/`} >
                                        <img src={Logo} alt="logo" className="navbar__logo" />
                                    </a>
                                </div>

                                <div className="menu-right">
                                    <Button
                                        id="logout"
                                        icon={ExitSvg}
                                        label="Logout"
                                        className="button button--white"
                                        handleClick={logout}
                                        loading={false}
                                    />
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
};

export default SiteHeader;