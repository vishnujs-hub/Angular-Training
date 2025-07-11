import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'observables',
  standalone: false,
  templateUrl: './observables.html',
  styleUrl: './observables.css',
})
export class Observables {
  message!: string;

  helloObservable = new Observable((observer) => {
    observer.next('Hello world');
  });

  onClick() {
    this.helloObservable.subscribe((val: any) => {
      this.message = val;
    });
  }
}
