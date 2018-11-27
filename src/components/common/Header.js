import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as authActions from "../../actions/auth";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { isAuthenticated, logout } = this.props;
        return (
            <div id="tes-header">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"><img className="logo-img" src="images/testio-2.png"></img></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" pills>
                            <NavItem>
                                {isAuthenticated ? (
                                    <NavLink  href="javascript:void(0)" onClick={() => logout()} className="text-uppercase font-weight-bold text-dark">
                                        <FontAwesomeIcon icon={faSignOutAlt} />
                                        &nbsp;
                                        <span>
                                            logout
                                        </span>
                                    </NavLink>
                                ) : (null)}
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token,
    }
}

export default connect(mapStateToProps, { logout: authActions.logout })(Header);