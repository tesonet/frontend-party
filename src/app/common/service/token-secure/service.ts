import { Injectable } from '@angular/core';

@Injectable()
export class TokenSecureService {

	public secure(token) {
		return token.split('').reverse().join('');
	}

	public revert(token) {
		return token.split('').reverse().join('');
	}

}
