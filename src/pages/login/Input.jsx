import React from "react";
import PropTypes from "prop-types";

import {
  Input,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  FormGroup
} from "reactstrap";

import styled from "styled-components";

const inputStyle = {
  border: 0,
  color: "#b2b2b2",
  height: 56,
  lineHeight: 1.875,
  borderRadius: 0,
  borderTopRightRadius: 5,
  borderBottomRightRadius: 5
};

const inputGroupStyle = {
  border: 0,
  background: "#fff",
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,
  paddingLeft: 15
};

const inputGroupTextStyle = {
  background: 0,
  border: 0,
  color: "#b2b2b2"
};

const Icon = styled.img`
  height: 18px;
`;

const StyledInput = ({ type, icon, placeholder, value, onChange }) => (
  <FormGroup>
    <InputGroup>
      <InputGroupAddon style={inputGroupStyle} addonType="prepend">
        <InputGroupText style={inputGroupTextStyle}>
          <Icon src={icon} />
        </InputGroupText>
      </InputGroupAddon>
      <Input
        bsSize="lg"
        style={inputStyle}
        type={type}
        name={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputGroup>
  </FormGroup>
);

StyledInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string
};
StyledInput.defaultProps = {
  type: "text"
};
export default StyledInput;
