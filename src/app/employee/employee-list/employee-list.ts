import { Component, Input } from '@angular/core';

@Component({
  selector: 'employee-list',
  standalone: false,
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  highlight: boolean = false;
  @Input()
  employee!: { name: string; email: string };

  highlightIfMatch(search: string) {
    console.log(search, 'search');
    this.highlight = this.employee.name
      .replace(/\s+/g, '')
      .toLowerCase()
      .includes(search);
  }
}
