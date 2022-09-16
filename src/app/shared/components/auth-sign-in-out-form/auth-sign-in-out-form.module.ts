import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthSignInOutFormComponent } from './auth-sign-in-out-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AuthSignInOutFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [AuthSignInOutFormComponent, MatButtonModule],
})
export class AuthSignInOutFormModule {}
