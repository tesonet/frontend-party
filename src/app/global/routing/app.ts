import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../component/login/component';
import { ServerListComponent } from '../../component/server-list/component';
import { AuthGuard } from '../../global';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'server-list',
		component: ServerListComponent,
		canActivate: [ AuthGuard ]
	},
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: '/login',
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
