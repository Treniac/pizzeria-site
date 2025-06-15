import { Component, inject } from '@angular/core';
import { PizzaService } from '../../core/services/pizza.service';
import Pizza from '../../core/models/pizza.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-details',
  imports: [],
  template: `
    <div class="container d-flex justify-content-center mt-5">
      <div class="card shadow" style="max-width: 500px; width: 100%;">
        <img
          [src]="pizza!.image"
          class="card-img-top"
          [alt]="pizza?.name"
          style="object-fit: cover; max-height: 300px;"
        />
        <div class="card-body text-center">
          <h2 class="card-title mb-3">{{ pizza?.name }}</h2>
          <p class="card-text">{{ pizza?.description }}</p>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class MenuDetailsComponent {
  pizza: Pizza | undefined = undefined;
  pizzaService = inject(PizzaService);
  route = inject(ActivatedRoute);

  constructor() {
    this.route.params.subscribe((params) => {
      const pizzaId = parseInt(params['pizzaId']);
      this.pizzaService
        .getPizzas()
        .subscribe(
          (pizzas) =>
            (this.pizza = pizzas.find((pizza) => pizza.id === pizzaId))
        );
    });
  }
}
