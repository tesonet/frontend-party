import React from "react";
import PropTypes from "prop-types";

const LoginForm = ({ handleSubmit }) => {
    return (
        <form className="testio-form" onSubmit={handleSubmit}>
            <input
                name="username"
                type="text"
                placeholder="Username"
                maxLength={32}
            />
            <input
                name="password"
                type="password"
                placeholder="Password"
                maxLength={32}
            />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default LoginForm;

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};
