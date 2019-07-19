import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//Components.
import ImageProxy from "../ImageProxy/ImageProxy";

//Constants.
import { API_URL } from "../../constants/api";

//Images.
import testioImgPath from "../../assets/icons/logo.svg";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [psw, setPsw] = useState("");
  const dispatch = useDispatch();

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };

  const handlePswChange = e => {
    setPsw(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch(API_URL, {
      headers: { "content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        username: username,
        password: psw
      }),
      method: "POST"
    })
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "login", payload: { data } });
      });
  };

  return (
    <React.Fragment>
      <ImageProxy src={testioImgPath} alt="testio" />
      <form className="LoginForm" onSubmit={handleSubmit}>
        <div className="LoginForm__input">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="LoginForm__input">
          <input
            type="password"
            placeholder="Password"
            value={psw}
            onChange={handlePswChange}
          />
        </div>
        <input type="submit" value="Log In" />
      </form>
    </React.Fragment>
  );
};

export default LoginForm;
