import styled from "styled-components";
import backgroundImage from "./../../assets/bg.jpg";
import { Form } from "../Form/Form";

export const LoginContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(${backgroundImage});
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  margin: 0 auto;
`;

export const LoginForm = styled(Form)`
  margin-top: 4rem;
`;

export default {
  LoginContainer,
  LoginContent
};
