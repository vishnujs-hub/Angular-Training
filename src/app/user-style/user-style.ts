import { Component } from '@angular/core';

interface Employee {
  name: string;
  email: string;
  contact: string;
}

@Component({
  selector: '[user-style]',
  standalone: false,
  templateUrl: './user-style.html',
  styleUrl: './user-style.css',
})
export class UserStyle {
  employee: Employee = {
    name: '',
    email: '',
    contact: '',
  };

  onSubmit() {
    console.log('employee form', this.employee);
  }
}
