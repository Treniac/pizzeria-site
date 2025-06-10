import { Routes } from '@angular/router';
import { MenuComponent } from './features/menu/menu.component';

export const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
];
