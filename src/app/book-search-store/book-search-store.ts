import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { BookSearchStoreService } from '../Services/book-search-store-service';
interface Books {
  filbook: string[];
  message: string;
}
@Component({
  selector: 'book-search-store',
  standalone: false,
  templateUrl: './book-search-store.html',
  styleUrl: './book-search-store.css',
})
export class BookSearchStore {
  bookSearch = inject(BookSearchStoreService);
  books: string[] = [];
  filteredBooks: Books = { filbook: [], message: '' };
  @ViewChild('inputRef', { static: false }) inputValue!: ElementRef;
  onSend() {
    console.log(this.inputValue.nativeElement.value);
    this.filteredBooks = this.bookSearch.onChange(
      this.inputValue.nativeElement.value
    );
    console.log('filtered store', this.filteredBooks);
  }
  ngOnInit() {
    this.books = this.bookSearch.getBooks();
  }
}
