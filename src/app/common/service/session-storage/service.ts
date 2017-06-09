import { Injectable } from '@angular/core';

@Injectable()
export class SessionStorageService {

	public getItem(item) {
		return JSON.parse(sessionStorage.getItem(item));
	}

	public setItem(item, data) {
		return sessionStorage.setItem(item, JSON.stringify(data));
	}

}
