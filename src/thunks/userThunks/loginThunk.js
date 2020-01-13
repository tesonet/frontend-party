import { authUser } from "../../actions/userActions/authAction";
import { onLoginLoading, onLoginError, onLoginSuccess } from "../../actions/userActions/loginActions";

export const onLoginSubmit = (user, history) => dispatch => {
    dispatch(onLoginLoading());

    if(user.username === "" || user.password === "") {
        return dispatch(onLoginError("Please fill empty fields"))
    }

    const loginUrl = 'http://playground.tesonet.lt/v1/tokens';

    const loginJson = {
        username: user.username,
        password: user.password
    }

    fetch(
      loginUrl,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginJson)
      }
    )
      .then(res => res.json())
      .then(data => {
        dispatch(onLoginSuccess());
        // dispatch(authUser(loginJson.username, res.data.token));
        // localStorage.setItem("authToken", `Bearer ${JSON.stringify(res.data.token)}`);
        history.push('/home');
      })
      .catch(err => {
        dispatch(onLoginError(err));
      });
}