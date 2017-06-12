// Base
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Module list
import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';
import { AppRoutingModule } from './global/routing/app';
import { RootEffectModule } from './common/root.effect';
import { rootReducer } from './common/root.reducer';

// Component list
import { AppComponent } from './app.component';
import { LoginComponent, ShellComponent, PageNotFoundComponent } from './component';
import {
	LoginFormComponent, ServerListComponent, HeaderComponent,
	UserNavigationComponent
} from './common/component';

// Service list
import { AuthGuard, LoginGuard, CONFIG } from './global';
import { SessionStorageService, TokenSecureService } from './common/service';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = CONFIG.perfectScrollbar;
const DECLARATION_LIST = [
	AppComponent, LoginFormComponent, ShellComponent,
	LoginComponent, ServerListComponent, HeaderComponent,
	UserNavigationComponent, PageNotFoundComponent
];
const IMPORT_LIST = [
	BrowserModule, AppRoutingModule, FormsModule,
	HttpModule,
	StoreModule.provideStore(rootReducer),
	StoreDevtoolsModule.instrumentOnlyWithExtension({
		maxAge: 5
	}),
	RootEffectModule,
	PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
];
const PROVIDER_LIST = [
	AuthGuard, LoginGuard, SessionStorageService,
	TokenSecureService
];

@NgModule({
	declarations: DECLARATION_LIST,
	imports: IMPORT_LIST,
	providers: PROVIDER_LIST,
	bootstrap: [AppComponent]
})
export class AppModule { }
