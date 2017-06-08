import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './global';
import { AppComponent } from './app.component';
import { LoginComponent } from './component';
import { LoginFormComponent } from './common/template';
import { rootReducer } from './common/root.reducer';
import { RootEffectModule } from './common/root.effect';

const DECLARATION_LIST = [
	AppComponent, LoginComponent, LoginFormComponent
];
const IMPORT_LIST = [
	BrowserModule, AppRoutingModule, FormsModule,
	HttpModule,
	StoreModule.provideStore(rootReducer),
	RootEffectModule
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
