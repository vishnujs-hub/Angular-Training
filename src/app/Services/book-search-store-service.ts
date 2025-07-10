import { inject, Injectable } from '@angular/core';
import { BookSearchApiService } from './book-search-api-service';
interface Books {
  filbook: string[];
  message: string;
}
@Injectable({
  providedIn: 'root',
})
export class BookSearchStoreService {
  apiService = inject(BookSearchApiService);
  filteredBooks: Books = { filbook: [], message: '' };

  getBooks() {
    return this.apiService.getBooks();
  }

  onChange(inputValue: string) {
    this.filteredBooks = this.apiService.filterBooksChange(inputValue);
    console.log('filtered', this.filteredBooks);
    return this.filteredBooks;
  }
}
