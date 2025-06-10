import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import Pizza from '../../models/pizza.model';

import { CommonModule } from '@angular/common';
import { CardComponent } from "../../components/card/pizza-card.component";

@Component({
  selector: 'app-menu',
  imports: [CommonModule, CardComponent],
  template: `
    <app-card *ngFor="let pizza of pizzas" [pizza]="pizza"/>
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
