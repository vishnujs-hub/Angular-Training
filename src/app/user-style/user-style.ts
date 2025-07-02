import { Component } from '@angular/core';

@Component({
  selector: '[user-style]',
  standalone: false,
  templateUrl: './user-style.html',
  styleUrl: './user-style.css',
})
export class UserStyle {
  employee: object = {
    name: '',
    email: '',
    contact: '',
  };

  onSubmit() {
    console.log('employee form', this.employee);
  }
}
