import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'pontera-auth-sign-in-out-form',
  templateUrl: './auth-sign-in-out-form.component.html',
  styleUrls: ['./auth-sign-in-out-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthSignInOutFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
