import React from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../reducers";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { login } from "../../actions/loginActions";
import Icon, { Icons } from "../../assets/icons";
import styled from "@emotion/styled";
import Colors from "../../constants/colors";

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
const Error = styled.div`
  color: ${Colors.error};
  background: white;
  border-radius: 4px;
  padding: 8px 16px;
  border: 2px solid ${Colors.error};
`;

const StyledForm = styled(Form)`
  width: 100%;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: State) => state.login.error);

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
        onSubmit={values => login(dispatch)(values)}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <InputWrapper>
              <PositionedIcon type={Icons.user} />
              <Input
                data-test-id="Login-Name"
                name="username"
                placeholder="Username"
              />
            </InputWrapper>
            <ErrorMessage name="username" component={Error} />
            <InputWrapper>
              <PositionedIcon type={Icons.password} />
              <Input
                data-test-id="Login-Password"
                type="password"
                name="password"
                placeholder="Password"
              />
            </InputWrapper>
            <ErrorMessage name="password" component={Error} />
            <Button type="submit" data-test-id="Login-Submit">
              {!isSubmitting ? `Log In` : `Loading...`}
            </Button>
            {error && <Error>{error}</Error>}
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
