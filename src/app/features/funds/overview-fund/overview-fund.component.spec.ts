import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewFundComponent } from './overview-fund.component';

describe('OverviewFundComponent', () => {
  let component: OverviewFundComponent;
  let fixture: ComponentFixture<OverviewFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewFundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
