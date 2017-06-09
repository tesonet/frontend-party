// Base
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

// Module
import { AppRoutingModule } from './global/routing/app';
import { RootEffectModule } from './common/root.effect';
import { rootReducer } from './common/root.reducer';

// Component
import { AppComponent } from './app.component';
import { LoginComponent, ServerListComponent } from './component';
import { LoginFormComponent } from './common/template';

// Service
import { AuthGuard } from './global/guard/auth';

const DECLARATION_LIST = [
	AppComponent, LoginComponent, ServerListComponent,
	LoginFormComponent
];
const IMPORT_LIST = [
	BrowserModule, AppRoutingModule, FormsModule,
	HttpModule,
	StoreModule.provideStore(rootReducer),
	RootEffectModule
];
const PROVIDER_LIST = [
	AuthGuard
];

@NgModule({
	declarations: DECLARATION_LIST,
	imports: IMPORT_LIST,
	providers: PROVIDER_LIST,
	bootstrap: [AppComponent]
})
export class AppModule { }
