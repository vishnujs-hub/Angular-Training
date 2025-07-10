import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookSearchService {
  filteredBooks: string[] = [];
  inputValue: string = '';
  books: string[] = [
    'Alchemist',
    "Man's search for meaning",
    'Monk who sold his ferrari',
    'Marshak mak',
    'Monk who sold his ferrari 2',
    'Marshak mak 4',
  ];

  getBooks() {
    return this.books;
  }

  onChange(inputValue: string) {
    this.filteredBooks = this.books?.filter(
      (book) =>
        book.replace(/\s+/g, '').toLowerCase() ===
        inputValue.replace(/\s+/g, '').toLowerCase()
    );
    return this.filteredBooks;
  }
}
