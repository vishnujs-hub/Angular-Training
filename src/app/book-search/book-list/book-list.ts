import { Component, Input } from '@angular/core';

@Component({
  selector: 'book-list',
  standalone: false,
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  @Input() filteredBooks: string[] = [];
  previousBooks: string[] = [];
  message: string = '';

  ngDoCheck() {
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
