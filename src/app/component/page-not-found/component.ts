import { Component } from '@angular/core';
import * as ComponentText from './component-text';

@Component({
	selector: 'app-page-not-found',
	templateUrl: './component.html'
})
export class PageNotFoundComponent  {

	public componentText = ComponentText;

}
