import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { GetServers } from "../../../api/servers";
import { getItem, removeItem } from "../../../utils/localStorageHelpers";
import { Redirect } from "react-router-dom";
import { ListHeader } from "../components/ListHeader";
import { ListRow } from "../components/ListRow";
import { PageHeader } from "../components/PageHeader";
import { getSortingFunction } from "../../../utils/sortingHelpers";
import Logo from "../../../assets/images/dark-logo.png";

class ServersList extends Component {
    constructor() {
        super();
        this.state = {
            servers: [],
            redirectToLogin: false,
            isSortDirectionDesc: false,
            loading: true
        };
    }

    componentDidMount() {
        let authToken = getItem("token");

        if (!authToken) {
            //Handle no token
            this.setState({ redirectToLogin: true });
            return;
        }

        GetServers(authToken)
            .then(servers => {
                this.setState({ servers, loading: false });
            })
            .catch(error => {
                // Handle not valid token
                this.clearLoginData();
            });
    }

    logout = () => {
        this.clearLoginData();
    };

    sortList = (sortBy, sortingType) => {
        let sortingFunction = getSortingFunction(sortingType);
        let sortingDirectionDesc = true;

        if (this.state.isSortDirectionDesc) {
            sortingDirectionDesc = false;
        }
        this.setState({ isSortDirectionDesc: sortingDirectionDesc });
        this.setState({
            servers: sortingFunction(
                this.state.servers,
                sortBy,
                this.state.isSortDirectionDesc
            )
        });
    };

    clearLoginData() {
        removeItem("token");
        this.setState({ redirectToLogin: true });
    }

    tableColumns = [
        {
            title: "Name",
            sortBy: "name",
            sortingType: "alphabetically"
        },
        {
            title: "Distance",
            sortBy: "distance",
            sortingType: "numbers"
        }
    ];

    render() {
        if (this.state.redirectToLogin) {
            return <Redirect to="/login" />;
        }

        return (
            <div>
                <PageHeader handleLogout={this.logout} logo={Logo} />
                <ListHeader
                    tableColumns={this.tableColumns}
                    handleSorting={this.sortList}
                />
                {this.state.servers.map((item, index) => (
                    <ListRow rowEntry={item} key={index} distanceSuffix="km" />
                ))}
                {this.state.loading ? (
                    <div className="loader">
                        <Loader type="ThreeDots" color="#99cc33" />
                    </div>
                ) : (
                    ""
                )}
            </div>
        );
    }
}

export default ServersList;