import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect } from './component/login-form/effect';

@NgModule({
	imports: [
		EffectsModule.run(LoginEffect)
	]
})
export class RootEffectModule { }
