import { Component, inject } from '@angular/core';
import Pizza from '../../core/models/pizza.model';
import { PizzaService } from '../../core/services/pizza.service';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, CartItemComponent, RouterLink],
  template: `
    <ng-container *ngFor="let pizza of pizzas">
      <app-cart-item *ngIf="pizza.quantity > 0" [pizza]="pizza" />
    </ng-container>
    <div *ngIf="!pizzaService.isCartEmpty()">
      <button routerLink="/menu" style="width: 100px;" class="btn btn-danger">
        Close
      </button>
      <button
        routerLink="/menu"
        style="width: 100px;"
        class="btn btn-primary"
        (click)="pizzaService.clearPizzas()"
      >
        Buy
      </button>
    </div>
    <p *ngIf="pizzaService.isCartEmpty()">
      Your cart is empty! Click <a routerLink="/menu">here</a> to return to the
      menu
    </p>
  `,
  styles: ``,
})
export class CartComponent {
  pizzas: Pizza[] = [];
  pizzaService = inject(PizzaService);

  constructor() {
    this.pizzaService.getPizzas().subscribe((res) => (this.pizzas = res));
  }
}
