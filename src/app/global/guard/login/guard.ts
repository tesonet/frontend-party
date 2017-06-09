import { Injectable } from '@angular/core';
import {
	Router, CanActivate, RouterStateSnapshot,
	ActivatedRouteSnapshot
} from '@angular/router';
import { SessionStorageService } from '../../../common/service'

@Injectable()
export class LoginGuard implements CanActivate {

	constructor(
		private router: Router,
		private sessionStorageService: SessionStorageService
	) { }

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	) {
		if (!this.sessionStorageService.getItem('token')) {
			return true;
		}
		this.router.navigate(
			[this.router.url],
			{
				queryParams: {
					returnUrl: state.url
				}
			}
		);
		return false;
	}

}
