import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, ShellComponent, PageNotFoundComponent } from '../../component';
import { AuthGuard, LoginGuard } from '../../global';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [ LoginGuard ]
	},
	{
		path: 'server-list',
		component: ShellComponent,
		canActivate: [ AuthGuard ]
	},
	{
		path: 'not-found',
		component: PageNotFoundComponent
	},
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: '/not-found',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
