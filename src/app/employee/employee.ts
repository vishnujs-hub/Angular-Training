import { Component, ElementRef, ViewChild } from '@angular/core';
interface EmployeeObject {
  name: string;
  email: string;
}
@Component({
  selector: 'employee',
  standalone: false,
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  @ViewChild('viewInput', { static: false }) viewInput!: ElementRef;
  selectedBook: string = '';
  searchedEmployee!: {};
  error!: string;
  employee: EmployeeObject[] = [
    { name: 'Ben Johnson', email: 'ben@gmail.com' },
    { name: 'Adam Smith', email: 'adamsmith@gmail.com' },
    { name: 'Allen Border', email: 'allenborder@gmail.com' },
    { name: 'Islam Makhachev', email: 'islam@gmail.com' },
    { name: 'Illia Topuria', email: 'illia@gmail.com' },
  ];

  searchEmployee() {
    console.log('click here ');
    const inputValue = this.viewInput.nativeElement.value
      .replace(/\s+/g, '')
      .toLowerCase();
    console.log('input', inputValue);
    const found = this.employee.find(
      (emp) => emp.name.trim().replace(/\s+/g, '').toLowerCase() === inputValue
    );
    console.log(found, this.employee[0].name.replace(/\s+/g, '').toLowerCase());
    if (found) {
      this.error = '';
      this.searchedEmployee = found;
    } else {
      this.searchedEmployee = {};
      this.error = 'Employee not found';
    }
  }
}
