import { Component, Input } from '@angular/core';

@Component({
  selector: 'employee-list',
  standalone: false,
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  @Input()
  employee!: { name: string; email: string };
}
