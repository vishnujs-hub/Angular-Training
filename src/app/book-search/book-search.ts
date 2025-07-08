import { Component } from '@angular/core';

@Component({
  selector: 'book-search',
  standalone: false,
  templateUrl: './book-search.html',
  styleUrl: './book-search.css',
})
export class BookSearch {
  inputValue: string = '';
  filteredBooks: string[] = [];

  books: string[] = [
    'Alchemist',
    "Man's search for meaning",
    'Monk who sold his ferrari',
    'Marshak mak',
    'Monk who sold his ferrari 2',
    'Marshak mak 4',
  ];

  onChange() {
    this.filteredBooks = this.books?.filter(
      (book) =>
        book.replace(/\s+/g, '').toLowerCase() ===
        this.inputValue.replace(/\s+/g, '').toLowerCase()
    );
  }
}
