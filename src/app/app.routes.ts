import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CardComponent } from './components/card/card.component';
import { ItiComponent } from './components/iti/iti.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "product", component: ProductComponent },
  { path: 'card', component: CardComponent },
  { path: "iti", component: ItiComponent },
  { path: '**', redirectTo: 'home' }
];
