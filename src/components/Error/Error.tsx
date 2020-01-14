import React from "react";
import styled from "styled-components";

interface ErrorBoxProps {
  message: string | null;
}

export const ErrorContainer = styled.div<{ error: boolean }>`
  border: 1px solid rgb(209, 65, 54);
  color: #fff;
  padding: 1rem;
  background: rgba(209, 65, 54, 0.7);
  border-radius: 0.3rem;
  visibility: ${props => (props.error ? "visible" : "hidden")};
`;

export const ErrorBox: React.FC<ErrorBoxProps> = ({ message }) => {
  return <ErrorContainer error={!!message}>{message}</ErrorContainer>;
};
