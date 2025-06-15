import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PizzaService } from '../../app/core/services/pizza.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a routerLink="/home" class="navbar-brand">PizzAngular</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" routerLink="/home">Home</a>
            <a class="nav-link" routerLink="/menu">Menù</a>
            <a class="nav-link" [ngClass]="{'disabled': pizzaService.isCartEmpty()}" routerLink="/cart">Carrello</a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: ``,
})
export class NavbarComponent {
  pizzaService = inject(PizzaService)
}
