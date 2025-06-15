import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <div class="container text-center mt-5">
      <h1 class="display-3 fw-bold mb-3 text-danger">Benvenuto da PizzAngular!</h1>
      <p class="lead mb-4">
        La tua pizzeria di fiducia, dove tradizione e innovazione si incontrano.<br>
        Scegli tra le nostre pizze artigianali, preparate con ingredienti freschi e genuini.<br>
        Ordina online e gusta la vera pizza italiana comodamente a casa tua!
      </p>
      <a routerLink="/menu" class="btn btn-primary btn-lg px-5">
        Guarda il Menù
      </a>
    </div>
  `,
  styles: ``
})
export class HomeComponent {

}
