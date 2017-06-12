import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { IAppState } from '../../../global';
import * as serverList from './action';
import * as ComponentText from './component-text';

@Component({
	selector: 'app-server-list',
	templateUrl: './component.html'
})
export class ServerListComponent {

	public serverList$: Observable<any>;
	public componentText = ComponentText;

	constructor( public store: Store<IAppState>  ) {
		this.serverList$ = this.store.select(state => state.serverList);
		this.store.dispatch( new serverList.ServerListAction() );
	}

}
