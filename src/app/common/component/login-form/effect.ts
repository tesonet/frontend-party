import { Actions, Effect } from '@ngrx/effects';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { CONFIG } from '../../../global';
import '../../rxjs/common-imports';
import { ActionTypes, LoginSuccessAction, LoginFailedAction } from './action';
import { SessionStorageService, TokenSecureService } from '../../../common/service'

@Injectable()
export class LoginEffect {

	@Effect() Login$ =
		this.actions$.ofType(ActionTypes.LOGIN)
			.debounceTime(CONFIG.dev.fakeDelay)
			.map(action => action.payload)
			.switchMap(({userLoginData}) => {
				return this.login(userLoginData)
					.map(
						res => {
							this.setSessionStorageToken(res.json().token);
							return new LoginSuccessAction(res.json());
						}
					)
					.catch(
						(e) => of(new LoginFailedAction(e))
					);
			});

	constructor(
		private http: Http,
		private actions$: Actions,
		private sessionStorageService: SessionStorageService,
		private tokenSecureService: TokenSecureService
	) { }

	private login(userLoginData) {
		const headers = new Headers({ 'Content-Type': 'application/json' });
		const options = new RequestOptions({ headers: headers });
		const route = CONFIG.api.root + CONFIG.api.login;
		return this.http.post(
			route,
			userLoginData,
			options
		);
	}

	private setSessionStorageToken(token) {
		const securedToken = this.tokenSecureService.secure(token);
		this.sessionStorageService.setItem('token', securedToken);
	}

}
