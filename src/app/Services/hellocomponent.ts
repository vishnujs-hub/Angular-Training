import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Hellocomponent {
  getHelloMessage(): Observable<string> {
    return new Observable((observer) => {
      observer.next('Hello world');
      observer.complete();
    });
  }
}
