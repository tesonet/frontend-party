import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";

import testioLogo from "../../../assets/testio.png";
import Background from "../background";

import styles from "./styles.css";

const Login = ({ submitLoginForm, authenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [loader, setLoader] = useState(false);
  const [allert, setAllert] = useState("");

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
        {loader ? (
          <div className={styles.loaderContainer}>
            <Loader type="Puff" color="#99cc33" height="150" width="150" />
          </div>
        ) : (
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
              autoComplete="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            <button
              className={styles.submit}
              type="submit"
              onClick={e => {
                e.preventDefault();
                setLoader(true);
                submitLoginForm(username, password).then(
                  ({ allertMessage }) => {
                    if (allertMessage) {
                      setAllert(allertMessage);
                      setLoader(false);
                    }
                  }
                );
              }}
            >
              Log In
            </button>
            {!!allert.length && (
              <div className={styles.alertMessage}>{allert}</div>
            )}
          </form>
        )}
      </div>
    </Background>
  );
};

Login.propTypes = {
  submitLoginForm: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired
};

export default Login;
