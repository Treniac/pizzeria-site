import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import Pizza from '../../core/models/pizza.model';

import { CommonModule } from '@angular/common';
import { CardComponent } from './pizza-card.component';
import { PizzaService } from '../../core/services/pizza.service';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, CardComponent],
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4" *ngFor="let pizza of pizzas">
          <app-card [pizza]="pizza" />
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class MenuComponent {
  http = inject(HttpClient);
  pizzaService = inject(PizzaService);
  pizzas: Pizza[] = [];

  constructor() {
    this.pizzaService.getPizzas().subscribe((res) => (this.pizzas = res));
  }
}
