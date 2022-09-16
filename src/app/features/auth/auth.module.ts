import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthSignInOutFormModule } from '@shared/components/auth-sign-in-out-form/auth-sign-in-out-form.module';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [CommonModule, AuthSignInOutFormModule, AuthRoutingModule],
})
export class AuthModule {}
