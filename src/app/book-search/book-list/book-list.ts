import { Component, Input } from '@angular/core';

@Component({
  selector: 'book-list',
  standalone: false,
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  @Input() filteredBooks: string[] = [];
  @Input() message!: string;
}
