import React from "react";

import testioLogo from "../../../assets/testio.png";
import Background from "../background";

import styles from "./styles.css";

const Login = () => {
  return (
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
          />
          <input
            className={`${styles.input} ${styles.passwordInput}`}
            placeholder="Password"
          />
          <button className={styles.submit} type="submit">
            Log In
          </button>
        </form>
      </div>
    </Background>
  );
};

export default Login;
