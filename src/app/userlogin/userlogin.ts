import { Component } from '@angular/core';

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'userlogin',
  standalone: false,
  templateUrl: './userlogin.html',
  styleUrl: './userlogin.css',
})
export class Userlogin {
  message: string = '';
  user: User = {
    email: '',
    password: '',
  };

  onSubmit() {
    console.log('user', this.user);
    if (this.user.email === 'admin' && this.user.password === 'xminds@123') {
      this.message = 'You have access';
    } else {
      this.message = 'Access denied';
    }
  }
}
