import React from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik, ErrorMessage } from "formik";
import styled from "@emotion/styled";
import { State } from "../../reducers";
import { login } from "../../actions/loginActions";
import Icon, { Icons } from "../../assets/icons";
import Colors from "../../constants/colors";
import ErrorMessages from '../../constants/errorMessages';

const StyledWrapper = styled.label`
  position: relative;
  color: ${Colors.gray500};
  transition: color 300ms;
  display: block;
  &:focus-within {
    color: ${Colors.gray900};
  }
`;

const StyledInput = styled(Field)`
  border: none;
  font-size: 16px;
  padding: 20px 20px 20px 50px;
  border-radius: 4px;
  margin: 10px 0 10px 0;
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

const StyledIcon = styled(Icon)`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledButton = styled.button`
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
  &:disabled {
    pointer-events: none;
  }
`;
const StyledError = styled.div`
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
          username: Yup.string().required(ErrorMessages.required),
          password: Yup.string().required(ErrorMessages.required)
        })}
        onSubmit={values => login(dispatch)(values)}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <StyledWrapper>
              <StyledIcon type={Icons.user} />
              <StyledInput
                data-test-id="Login-Name"
                name="username"
                placeholder="Username"
              />
            </StyledWrapper>
            <ErrorMessage name="username" component={StyledError} />
            <StyledWrapper>
              <StyledIcon type={Icons.password} />
              <StyledInput
                data-test-id="Login-Password"
                type="password"
                name="password"
                placeholder="Password"
              />
            </StyledWrapper>
            <ErrorMessage name="password" component={StyledError} />
            <StyledButton
              type="submit"
              data-test-id="Login-Submit"
              disabled={isSubmitting}
            >
              {!isSubmitting ? `Log In` : `Loading...`}
            </StyledButton>
            {error && <StyledError data-test-id="Error-Message">{error}</StyledError>}
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
