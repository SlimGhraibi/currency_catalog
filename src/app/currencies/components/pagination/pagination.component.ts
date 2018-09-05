import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '../../../../../node_modules/@angular/material';
import { CurrenciesService } from '../../services/currencies.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

@ViewChild(MatPaginator) paginator: MatPaginator;

@Input() public totalSize; /* get totalSize from parent */

@Output()  public paginatorPage = new EventEmitter();

pageNumber: number;
pageSize: number;


_pageIndex: number;
_pageSize: number;

  constructor(public currenciesService: CurrenciesService) {
  }

  ngOnInit() {
    this._pageIndex = this.currenciesService.newHttpParam.pageNumber - 1;
    this._pageSize = this.currenciesService.newHttpParam.pageSize;
  }

  onchagePaginator() {
     this.pageNumber = this.paginator.pageIndex + 1;
     this.pageSize = this.paginator.pageSize ;
     this.paginatorPage.emit({pageNumber : this.pageNumber.toString() ,
                              pageSize : this.pageSize.toString() });

  }

      }

