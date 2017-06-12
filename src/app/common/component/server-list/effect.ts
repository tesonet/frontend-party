import { Actions, Effect } from '@ngrx/effects';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { CONFIG } from '../../../global';
import '../../rxjs/common-imports';
import { ActionTypes, ServerListSuccessAction, ServerListFailedAction } from './action';
import { SessionStorageService, TokenSecureService } from '../../../common/service'

@Injectable()
export class ServerListEffect {

	@Effect() ServerList$ =
		this.actions$.ofType(ActionTypes.SERVER_LIST)
			.debounceTime(CONFIG.dev.fakeDelay)
			.map(action => action.payload)
			.switchMap(() => {
				return this.getServerList()
					.map(
						res => {
							return new ServerListSuccessAction(res.json());
						}
					)
					.catch(
						(e) => of(new ServerListFailedAction(e))
					);
			});

	constructor(
		private http: Http,
		private actions$: Actions,
		private sessionStorageService: SessionStorageService,
		private tokenSecureService: TokenSecureService
	) { }

	private getServerList() {
		const token = this.tokenSecureService.revert(this.getSessionStorageToken());
		const headers = new Headers({ 'Authorization': token });
		const options = new RequestOptions({ headers: headers });
		const route = CONFIG.api.root + CONFIG.api.serverList;
		return this.http.get(
			route,
			options
		);
	}

	private getSessionStorageToken() {
		return this.sessionStorageService.getItem('token');
	}

}
