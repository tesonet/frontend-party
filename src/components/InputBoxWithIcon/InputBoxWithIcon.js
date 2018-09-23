import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./InputBoxWithIcon.scss";

class InputBoxWithIcon extends Component {
	handleInputChange = event => {
		this.props.onChange(event.target.value);
	};
	render() {
		// const iconToStyle = {
		// 	backgroundImage: `url(${this.props.icon})`,
		// };

		return (
			<div className={`${classes.InputBoxWithIcon} w-100 d-flex align-items-center ${this.props.containerClass}`}>
				<input
					type={this.props.type}
					placeholder={this.props.placeholder}
					className={`form-control h-auto py-2 ${this.props.inputClass}`}
					value={this.props.value}
					onChange={this.handleInputChange}
					ref={this.props.inputRef}
				/>
				<i className={this.props.icon} />
			</div>
		);
	}
}

export default InputBoxWithIcon;

InputBoxWithIcon.propTypes = {
	icon: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	inputClass: PropTypes.string,
	containerClass: PropTypes.string,
};
