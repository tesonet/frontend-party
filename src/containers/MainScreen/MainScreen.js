import React, { Component, Fragment } from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { fetchServerList, logout } from "./../../store/actions";
import DataTable from "./../../components/DataTable/DataTable.js";
import Navbar from "./../../components/Navbar/Navbar.js";
import classes from "./MainScreen.scss";

const DATA_TABLE_HEADERS = ["Server", "Distance"];

class MainScreen extends Component {
	state = {
		mounted: false,
	};
	componentDidMount() {
		this.props
			.getServerList()
			.then(() => {
				this.setState({ mounted: true });
			})
			.catch(error => {
				if (error.response.status === 401) {
					this.props.logout();
				} else {
					this.setState({ mounted: true });
				}
			});
	}
	render() {
		if (!this.state.mounted) {
			return null;
		}

		return (
			<Fragment>
				<Navbar />
				<DataTable headers={DATA_TABLE_HEADERS} allData={this.props.serverList} />
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	serverList: state.serverList,
});

const mapDispatchToProps = dispatch => ({
	getServerList: () => dispatch(fetchServerList()),
	logout: () => dispatch(logout()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MainScreen);
