import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import Pizza from '../../models/pizza.model';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  template: `
    <pre>{{pizzas | json}}</pre>
  `,
  styles: ``
})
export class MenuComponent {
  http = inject(HttpClient)
  pizzas: Pizza[] = []

  constructor() {
    this.http.get<Pizza[]>(
      'https://my-json-server.typicode.com/zoelounge/menupizza/cards'
    ).subscribe(res => this.pizzas = res);
  }
}
