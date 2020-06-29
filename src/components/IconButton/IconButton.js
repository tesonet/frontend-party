import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import LogoutIcon from "../../images/logout.svg";

const Button = styled.button`
  cursor: pointer;
  border: 1px solid #0015ff;
  outline: none;
  background: #fff;
  transition: all 150ms ease;
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  font-weight: 300px;
  font-family: Roboto;
  padding: 8px;
  &:hover {
    border-color: #99cc33;
  }
`;

const Icon = styled.img`
  height: 16px;
  width: 16px;
  margin-right: 12px;
`;

const Label = styled.div`
  line-height: 16px;
`;
const IconButton = ({ label, clickHandler }) => {
  return (
    <Button onClick={clickHandler}>
      <Icon src={LogoutIcon} />
      <Label>{label}</Label>
    </Button>
  );
};

export default IconButton;

IconButton.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  clickHandler: PropTypes.func
};
