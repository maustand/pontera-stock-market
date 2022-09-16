import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/api/auth/auth.service';
import { AuthSignInOutFormStatus } from '@shared/components/auth-sign-in-out-form/auth-sign-in-out-form';
import { first } from 'rxjs';

@Component({
  selector: 'pontera-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  formStatus?: AuthSignInOutFormStatus;

  constructor(
    private changeDetectRef: ChangeDetectorRef,
    private authServ: AuthService,
    private router: Router
  ) {}

  onSignInAndOutFormStatusChanged(status: AuthSignInOutFormStatus) {
    this.formStatus = status;
    this.changeDetectRef.markForCheck();
  }

  singUp() {
    if (this.formStatus?.isValid) {
      this.authServ.signUp(this.formStatus.values).pipe(first()).subscribe(() => {
        this.router.navigate(['funds']);
      });
    }
  }
}
