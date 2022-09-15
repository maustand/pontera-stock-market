import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSignInOutFormComponent } from './auth-sign-in-out-form.component';

describe('AuthSignInOutFormComponent', () => {
  let component: AuthSignInOutFormComponent;
  let fixture: ComponentFixture<AuthSignInOutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthSignInOutFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthSignInOutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
