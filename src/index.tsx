import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";
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
import ReduxState, { State } from "./reducers";
import { login, logout } from "./actions/loginActions";
import { fetchServers } from "./actions/serverActions";
import { ServerInterface } from "./reducers/serverReducer";

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
  padding: 28px;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const LoginWrapper = styled.div`
  max-width: 360px;
  display: flex;
  flex: 1;
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
              <Input name="username" placeholder="Username" />
            </InputWrapper>
            <InputWrapper>
              <PositionedIcon type={Icons.password} />
              <Input type="password" name="password" placeholder="Password" />
            </InputWrapper>
            <Button type="submit">
              {!isSubmitting ? `Log In` : `Loading...`}
            </Button>
            {error && <Error>{error}</Error>}
          </StyledForm>
        )}
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
  const dispatch = useDispatch();
  return (
    <>
      <Wrapper>
        <Logo2 src={logo2} />
        <LogoutWrapper onClick={() => logout(dispatch)}>
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
const TextButton = styled.button`
  font: inherit;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
`;
const Loading = styled.div`
  padding: 20px;
  width: 100%;
`;

const Row = ({ name, distance }: ServerInterface) => {
  return (
    <StyledRow>
      <div>{name}</div>
      <div>{distance} km</div>
    </StyledRow>
  );
};

enum SortDirectionName {
  Unordered = "",
  Descending = "A-Z",
  Ascending = "Z-A"
}

enum SortDirectionDistance {
  Unordered = "",
  Descending = "Descending",
  Ascending = "Ascending"
}

const Servers: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();
  const [orderName, setNameOrder] = useState(SortDirectionName.Unordered);
  const [orderDistance, setDistanceOrder] = useState(
    SortDirectionDistance.Unordered
  );
  useEffect(() => {
    fetchServers(dispatch);
  }, []);
  const servers = useSelector((state: State) => state.servers);

  const onNameOrderChange = () => {
    if (orderDistance) {
      setDistanceOrder(SortDirectionDistance.Unordered);
    }
    if (orderName === SortDirectionName.Unordered) {
      return setNameOrder(SortDirectionName.Descending);
    }
    if (orderName === SortDirectionName.Descending) {
      return setNameOrder(SortDirectionName.Ascending);
    }
    return setNameOrder(SortDirectionName.Unordered);
  };

  const onDistanceOrderChange = () => {
    if (orderName) {
      setNameOrder(SortDirectionName.Unordered);
    }
    if (orderDistance === SortDirectionDistance.Unordered) {
      return setDistanceOrder(SortDirectionDistance.Descending);
    }
    if (orderDistance === SortDirectionDistance.Descending) {
      return setDistanceOrder(SortDirectionDistance.Ascending);
    }
    return setDistanceOrder(SortDirectionDistance.Unordered);
  };

  let orderedServers = servers;
  if (orderName !== SortDirectionName.Unordered) {
    orderedServers = servers.concat().sort((a, b) => {
      if (a.name < b.name) {
        return orderName === SortDirectionName.Descending ? -1 : 1;
      }
      if (a.name > b.name) {
        return orderName === SortDirectionName.Descending ? 1 : -1;
      }
      return 0;
    });
  }
  if (orderDistance !== SortDirectionDistance.Unordered) {
    orderedServers = servers
      .concat()
      .sort((a, b) =>
        orderDistance === SortDirectionDistance.Descending
          ? b.distance - a.distance
          : a.distance - b.distance
      );
  }

  return (
    <>
      <StyledHeader>
        <TextButton onClick={onNameOrderChange} type="button">
          Servers {orderName}
        </TextButton>
        <TextButton onClick={onDistanceOrderChange} type="button">
          Distance {orderDistance}
        </TextButton>
      </StyledHeader>
      {!orderedServers.length && <Loading>Loading...</Loading>}
      {orderedServers.map(server => (
        <Row {...server} key={`${server.name}_${server.distance}`} />
      ))}
    </>
  );
};

const store = createStore(ReduxState);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Router component={Root}>
          <Login path="/login" />
          <Header path="/">
            <Servers path="/" />
          </Header>
        </Router>
      </Provider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
