import { Component } from '@angular/core';

@Component({
  selector: 'about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  name: string = '';
  email: string = '';

  isSubmitted: boolean = false;
  save() {
    this.isSubmitted = true;
  }
  canExit() {
    if (this.name || this.email) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    } else {
      return true;
    }
  }
}
