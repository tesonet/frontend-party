import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(
		private router: Router
	) { }

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	) {
		if (true) {
			return true;
		}
		// this.router.navigate(
		// 	['/login'],
		// 	{
		// 		queryParams: {
		// 			returnUrl: state.url
		// 		}
		// 	}
		// );
		// return false;
	}

}
