import { ActionTypes, LoginSuccessAction, LoginFailedAction } from './action';
import '../../rxjs/common-imports';
import { CONFIG } from '../../../global/config/global';
import { Actions, Effect } from '@ngrx/effects';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LoginEffect {

	@Effect() Login$ =
		this.actions$.ofType(ActionTypes.LOGIN)
			.debounceTime(1500)
			.map(action => action.payload)
			.switchMap(({userLoginData}) => {
				return this.login(userLoginData)
					.map(
						res => new LoginSuccessAction(res.json())
					)
					.catch(
						(e) => of(new LoginFailedAction(e))
					);
			});

	constructor(
		private http: Http,
		private actions$: Actions
	) { }

	login(userLoginData) {
		const headers = new Headers({ 'Content-Type': 'application/json' });
		const options = new RequestOptions({ headers: headers });
		const route = CONFIG.api.root + CONFIG.api.login;
		return this.http.post(
			route,
			userLoginData,
			options
		);
	}

}
