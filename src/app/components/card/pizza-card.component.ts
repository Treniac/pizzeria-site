import { CommonModule } from '@angular/common';
import { Component, inject, Input, Output } from '@angular/core';
import Pizza from '../../models/pizza.model';
import { PizzaService } from '../../../../services/pizza.service';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  template: `
    <div class="card" style="width: 18rem;">
      <img [src]="pizza?.image" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ pizza?.name }}</h5>
        <p class="card-text">
          {{ pizza?.description }}
        </p>
        <div>
          <button class="btn btn-primary" (click)="pizzaService.incrementPizzas(pizza!.id)">+</button>
          <p>{{pizza?.quantity}}</p>
          <button class="btn btn-danger" (click)="pizzaService.decrementPizzas(pizza!.id)">-</button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class CardComponent {
  @Input() pizza: Pizza | undefined;

  pizzaService = inject(PizzaService)
}
