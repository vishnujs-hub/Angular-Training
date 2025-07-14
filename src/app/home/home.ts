import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  router: Router = inject(Router);
  navigateTo() {
    this.router.navigate(['About']);
  }
}
