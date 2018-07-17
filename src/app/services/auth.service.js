import axiosProxy from '../../axiosProxy';
import { removeFromLocalStorage, getFromLocalStorage } from '../../common/util/localStorage.util';

const login = model => axiosProxy.post(`/tokens`, model);

const logOut = () => removeFromLocalStorage('session');

const isAuthenticated = () => !!getFromLocalStorage('session');

export default {
    login,
    logOut,
    isAuthenticated,
};
