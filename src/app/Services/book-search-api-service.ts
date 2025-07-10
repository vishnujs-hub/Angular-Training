import { inject, Injectable } from '@angular/core';
import { BookSearchCacheService } from './book-search-cache-service';

@Injectable({
  providedIn: 'root',
})
export class BookSearchApiService {
  cacheBookStore = inject(BookSearchCacheService);
  filteredBooks: string[] = [];
  message: string = '';
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

  filterBooksChange(inputValue: string) {
    const input = inputValue.replace(/\s+/g, '').toLowerCase();

    const cachedResult = this.cacheBookStore.retrieve(input);
    if (cachedResult) {
      return { filbook: cachedResult, message: 'This is from cache' };
    }

    const filteredBooks = this.books.filter(
      (book) => book.replace(/\s+/g, '').toLowerCase() === input
    );

    this.cacheBookStore.store(input, filteredBooks);
    this.message = 'This is from api';
    return { filbook: filteredBooks, message: 'This is from api' };
  }
}
