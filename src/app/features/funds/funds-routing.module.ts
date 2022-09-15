import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFundsComponent } from './list-funds/list-funds.component';
import { OverviewFundComponent } from './overview-fund/overview-fund.component';

const routes: Routes = [
  {
    path: '',
    component: ListFundsComponent,
  },
  {
    path: ':symbol',
    component: OverviewFundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundsRoutingModule { }
