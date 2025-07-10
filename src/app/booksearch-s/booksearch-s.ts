import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { BookSearchService } from '../Services/book-search';

@Component({
  selector: 'booksearch-s',
  standalone: false,
  templateUrl: './booksearch-s.html',
  styleUrl: './booksearch-s.css',
})
export class BooksearchS {
  // constructor(private bookSearch: BookSearchService) {}
  bookSearch = inject(BookSearchService);
  books: string[] = [];
  filteredBooks: string[] = [];
  @ViewChild('inputRef', { static: false }) inputValue!: ElementRef;
  onSend() {
    console.log(this.inputValue.nativeElement.value);
    this.filteredBooks = this.bookSearch.onChange(
      this.inputValue.nativeElement.value
    );
  }
  ngOnInit() {
    this.books = this.bookSearch.getBooks();
    console.log(this.books);
  }
}
