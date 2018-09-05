import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { MatGridList } from '../../../../../node_modules/@angular/material';
import { ObservableMedia, MediaChange } from '../../../../../node_modules/@angular/flex-layout';
import { Currency } from '../../models/currency.model';
import { CurrenciesService } from '../../services/currencies.service';
import { Params } from '../../models/http-param.model';

@Component({
  selector: 'app-displayer',
  templateUrl: './displayer.component.html',
  styleUrls: ['./displayer.component.css']
})
export class DisplayerComponent implements OnInit, AfterContentInit {
  @ViewChild('grid') grid: MatGridList;

  httpParams: Params ;
  currencies: Currency[];
  totalSize:  number;
  indication: number;

  gridByBreakpoint = {
    xl: 8,
    lg: 6,
    md: 4,
    sm: 2,
    xs: 1
  };

  constructor(private observableMedia:   ObservableMedia,
              private currenciesService: CurrenciesService) {}

  ngOnInit() {
      this.httpParams = new Params(1, 10, 'any', ' ');
    if (JSON.stringify(this.currenciesService.newHttpParam) !== JSON.stringify(this.httpParams)) {
      this.getCurreny(this.currenciesService.newHttpParam);
      } else {
      this.getCurreny(this.httpParams);
    }
  }

  private getCurreny(httpParams) {
    this.currenciesService.fetchAllCurrency(httpParams).subscribe(data => {
    this.currencies = data.currency;
    this.totalSize = data.totalSize;
    });
  }

  private getNewPage(event) {
    this.httpParams.pageNumber = event.pageNumber;
    this.httpParams.pageSize = event.pageSize;
    this.getCurreny(this.httpParams);
  }

  private getNewSearchPage(event) { /* event is the output object */
    this.httpParams.filterKey = event.filterKey;
    this.httpParams.filterValue = event.filterValue;
    this.getCurreny(this.httpParams);
  }

  ngAfterContentInit(): void {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
    this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }

}
