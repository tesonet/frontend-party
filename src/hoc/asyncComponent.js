import React, { Component } from "react";

const asyncComponent = importComponent => {
	return class extends Component {
		state = {
			component: null,
		};

		componentDidMount() {
			importComponent().then(module => {
				this.setState({ component: module.default, mounted: true });
			});
		}

		render() {
			const Component = this.state.component;

			return Component && <Component {...this.props} />;
		}
	};
};

export default asyncComponent;
