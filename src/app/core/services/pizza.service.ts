import { inject, Injectable } from '@angular/core';
import Pizza from '../models/pizza.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PizzaService {
  pizzas: Pizza[] | null = null;
  http = inject(HttpClient);

  getPizzas(): Observable<Pizza[]> {
    if (this.pizzas) {
      return of(this.pizzas);
    } else {
      return this.http
        .get<Pizza[]>(
          'https://my-json-server.typicode.com/zoelounge/menupizza/cards'
        )
        .pipe(
          map((pizzas: Pizza[]) => {
            this.pizzas = pizzas;
            return pizzas;
          })
        );
    }
  }

  incrementPizzas(pizzaId: number) {
    const selectedPizza = this.pizzas?.find((pizza) => pizza.id === pizzaId);
    if (selectedPizza) selectedPizza.quantity += 1;
  }

  decrementPizzas(pizzaId: number) {
    const selectedPizza = this.pizzas?.find((pizza) => pizza.id === pizzaId);
    if (selectedPizza && selectedPizza.quantity > 0)
      selectedPizza.quantity -= 1;
  }

  clearPizzas() {
    if (this.pizzas) this.pizzas.forEach((pizza) => (pizza.quantity = 0));
  }

  isCartEmpty() {
    if (this.pizzas) {
      return this.pizzas.findIndex(pizza => pizza.quantity > 0) === -1;
    } else return true
  }
}
