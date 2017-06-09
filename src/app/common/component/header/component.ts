import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './component.html'
})
export class HeaderComponent  {
	@Input() userLoggedIn: boolean;
}
