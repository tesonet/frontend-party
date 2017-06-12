import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect } from './component/login-form/effect';
import { ServerListEffect } from './component/server-list/effect';

@NgModule({
	imports: [
		EffectsModule.run(LoginEffect),
		EffectsModule.run(ServerListEffect)
	]
})
export class RootEffectModule { }
