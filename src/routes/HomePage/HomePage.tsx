import {Component} from "react";
import * as React from "react";
import './HomePage.scss';
import ServerList from "../../components/ServerList/ServerList";
import Icon from "../../components/Icon/Icon";
import {localStorageKey} from "../../constants/auth.constants";
import {Link} from "react-router-dom";

class HomePage extends Component<any, {}> {
    onLogout() {
        const token = localStorage.getItem(localStorageKey);
        if (token) {
            localStorage.removeItem(localStorageKey);
        }
    }

    render() {
        return (
            <div>
            <div className="header d-flex align-items-center justify-content-between">
                <Link className="logo logo--dark border-0" to="/"/>
                <Link onClick={this.onLogout} to="/sign-in" className="btn btn--logout">
                    <Icon name={'logout'} color={'#2F3254'} width={16} height={16}/>
                    <span>Logout</span>
                </Link>
            </div>
                <ServerList/>
            </div>
        );
    }
}

export default HomePage;