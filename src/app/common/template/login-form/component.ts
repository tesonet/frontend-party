import { Component, ViewChild } from '@angular/core';
import { LoginFormTemplate } from './template';
import * as ComponentText from './labelList';

@Component({
	selector: 'app-login-form',
	templateUrl: './component.html'
})
export class LoginFormComponent {

	public componentText = ComponentText;
	public model: LoginFormTemplate = new LoginFormTemplate();
	@ViewChild('loginForm') public loginForm: any;

	constructor() { }

	onSubmit() {
		if (this.loginForm.valid) {
			console.log('Form Submitted!', this.loginForm.value);
			this.loginForm.reset();
		}
	}

}
