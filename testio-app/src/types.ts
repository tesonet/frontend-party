import { IForm } from './features/loginForm/types';
import { IList } from './features/serverList/types';
import { IToken } from './features/token/types';

export interface IApp {
    form: IForm;
    token: IToken;
    list: IList;
}
