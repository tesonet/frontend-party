import {Component} from "react";
import * as React from "react";
import './HomePage.scss';
import ServerList from "../../components/ServerList/ServerList";
import Header from "../../components/Header/Header";
import {withRouter} from "react-router";

class HomePage extends Component<any, {}> {
    render() {
        return (
            <div>
                <Header/>
                <ServerList/>
            </div>
        );
    }
}

export default withRouter(HomePage);