import { Component, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { IAppState } from '../../../global';
import * as login from './action';
import { LoginFormTemplate } from './template';
import * as ComponentText from './component-text';
import * as messageType from './model';

@Component({
	selector: 'app-login-form',
	templateUrl: './component.html'
})
export class LoginFormComponent implements OnDestroy {

	private loginSubscription: Subscription;

	public login$: Observable<any>;
	public componentText = ComponentText;
	public model: LoginFormTemplate = new LoginFormTemplate();
	public message: messageType.ILoginMessage;
	@ViewChild('loginForm') public loginForm: any;

	constructor(
		public store: Store<IAppState>,
		private router: Router
	) {
		this.login$ = this.store.select(state => state.login);
		this.loginSubscription = this.login$.subscribe(data => {
			this.message = data.message;
			if (data.message && data.message.type && data.message.type === 'success') {
				this.navigateToServerList();
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

	private removeMessage() {
		if (this.message) {
			this.message = null;
		}
	}

	private clearState() {
		this.store.dispatch(
			new login.LoginClearAction()
		);
	}

	private clearLogin() {
		this.removeMessage();
		this.clearState();
		this.loginSubscription.unsubscribe();
	}

	private navigateToServerList() {
		setTimeout(
			() => {
				this.clearLogin();
				this.router.navigate(
					['/server-list'],
					{}
				);
			},
			1000
		)
	}

	ngOnDestroy() {
		this.clearLogin();
	}

}
