import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <Link to="/servers">Servers</Link>
      <h1>Login</h1>
    </div>
  );
}

export default Login;
