import { Routes } from '@angular/router';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';
import { DisplayerComponent } from './components/displayer/displayer.component';


export const currencyRoutes: Routes = [
    {
        path: 'currency/:id', component: CurrencyDetailsComponent
    },
    {
        path: '', component: DisplayerComponent
    }
];

