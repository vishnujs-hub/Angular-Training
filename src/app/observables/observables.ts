import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Hellocomponent } from '../Services/hellocomponent';

@Component({
  selector: 'observables',
  standalone: false,
  templateUrl: './observables.html',
  styleUrl: './observables.css',
})
export class Observables {
  message!: string;

  helloService = inject(Hellocomponent);

  // helloObservable = new Observable((observer) => {
  //   observer.next('Hello world');
  // });

  onClick() {
    this.helloService.getHelloMessage().subscribe((val: any) => {
      this.message = val;
    });
  }
}
