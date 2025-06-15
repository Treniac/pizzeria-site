import { Component, inject } from '@angular/core';
import { PizzaService } from '../../../../services/pizza.service';
import Pizza from '../../models/pizza.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-details',
  imports: [],
  template: `
    <p>
      {{ pizza?.description }}
    </p>
  `,
  styles: ``,
})
export class MenuDetailsComponent {
  pizza: Pizza | undefined = undefined;
  pizzaService = inject(PizzaService);
  route = inject(ActivatedRoute);
  pizzaId: number | undefined;

  constructor() {
    this.route.params.subscribe((params) => {
      this.pizzaId = parseInt(params['pizzaId']);
      this.pizzaService
        .getPizzas()
        .subscribe(
          (pizzas) =>
            (this.pizza = pizzas.find((pizza) => pizza.id === this.pizzaId))
        );
    });
  }
}
