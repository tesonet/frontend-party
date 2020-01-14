import React from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";

type TextFieldProps = React.HTMLProps<HTMLInputElement> & {
  icon: "user" | "padlock" | "exit";
};

const TextFieldContainer = styled.div`
  background: #ffffff;
  padding: 1rem;
  display: flex;
  align-items: center;
  border-radius: 0.3rem;
`;

export const Input = styled.input`
  flex: 1;
  background: #ffffff;
  border: 0;
  outline: none;
  margin-left: 1em;
  &::placeholder {
    color: #b3b3b3;
  }
` as React.ComponentType<React.HTMLProps<HTMLInputElement>>;

const TextField: React.FC<TextFieldProps> = ({ icon, ...props }) => {
  return (
    <TextFieldContainer>
      <Icon name={icon} />
      <Input {...props} />
    </TextFieldContainer>
  );
};

Input.displayName = "Input";

export default TextField;
