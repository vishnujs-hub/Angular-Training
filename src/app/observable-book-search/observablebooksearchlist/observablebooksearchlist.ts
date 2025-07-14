import { Component, Input } from '@angular/core';

@Component({
  selector: 'observablebooksearchlist',
  standalone: false,
  templateUrl: './observablebooksearchlist.html',
  styleUrl: './observablebooksearchlist.css',
})
export class Observablebooksearchlist {
  @Input() books: string[] = [];
}
