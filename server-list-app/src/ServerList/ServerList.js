import React, { Component } from "react";
import { connect } from 'react-redux';
import ServerListPresentation from "./Presentation/ServerList";
import ServerListActions from "./State/Actions"

class ServerListContainer extends Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <ServerListPresentation
            serverList={this.props.serverList}
            isLoading={this.props.isLoading}
            retrieveServerList={this.props.retrieveServerList}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        serverList: state.ServerList.serverList,
        isLoading: state.ServerList.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        retrieveServerList: () => {
            dispatch(ServerListActions.retrieveServerList());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServerListContainer)