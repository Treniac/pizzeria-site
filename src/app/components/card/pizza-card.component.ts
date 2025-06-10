import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import Pizza from '../../models/pizza.model';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  template: `
    <div class="card" style="width: 18rem;">
      <img [src]="pizza?.image" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  `,
  styles: ``,
})
export class CardComponent {
  @Input() pizza: Pizza | undefined;
}
