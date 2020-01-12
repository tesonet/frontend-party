import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import GlobalStyle from "./constants/globalStyle";
import background from "./assets/background.png";
import logo from "./assets/logo-testio.svg";
import logo2 from "./assets/logo-testio-2.svg";
import { RouteComponentProps, Router } from "@reach/router";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Icon, { Icons } from "./assets/icons";
import Colors from "./constants/colors";

const Root = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const Background = styled.div`
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
`;

const LoginWrapper = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  height: 64px;
  width: 246px;
  margin-bottom: 50px;
`;

const InputWrapper = styled.label`
  position: relative;
  color: ${Colors.gray500};
  transition: color 300ms;
  display: block;
  &:focus-within {
    color: ${Colors.gray900};
  }
`;

const Input = styled(Field)`
  border: none;
  font-size: 16px;
  padding: 20px 20px 20px 50px;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  color: ${Colors.gray700};
  transition: color 300ms;
  ::placeholder {
    color: ${Colors.gray600};
  }
  &:focus {
    color: ${Colors.gray900};
  }
`;

const PositionedIcon = styled(Icon)`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

const Button = styled.button`
  background-color: ${Colors.green500};
  margin: 10px 0 10px 0;
  color: white;
  border-radius: 4px;
  border: none;
  width: 100%;
  font-size: 16px;
  padding: 20px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: ${Colors.green600};
  }
`;

const StyledForm = styled(Form)`
  width: 100%;
`;

const LoginForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        validationSchema={Yup.object({
          username: Yup.string().required("Required"),
          password: Yup.string().required("Required")
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values, setSubmitting);
        }}
      >
        <StyledForm>
          <InputWrapper>
            <PositionedIcon type={Icons.user} />
            <Input name="username" placeholder="Username" />
          </InputWrapper>
          <InputWrapper>
            <PositionedIcon type={Icons.password} />
            <Input type="password" name="password" placeholder="Password" />
          </InputWrapper>
          <Button type="submit">Log In</Button>
        </StyledForm>
      </Formik>
    </>
  );
};

const Login: React.FC<RouteComponentProps> = () => {
  return (
    <Background>
      <LoginWrapper>
        <Logo src={logo} alt="logo" />
        <LoginForm />
      </LoginWrapper>
    </Background>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px 20px 0;
  width: 100%;
  height: 110px;
  align-items: center;
`;

const Logo2 = styled.img`
  width: 150px;
  height: 30px;
`;

const StyledIcon = styled(Icon)`
  margin-right: 10px;
  display: inline-block;
`;

const LogoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: ${Colors.darkBlue};
  transition: color 300ms;
  cursor: pointer;
  &:hover {
    color: ${Colors.green400};
  }
`;

const Header: React.FC<RouteComponentProps> = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Logo2 src={logo2} />
        <LogoutWrapper>
          <StyledIcon type={Icons.logout} />
          Logout
        </LogoutWrapper>
      </Wrapper>
      {children}
    </>
  );
};

const StyledRow = styled.div`
  height: 60px;
  color: ${Colors.gray900};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${Colors.gray400};
  transition: background-color 100ms;
  :hover {
    background-color: ${Colors.gray100};
  }
`;

const StyledHeader = styled(StyledRow)`
  background-color: ${Colors.gray100};
  border-top: 1px solid ${Colors.gray400};
  color: ${Colors.gray700};
`;

const Row = () => {
  return (
    <StyledRow>
      <div>Canada</div>
      <div>404040kms</div>
    </StyledRow>
  );
};

const Servers: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <StyledHeader>
        <div>Servers</div>
        <div>Distance</div>
      </StyledHeader>
      <Row />
      <Row />
      <Row />
      <Row />
    </>
  );
};

const App = () => {
  return (
    <>
      <GlobalStyle />
        <Router component={Root}>
          <Login path="/login" />
          <Header path="/">
            <Servers path="/" />
          </Header>
        </Router>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
