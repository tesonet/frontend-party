import { createStore } from 'redux';
import loginInfo from './reducers';

const store = createStore(loginInfo);
window.store = store;
export default store;