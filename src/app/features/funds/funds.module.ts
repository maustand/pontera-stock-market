import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FundsRoutingModule } from './funds-routing.module';
import { ListFundsComponent } from './list-funds/list-funds.component';
import { OverviewFundComponent } from './overview-fund/overview-fund.component';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    OverviewFundComponent,
    ListFundsComponent
  ],
  imports: [
    CommonModule,
    FundsRoutingModule,
    MatTableModule,
    MatSortModule,
  ]
})
export class FundsModule { }
