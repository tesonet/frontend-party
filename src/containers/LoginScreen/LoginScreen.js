import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import InputBoxWithIcon from "./../../components/InputBoxWithIcon/InputBoxWithIcon.js";
import axios from "axios";
import { auth, authClearError, authFail } from "./../../store/actions";
import Loader from "./../../components/Loader/Loader.js";
import Backdrop from "./../../components/Backdrop/Backdrop.js";
import logoIcon from "./../../assets/logotype-testio.png";
import classes from "./LoginScreen.scss";

const USERNAME = "username";
const PASSWORD = "password";
const ERROR_MESSAGE_DISPLAY_TIME = 5000;
const INPUT_EMPTY_ERROR = "Input fields shouldn't be empty";

class LoginScreen extends Component {
	userInputRef = React.createRef();
	state = {
		[USERNAME]: "",
		[PASSWORD]: "",
	};
	handleInputChange(key, value) {
		this.setState({
			[key]: value,
		});
	}
	handleLoginClick = () => {
		if (this.state[USERNAME].trim().length === 0 || this.state[PASSWORD].trim().length === 0) {
			this.props.setValidationError(INPUT_EMPTY_ERROR);
			clearTimeout(this.errorClear);
			this.errorClear = setTimeout(() => {
				this.props.clearAuthError();
			}, ERROR_MESSAGE_DISPLAY_TIME);
		} else {
			this.props
				.attemptLogin(this.state[USERNAME], this.state[PASSWORD])
				.then()
				.catch(() => {
					clearTimeout(this.errorClear);
					this.errorClear = setTimeout(() => {
						this.props.clearAuthError();
					}, ERROR_MESSAGE_DISPLAY_TIME);
				});
		}
	};
	componentWillUnmount() {
		clearTimeout(this.errorClear);
	}
	componentDidMount() {
		if (this.userInputRef && this.userInputRef.current) {
			this.userInputRef.current.focus();
		}
	}
	render() {
		let statusUI;
		if (this.props.authenticating) {
			statusUI = <Loader />;
		} else if (this.props.authError) {
			statusUI = <div className={`${classes.Status} text-danger w-100 p-3 text-center`}>{this.props.authError}</div>;
		}

		return (
			<Fragment>
				<Backdrop />
				<div className="d-flex justify-content-center align-items-center bg-transparent fullscreen">
					<div className={`${classes.LoginForm} d-flex align-items-center justify-content-center flex-column p-2`}>
						<img src={logoIcon} />
						{statusUI}
						<InputBoxWithIcon
							type="text"
							placeholder="Username"
							icon="fa fa-user"
							value={this.state[USERNAME]}
							onChange={this.handleInputChange.bind(this, USERNAME)}
							containerClass="mb-4"
							inputRef={this.userInputRef}
						/>
						<InputBoxWithIcon
							type="password"
							placeholder="Password"
							icon="fa fa-lock"
							value={this.state[PASSWORD]}
							onChange={this.handleInputChange.bind(this, PASSWORD)}
							containerClass="mb-4"
						/>
						<button className="py-2" onClick={this.handleLoginClick}>
							Login
						</button>
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	authError: state.auth.error,
	authenticating: state.auth.isLoggingIn,
});

const mapDispatchToProps = dispatch => ({
	attemptLogin: (username, password) => dispatch(auth(username, password)),
	clearAuthError: () => dispatch(authClearError()),
	setValidationError: error => dispatch(authFail(error)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginScreen);
