import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormControlStatus,
  FormGroup,
  Validators,
} from '@angular/forms';
import { distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { UserAuth } from '@core/models/auth';
import {
  AuthSignInOutFormStatus,
  AuthSignInOutFormValues,
} from './auth-sign-in-out-form';

@Component({
  selector: 'pontera-auth-sign-in-out-form',
  templateUrl: './auth-sign-in-out-form.component.html',
  styleUrls: ['./auth-sign-in-out-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthSignInOutFormComponent implements OnInit {
  @Output() formStatusChanges = new EventEmitter<AuthSignInOutFormStatus>();

  private destroy$: Subject<void> = new Subject();

  isHide = true;
  authUserForm = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor() {}

  ngOnInit(): void {
    this.authUserForm.statusChanges
      .pipe(distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((newStatus: FormControlStatus) => {
        this.formStatusChanges.emit({
          isValid: this.authUserForm.valid,
          values: this.authUserForm.value as AuthSignInOutFormValues,
        });
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
