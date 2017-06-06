import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

const DECLARATION_LIST = [
	AppComponent
];
const IMPORT_LIST = [
	BrowserModule
];
const PROVIDER_LIST = [];

@NgModule({
	declarations: DECLARATION_LIST,
	imports: IMPORT_LIST,
	providers: PROVIDER_LIST,
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
