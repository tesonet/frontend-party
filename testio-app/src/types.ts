import { IForm } from './features/loginForm/types';
import { IList } from './features/serverList/types';
import { IUser } from './features/user/types';

export interface IApp {
  form: IForm;
  serverList: IList;
  user: IUser;
}
