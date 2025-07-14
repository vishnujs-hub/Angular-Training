import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observablebooksearch } from '../Services/observablebooksearch';

@Component({
  selector: 'observable-book-search',
  standalone: false,
  templateUrl: './observable-book-search.html',
  styleUrl: './observable-book-search.css',
})
export class ObservableBookSearch implements OnInit {
  bookSearch = inject(Observablebooksearch);
  books: string[] = [];
  filteredBooks: string[] = [];
  @ViewChild('inputRef', { static: false }) inputValue!: ElementRef;
  onSend() {
    console.log(this.inputValue.nativeElement.value);
    this.bookSearch
      .onChange(this.inputValue.nativeElement.value)
      .subscribe((val: any) => {
        console.log('value', val);
        this.filteredBooks = val;
      });
  }
  ngOnInit() {
    this.books = this.bookSearch.getBooks();
  }
}
