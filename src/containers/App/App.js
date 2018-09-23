import React, { Component } from "react";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";
import { Route, withRouter, Redirect, Switch } from "react-router-dom";
import { authCheck } from "./../../store/actions/index.js";
import asyncComponent from "./../../hoc/asyncComponent.js";
const LoginScreen = asyncComponent(() => import("./../LoginScreen/LoginScreen.js"));
const MainScreen = asyncComponent(() => import("./../MainScreen/MainScreen.js"));

class App extends Component {
	state = {
		mounted: false,
	};
	componentDidMount() {
		this.props.checkIfLoggedIn();
		this.setState({
			mounted: true,
		});
	}
	render() {
		//papildomas checkas galimam memmory leakui sutvarkyti
		if (!this.state.mounted) return null;
		let pageUI;

		if (this.props.isLoggedIn) {
			pageUI = <Route exact path="/" component={MainScreen} />;
		} else {
			pageUI = <Route exact path="/" component={LoginScreen} />;
		}

		return (
			<Switch>
				{pageUI}
				<Redirect to="/" />
			</Switch>
		);
	}
}

const mapStateToProps = state => ({
	isLoggedIn: state.auth.token !== null,
});

const mapDispatchToProps = dispatch => ({
	checkIfLoggedIn: () => dispatch(authCheck()),
});

export default hot(module)(
	withRouter(
		connect(
			mapStateToProps,
			mapDispatchToProps
		)(App)
	)
);
