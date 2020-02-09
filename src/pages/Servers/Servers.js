import React from "react";
import Button from "../../components/Button/Button";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/authActions";

const Servers = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(logout())} buttonText="Log out" />
      <div>Servers</div>
    </div>
  );
};

export default Servers;
