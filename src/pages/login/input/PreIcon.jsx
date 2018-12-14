import React from "react";

import { InputGroupText, InputGroupAddon } from "reactstrap";
import { Icon, inputGroupStyle, inputGroupTextStyle } from "./PreIcon.styles";

const PreIcon = ({ icon }) => (
  <InputGroupAddon style={inputGroupStyle} addonType="prepend">
    <InputGroupText style={inputGroupTextStyle}>
      <Icon src={icon} />
    </InputGroupText>
  </InputGroupAddon>
);

export default PreIcon;
