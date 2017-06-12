import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SessionStorageService } from '../../../common/service'

@Injectable()
export class LoginGuard implements CanActivate {

	constructor(
		private router: Router,
		private sessionStorageService: SessionStorageService
	) { }

	canActivate() {
		if (!this.sessionStorageService.getItem('token')) {
			return true;
		}
		this.router.navigate(
			['/not-found'],
			{}
		);
		return false;
	}

}
