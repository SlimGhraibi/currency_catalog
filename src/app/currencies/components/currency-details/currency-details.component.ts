import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../../services/currencies.service';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { Currency } from '../../models/currency.model';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit {

  currency: Currency;
  constructor(private currenciesService: CurrenciesService,
    private route: ActivatedRoute,
    private router: Router
  ) {

     }

  ngOnInit() {
    this.fetchOneCurrency();
  }

  private fetchOneCurrency() {
    this.currenciesService.fetchOneCurrency(this.route.snapshot.params.id).subscribe(currency => {
    this.currency = currency;
});
}

  goToCurrency() {
    this.router.navigate(['/']);
  }
}
