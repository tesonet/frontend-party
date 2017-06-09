import { Component, ViewChild, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { IAppState } from '../../../global/store/AppModel';
import * as login from './action';
import { LoginFormTemplate } from './template';
import * as ComponentText from './componentText';
import * as messageType from './model';

@Component({
	selector: 'app-login-form',
	templateUrl: './component.html'
})
export class LoginFormComponent implements OnDestroy {

	public login$: Observable<any>;
	private loginSubscription: Subscription;
	public componentText = ComponentText;
	public model: LoginFormTemplate = new LoginFormTemplate();
	public message: messageType.IMessage;
	@ViewChild('loginForm') public loginForm: any;

	constructor(
		public store: Store<IAppState>,
	) {
		this.login$ = this.store.select(state => state.login);
		this.loginSubscription = this.login$.subscribe(data => {
			this.message = data.message;
			if (data.message && data.message.type && data.message.type === 'success') {
				setTimeout(
					() => { this.message = null },
					1000
				)
			}
		});
	}

	public onSubmit() {
		this.removeMessage();
		if (this.loginForm.valid) {
			this.store.dispatch(
				new login.LoginAction(
					{
						userLoginData: {
							'username': this.loginForm.value.credentials.userName,
							'password': this.loginForm.value.credentials.password
						}
					}
				)
			);
			this.loginForm.reset();
		}
	}

	public removeMessage() {
		this.message = null;
	}

	ngOnDestroy() {
		this.loginSubscription.unsubscribe();
	}

}
