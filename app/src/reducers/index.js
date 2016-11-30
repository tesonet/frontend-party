 import { combineReducers } from 'redux';
 import { reducer as form } from 'redux-form';
 import authentication from './authentication';
 import servers from './servers';

 export default combineReducers({
   form,
   authentication,
   servers,
 });
