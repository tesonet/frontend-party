import { Injectable } from '@angular/core';

@Injectable()
export class SessionStorageService {

	public getItem(item) {
		return sessionStorage.getItem(item);
	}

	public setItem(item, data) {
		sessionStorage.setItem(item, data);
	}

	public removeItem(item) {
		sessionStorage.removeItem(item);
	}

}
