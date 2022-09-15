import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'pontera-overview-fund',
  templateUrl: './overview-fund.component.html',
  styleUrls: ['./overview-fund.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewFundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
