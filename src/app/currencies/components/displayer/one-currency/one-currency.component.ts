import { Component, OnInit, Input } from '@angular/core';
import { Currency } from '../../../models/currency.model';
import { Router, ActivatedRoute } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-one-currency',
  templateUrl: './one-currency.component.html',
  styleUrls: ['./one-currency.component.css']
})
export class OneCurrencyComponent {

constructor( private route: ActivatedRoute,
             private router: Router) {}

  @Input() currency: Currency;

  goToDetails() {
    this.router.navigate(['currency/' + this.currency.id]);
  }
}

