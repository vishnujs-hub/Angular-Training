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
  @ViewChildren('listValue', {})
  listValue!: QueryList<ElementRef>;

  searchedEmployee!: {};
  error!: string;
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
    console.log('input', inputValue, this.listValue);
    const found = this.employee.find(
      (emp) => emp.name.replace(/\s+/g, '').toLowerCase() === inputValue
    );
    if (found) {
      this.searchedEmployee = found;
      this.error = '';
    } else {
      this.searchedEmployee = '';
      this.error = 'No employee found';
    }
    // this.employeeComponents.forEach((empComp) => {
    //   empComp.highlightIfMatch(inputValue);
    // });
    // this.listValue.forEach((list) => {
    //   const el = list.nativeElement;

    //   const name = el.textContent?.replace(/\s+/g, '').toLowerCase();
    //   console.log('el', name);

    //   if (inputValue && name === inputValue) {
    //     el.style.color = 'green';
    //   } else {
    //     el.style.color = '';
    //   }
    // });
  }
}
