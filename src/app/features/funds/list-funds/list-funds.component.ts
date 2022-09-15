import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Fund } from '@core/models/funds';
import { FundsService } from '@core/services/api/funds/funds.service';

@Component({
  selector: 'pontera-list-funds',
  templateUrl: './list-funds.component.html',
  styleUrls: ['./list-funds.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListFundsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<Fund>();
  displayedColumns: string[] = ['symbol', 'price', 'performance', 'date_time'];

  constructor(
    private fundServ: FundsService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fundServ.all().subscribe((funds) => {
      this.dataSource.data = funds;
      this.cdRef.markForCheck();
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
