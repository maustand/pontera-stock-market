import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FundsRoutingModule } from './funds-routing.module';
import { ListFundsComponent } from './list-funds/list-funds.component';
import { OverviewFundComponent } from './overview-fund/overview-fund.component';



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
    MatPaginatorModule,
  ]
})
export class FundsModule { }
