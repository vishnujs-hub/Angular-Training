import { Component } from '@angular/core';

@Component({
  selector: 'welcome',
  standalone: false,
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  isTrue: boolean = false;
  username: string = 'Jadan Smith';

  onClick = () => {
    this.isTrue = !this.isTrue;
  };
}
