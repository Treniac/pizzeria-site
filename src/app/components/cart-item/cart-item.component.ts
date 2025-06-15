import { Component, Input } from '@angular/core';
import Pizza from '../../models/pizza.model';

@Component({
  selector: 'app-cart-item',
  imports: [],
  template: `
    <p>
      {{pizza?.name}}
      {{pizza!.price * pizza!.quantity}}
    </p>
  `,
  styles: ``
})
export class CartItemComponent {
  @Input() pizza: Pizza | undefined

}
