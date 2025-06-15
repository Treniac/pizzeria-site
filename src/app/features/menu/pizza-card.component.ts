import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import Pizza from '../../core/models/pizza.model';
import { PizzaService } from '../../core/services/pizza.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card" style="width: 18rem;">
      <img
        routerLink="/menu/{{ pizza?.id }}"
        [src]="pizza?.image"
        class="card-img-top"
      />
      <div class="card-body text-center">
        <h5 class="card-title">{{ pizza?.name }}</h5>
        <div class="d-flex align-items-center justify-content-center mt-3">
          <button
            class="btn btn-primary me-2"
            (click)="pizzaService.incrementPizzas(pizza!.id)"
          >
            <i class="bi bi-plus"></i>
          </button>
          <h5 class="mb-0 mx-2">{{ pizza?.quantity }}x</h5>
          <button
            class="btn btn-danger ms-2"
            (click)="pizzaService.decrementPizzas(pizza!.id)"
          >
            <i class="bi bi-dash"></i>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class CardComponent {
  @Input() pizza: Pizza | undefined;

  pizzaService = inject(PizzaService);
}
