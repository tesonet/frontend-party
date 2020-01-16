import { logoutUser } from "../../actions/userActions/authAction";
import { clearLocalStorage } from "../../utils/localStorage";
import { LOGIN } from "../../constants/routes";

export const onLogout = history => dispatch => {
  clearLocalStorage();
  dispatch(logoutUser());

  history.push(LOGIN);
};
