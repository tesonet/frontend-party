import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { IAppState } from '../../../global/store/AppModel';
import * as login from './action';
import { LoginFormTemplate } from './template';
import * as ComponentText from './labelList';

@Component({
	selector: 'app-login-form',
	templateUrl: './component.html'
})
export class LoginFormComponent {

	public login$: Observable<any>;
	public componentText = ComponentText;
	public model: LoginFormTemplate = new LoginFormTemplate();
	@ViewChild('loginForm') public loginForm: any;

	constructor(
		public store: Store<IAppState>,
	) {
		this.login$ = this.store.select(state => state.login);
		this.store.dispatch(new login.LoginAction({type: 'Content'}));
	}

	onSubmit() {
		if (this.loginForm.valid) {
			console.log('Form Submitted!', this.loginForm.value);
			this.loginForm.reset();
		}
	}

}
