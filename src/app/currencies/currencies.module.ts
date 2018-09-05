import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayerComponent } from './components/displayer/displayer.component';
import { OneCurrencyComponent } from './components/displayer/one-currency/one-currency.component';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { currencyRoutes } from './currencies-route.routes';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MatToolbarModule, MatCardModule, MatGridListModule, MatDividerModule,
         MatSnackBarModule, MatProgressBarModule, MatTableModule, MatButtonModule,
         MatPaginatorModule, MatSelectModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(currencyRoutes),
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSelectModule,
    MatInputModule,
    FlexLayoutModule,
    MatGridListModule
  ],
  declarations: [
    DisplayerComponent,
    OneCurrencyComponent,
    CurrencyDetailsComponent,
    PaginationComponent,
    SearchComponent],
  exports: [
    DisplayerComponent,
    OneCurrencyComponent,
    CurrencyDetailsComponent,
    PaginationComponent
  ]
})
export class CurrenciesModule { }
