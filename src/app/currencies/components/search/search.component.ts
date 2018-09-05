import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CurrenciesService } from '../../services/currencies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output()  public searchPage = new EventEmitter();

  filterKey: string;
  filterValue: string;

  searchKey = [
    { name: 'Any',  value: 'search'},
    { name: 'Id',   value: 'id'},
    { name: 'Code', value: 'code'},
    { name: 'Name', value: 'name'},
    { name: 'Type', value: 'currency_type'}
  ];

  constructor(private currenciesService: CurrenciesService) {
    this.filterValue = currenciesService.searchValue;
  }

  ngOnInit() {
    this.filterKey = 'search';
  }

  updatedkey(key) {
    this.filterKey = key;
    this.onchageSearch();
  }

  updatedValue(value) {
    this.filterValue = value;
    this.onchageSearch();
  }

  onchageSearch() {
          this.searchPage.emit({filterKey   : this.filterKey.toString() ,
                                filterValue : this.filterValue.toString()
                              });

  }

}
