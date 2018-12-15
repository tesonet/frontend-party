import React from "react";
import PropTypes from "prop-types";

import { Input, InputGroup, FormGroup, FormFeedback } from "reactstrap";
import { inputStyle } from "./Input.styles";
import PreIcon from "./input/PreIcon";

const StyledInput = ({
  type,
  name,
  icon,
  placeholder,
  value,
  onChange,
  isInvalid,
}) => (
  <FormGroup>
    <InputGroup>
      <PreIcon icon={icon} />
      <Input
        bsSize="lg"
        style={inputStyle}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        invalid={!!isInvalid}
      />
      {isInvalid ? (
        <FormFeedback invalid="true">{isInvalid}</FormFeedback>
      ) : null}
    </InputGroup>
  </FormGroup>
);

StyledInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isInvalid: PropTypes.string,
  type: PropTypes.string,
};
StyledInput.defaultProps = {
  type: "text",
};
export default StyledInput;
