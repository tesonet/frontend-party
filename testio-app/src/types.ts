import { IForm } from './features/loginForm/types';
import { IToken } from './features/token/types';

export interface IApp {
    form: IForm;
    token: IToken
}
