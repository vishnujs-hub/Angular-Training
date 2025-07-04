import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'books',
  standalone: false,
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  @Output() bookSelected = new EventEmitter<string>();
  books: string[] = [
    'Alchemist',
    "Man's search for meaning",
    'Monk who sold his ferrari',
    'Marshak mak',
  ];

  onBookChange(event: any) {
    const selected = event.target.value;
    console.log('selected', selected);
    this.bookSelected.emit(selected);
  }
}
