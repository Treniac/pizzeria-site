import { Component, inject } from '@angular/core';
import Pizza from '../../models/pizza.model';
import { PizzaService } from '../../../../services/pizza.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../components/card/pizza-card.component";
import { CartItemComponent } from "../../components/cart-item/cart-item.component";

@Component({
  selector: 'app-cart',
  imports: [CommonModule, CartItemComponent],
  template: `
    <ng-container *ngFor="let pizza of pizzas">
      <app-cart-item *ngIf="pizza.quantity > 0" [pizza]="pizza"/>
    </ng-container>
    <button class="btn btn-primary">Buy</button>
    <button class="btn btn-danger">Close</button>
  `,
  styles: ``
})
export class CartComponent {
  pizzas: Pizza[] = []
  pizzaService = inject(PizzaService)

  constructor() {
    this.pizzaService.getPizzas().subscribe(res => this.pizzas = res)
  }

}
