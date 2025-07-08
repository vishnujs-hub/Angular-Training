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
  previousBooks: string[] = [];
  message: string = '';

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

  ngDoCheck() {
    console.log(this.filteredBooks, 'hello');
    const current = [...this.filteredBooks];
    const previous = [...this.previousBooks];

    const isSameLength = current.length === previous.length;
    const isSameContent =
      isSameLength && current.every((val, index) => val === previous[index]);
    console.log(
      'isSameContent',
      isSameContent,
      isSameLength,
      current,
      previous
    );
    this.message = isSameContent
      ? 'Previous search result'
      : 'New search result';

    this.previousBooks = [...this.filteredBooks];
  }
}
