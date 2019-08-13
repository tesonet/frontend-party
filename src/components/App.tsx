import React from "react";
import { connect } from "react-redux";
import { getServersList } from "../store/servers/actions";
import { logout } from "../store/login/actions";
import { ServerItem } from "../store/servers/types";
import ListItem from "./ListItem";
const testioLogo = require("../images/darkLogo.svg");
const logoutIcon = require("../images/logouticon.svg");

interface AppState {
    servers: ServerItem[];
    server: ServerItem;
    getServersList: () => void;
    logout: () => void;
    serversState: any; // fix it
}

class App extends React.Component<AppState, {}> {
    componentDidMount() {
        const { getServersList } = this.props;

        getServersList();
    }

    renderServersList = () => {
        const { servers } = this.props;

        if (servers) {
            servers.sort((a: any, b: any) => a.distance - b.distance);

            return servers.map((server, index: number) => (
                <ListItem
                    key={index}
                    name={server.name}
                    distance={server.distance}
                />
            ));
        } else {
            return null;
        }
    };

    render() {
        const { servers, logout } = this.props;

        if (!!servers.length) {
            return (
                <div>
                    <div className="app-header">
                        <img src={testioLogo} className="logo" alt="logo" />
                        <button className="lgt-button" onClick={logout}>
                            <img
                                className="lgt-button-icon"
                                src={logoutIcon}
                                alt="logout icon"
                            />
                            Logout
                        </button>
                    </div>
                    <div className="list-item grey">
                        <p>SERVER</p>
                        <p>DISTANCE</p>
                    </div>
                    {this.renderServersList()}
                </div>
            );
        } else return null;
    }
}

const mapStateToProps = (state: AppState) => ({
    servers: state.serversState.servers,
});

export default connect(
    mapStateToProps,
    { getServersList, logout }
)(App);
