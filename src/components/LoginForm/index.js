import React from "react";
import { connect } from "react-redux";
import { onLoginSubmit } from "../../thunks/userThunks/loginThunk";
import { useFormik } from "formik";
import Spinner from "../../assets/svg/spinner.svg";
import IconUsername from "../../assets/svg/user.svg";
import IconPassword from "../../assets/svg/lock.svg";

const LoginForm = ({ error, loading, history, onLogin }) => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: values => {
            const {username, password} = values;
            onLogin({username, password}, history);
        }
    })

      return (
        <form onSubmit={formik.handleSubmit} className="login-form">
        <div className="login-form__input-field">
          <img src={IconUsername} alt="" />
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
            placeholder="Username"
            required
          />
        </div>
        <div className="login-form__input-field">
          <img src={IconPassword} alt="" />
          <input
            id="password"
            name="password"
            type="Password"
            onChange={formik.handleChange}
            values={formik.values.password}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" style={{display: "flex", justifyContent: "center"}} disabled={loading}>
          {loading ? <img src={Spinner} style={{height: "100%", width: "16px"}} alt="Loading icon" /> : "Log In"}
        </button>
        <p className="login-form__error">{error && error}</p>
      </form>
    )
}

const mapStateToProps = state => state.login;

const mapDispatchToProps = dispatch => ({
    onLogin: (user, history) => dispatch(onLoginSubmit(user, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);