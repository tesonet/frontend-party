import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  padding: 1rem;
  border-radius: 0.3rem;
  border: 0;
  background-color: #9fd533;
  color: #fff;
  width: 100%;

  &:hover {
    background-color: #86b300;
  }
`;

const PlainButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  background: transparent;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #99cc33;
  }
` as React.FC<React.HTMLProps<HTMLButtonElement>>;

export const PlainButton: React.FC<React.HTMLProps<HTMLButtonElement> & {
  children: React.ReactNode;
}> = ({ children, ...props }) => {
  return <PlainButtonContainer {...props}>{children}</PlainButtonContainer>;
};
