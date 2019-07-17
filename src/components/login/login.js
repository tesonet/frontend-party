import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import testioLogo from "../../../assets/testio.png";
import Background from "../background";

import styles from "./styles.css";

const Login = ({ submitLoginForm, authenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (authenticated) {
      setRedirect(true);
    }
  });

  return redirect ? (
    <Redirect to="server-list" />
  ) : (
    <Background>
      <div className={styles.container}>
        <form className={styles.form}>
          <img
            className={styles.testioLogo}
            alt="testio logo"
            src={testioLogo}
          />
          <input
            className={`${styles.input} ${styles.userInput}`}
            placeholder="Username"
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
          <input
            className={`${styles.input} ${styles.passwordInput}`}
            placeholder="Password"
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <button
            className={styles.submit}
            type="submit"
            onClick={e => {
              e.preventDefault();
              submitLoginForm(username, password);
            }}
          >
            Log In
          </button>
        </form>
      </div>
    </Background>
  );
};

Login.propTypes = {
  submitLoginForm: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired
};

export default Login;
