import * as React from "react";
import {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import Icon from "../Icon/Icon";
import {connect} from "react-redux";
import {clearServers} from "../../actions/server.actions";
import {authService} from "../../services/auth.service";

class Header extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        authService.logout().then(() => {
            this.props.history.push('/');
            this.props.clearServers();
        });
    }

    render() {
        return (
            <div className="header d-flex align-items-center justify-content-between">
                <Link className="logo logo--dark border-0" to="/"/>
                <Link onClick={this.onLogout} to="/sign-in" className="btn btn--logout">
                    <Icon name={'logout'} color={'#2F3254'} width={16} height={16}/>
                    <span>Logout</span>
                </Link>
            </div>
        )
    }
}

export default connect(null, {clearServers})(withRouter(Header));
