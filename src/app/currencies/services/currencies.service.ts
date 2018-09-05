import { Injectable } from '@angular/core';
import { Utils } from '../../../assets/utils';
import { Params } from '../models/http-param.model';
import { Observable } from 'rxjs';
import { Currency } from '../models/currency.model';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class CurrenciesService {

  currencyUrl = Utils.currencyUrl;
  newHttpParam: Params;
  searchValue: string;

  /* build new url  */
  private createNewUrl(httpParams: Params) {

    let urlWs = this.currencyUrl + '?page%5Bnumber%5D=' + httpParams.pageNumber + '&page%5Bsize%5D=' + httpParams.pageSize;

    if (httpParams.filterKey !== undefined && httpParams.filterValue.length > 0) {
      this.searchValue = httpParams.filterValue;
      urlWs = urlWs + '&filter%5B' + httpParams.filterKey + '%5D=' + httpParams.filterValue;
    }
    return  urlWs ;
  }

  /* injection de HttpClient */
  constructor(private http: HttpClient) {
   this.newHttpParam = new Params(1, 10, 'any', '');
   }


  public fetchAllCurrency(httpParams: Params): Observable<any> {

    const urlCurrency = this.createNewUrl(httpParams);

    const headers = new HttpHeaders({
      'Accept' : 'application/vnd.api+json'
    }) ;

   this.newHttpParam = httpParams;
    return this.http.get(urlCurrency)
        .pipe(map((response: any) => {
          let currencies: Currency[];
          currencies = [];
          const totalSize = response.meta.total;
          response.data.forEach(element => {
            const currency = new Currency(element);
            currencies.push(currency);
          });
          return { currency : currencies, totalSize : totalSize };
          })
          );
 }



 public fetchOneCurrency(id: string): Observable<Currency> {
  return this.http.get(this.currencyUrl + '/' + id).pipe(map((response: any) => {
      const currency = new Currency(response.data);
      return currency;
    }));
  }

  }






