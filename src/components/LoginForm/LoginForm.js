import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//Components.
import FormErrors from "../FormErrors/FormErrors";
import ImageProxy from "../ImageProxy/ImageProxy";

//Constants.
import { API_URL } from "../../constants/api";

//Images.
import testioImgPath from "../../assets/icons/logo.svg";

const mapDispatchToProps = dispatch => {
  return {
    saveUserToken: token => {
      dispatch({ type: "login", payload: token });
    }
  };
};

const LoginForm = props => {
  const [username, setUsername] = useState("");
  const [psw, setPsw] = useState("");
  const [errors, setErrors] = useState("");

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };

  const handlePswChange = e => {
    setPsw(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (username.length === 0 || psw.length === 0) {
      setErrors("Please fill both fields");
      return;
    } else {
      handleLoginAttempt();
    }
  };

  const handleLoginAttempt = () => {
    fetch(API_URL + "/tokens", {
      headers: { "content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        username: username,
        password: psw
      }),
      method: "POST"
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          setErrors(response.statusText);
        }
      })
      .then(data => {
        props.saveUserToken(data.token);
        localStorage.setItem("userToken", data.token);
      })
      .then(() => {
        props.history.push("/");
      })
      .catch(err => {});
  };

  return (
    <div className="LoginForm__wrapper">
      <ImageProxy
        className="LoginForm__figure"
        src={testioImgPath}
        alt="testio"
      />
      {errors && <FormErrors>{errors}</FormErrors>}
      <form className="LoginForm" onSubmit={handleSubmit}>
        <div className="LoginForm__input-username">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="LoginForm__input-password">
          <input
            type="password"
            placeholder="Password"
            value={psw}
            onChange={handlePswChange}
          />
        </div>
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(LoginForm)
);
