import { Routes } from '@angular/router';
import { MenuComponent } from './features/menu/menu.component';
import { CartComponent } from './features/cart/cart.component';
import { MenuDetailsComponent } from './features/menu-details/menu-details.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu/:pizzaId', component: MenuDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
