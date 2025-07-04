import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { EmployeeList } from './employee-list/employee-list';
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
  @ViewChildren(EmployeeList)
  employeeComponents!: QueryList<EmployeeList>;
  selectedBook: string = '';
  // searchedEmployee!: {};
  // error!: string;
  employee: EmployeeObject[] = [
    { name: 'Ben Johnson', email: 'ben@gmail.com' },
    { name: 'Adam Smith', email: 'adamsmith@gmail.com' },
    { name: 'Allen Border', email: 'allenborder@gmail.com' },
    { name: 'Islam Makhachev', email: 'islam@gmail.com' },
    { name: 'Illia Topuria', email: 'illia@gmail.com' },
    { name: 'Illia Topuria', email: 'illia123@gmail.com' },
    { name: 'Islam Makhachev', email: 'islam123@gmail.com' },
  ];

  searchEmployee() {
    console.log('click here ');
    const inputValue = this.viewInput.nativeElement.value
      .replace(/\s+/g, '')
      .toLowerCase();
    console.log('input', inputValue, this.employeeComponents);
    this.employeeComponents.forEach((empComp) => {
      empComp.highlightIfMatch(inputValue);
    });
  }
}
