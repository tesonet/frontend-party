import { ActionTypes, LoginSuccessAction, LoginFailedAction } from './action';
import '../../rxjs/common-imports';
import { CONFIG } from '../../../global/config/global';
import { Actions, Effect } from '@ngrx/effects';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LoginEffect {

	@Effect() Login$ =
		this._actions$.ofType(ActionTypes.LOGIN)
			.map(action => action.payload)
			.switchMap(({type}) => {
				return this.login(type)
					.map(
						res => new LoginSuccessAction(res.json())
					)
					.catch(
						(e) => of(new LoginFailedAction(e))
					);
			});

	constructor(
		private _http: Http,
		private _actions$: Actions
	) { }

	login(type) {
		const route = CONFIG.api.root + CONFIG.api.login;
		return this._http.post(
			route,
			type.payload
		);
	}
}
