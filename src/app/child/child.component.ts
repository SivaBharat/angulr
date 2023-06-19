import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() quantity: number|any;
  @Output() increment: EventEmitter<void> = new EventEmitter<void>();
  @Output() decrement: EventEmitter<void> = new EventEmitter<void>();

  incrementQuantity(): void {
    if (this.quantity < 100) {
      this.increment.emit();
    }
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.decrement.emit();
    }
  }
}
