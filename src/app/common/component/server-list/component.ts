import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { IAppState } from '../../../global';
import * as serverList from './action';
import * as ComponentText from './component-text';

@Component({
	selector: 'app-server-list',
	templateUrl: './component.html'
})
export class ServerListComponent implements OnDestroy {

	private serverListSubscription: Subscription;
	public serverList$: Observable<any>;
	public componentText = ComponentText;
	public message: string;

	constructor( public store: Store<IAppState>  ) {
		this.serverList$ = this.store.select(state => state.serverList);
		this.store.dispatch( new serverList.ServerListAction() );
		this.serverListSubscription = this.serverList$.subscribe(data => {
			if (data.message && data.message.type && data.message.type === 'failed') {
				this.message = data.message;
			}
		});
	}

	ngOnDestroy() {
		this.serverListSubscription.unsubscribe();
	}

}
