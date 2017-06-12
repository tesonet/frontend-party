import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as ComponentText from './component-text';
import { SessionStorageService } from '../../../common/service';

@Component({
	selector: 'app-user-navigation',
	templateUrl: './component.html'
})
export class UserNavigationComponent  {

	public componentText = ComponentText;

	constructor(
		private router: Router,
		private sessionStorageService: SessionStorageService
	) {}

	public logout() {
		this.sessionStorageService.removeItem('token');
		this.router.navigate(
			['/login'],
			{}
		);
	}

}
