import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-buy-modal',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div
      class="modal fade show"
      tabindex="-1"
      [ngStyle]="{ display: show ? 'block' : 'none', background: show ? 'rgba(0,0,0,0.5)' : '' }"
      *ngIf="show"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Grazie per l'acquisto!</h5>
          </div>
          <div class="modal-body">
            <p>Il tuo ordine è stato ricevuto!</p>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-primary"
              (click)="close.emit()"
              routerLink="/menu"
            >
              Ritorna al menù
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class BuyModalComponent {
  @Input() show = false;
  @Output() close = new EventEmitter<void>();
}
