import { Component, inject, Input } from '@angular/core';
import Pizza from '../../core/models/pizza.model';
import { PizzaService } from '../../core/services/pizza.service';

@Component({
  selector: 'app-cart-item',
  imports: [],
  template: `
    <div class="card mb-2 shadow-sm">
      <div class="card-body d-flex align-items-center justify-content-between">
        <div>
          <h5 class="card-title mb-1">{{ pizza?.name }}</h5>
          <div class="d-flex align-items-center">
            <button
              class="btn btn-danger btn-sm me-2"
              (click)="pizzaService.decrementPizzas(pizza!.id)"
            >
              <i class="bi bi-dash"></i>
            </button>
            <span class="mx-1">{{ pizza?.quantity }}</span>
            <button
              class="btn btn-primary btn-sm ms-2"
              (click)="pizzaService.incrementPizzas(pizza!.id)"
            >
              <i class="bi bi-plus"></i>
            </button>
          </div>
        </div>
        <div>
          <span class="fw-bold fs-5">
            €{{ pizza!.price * pizza!.quantity }}
          </span>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class CartItemComponent {
  @Input() pizza: Pizza | undefined;
  pizzaService = inject(PizzaService);
}
