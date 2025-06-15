import { Component, inject } from '@angular/core';
import Pizza from '../../core/models/pizza.model';
import { PizzaService } from '../../core/services/pizza.service';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item.component';
import { RouterLink } from '@angular/router';
import { BuyModalComponent } from './buy-modal.component';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, CartItemComponent, RouterLink, BuyModalComponent],
  template: `
    <ng-container *ngFor="let pizza of pizzas">
      <app-cart-item *ngIf="pizza.quantity > 0" [pizza]="pizza" />
    </ng-container>
    <div *ngIf="!pizzaService.isCartEmpty()">
      <button routerLink="/menu" style="width: 100px;" class="btn btn-danger">
        Chiudi
      </button>
      <button
        style="width: 100px;"
        class="btn btn-primary"
        (click)="onBuy()"
      >
        Compra
      </button>
    </div>
    <p *ngIf="pizzaService.isCartEmpty()">
      Il tuo carrello è vuoto! Clicca <a routerLink="/menu">quì</a> per tornare al menù
    </p>

    <app-buy-modal
      [show]="showThankYouModal"
      (close)="showThankYouModal = false"
    ></app-buy-modal>
  `,
  styles: ``,
})
export class CartComponent {
  pizzas: Pizza[] = [];
  pizzaService = inject(PizzaService);
  showThankYouModal = false;

  constructor() {
    this.pizzaService.getPizzas().subscribe((res) => (this.pizzas = res));
  }

  onBuy() {
    this.pizzaService.clearPizzas();
    this.showThankYouModal = true;
  }
}
