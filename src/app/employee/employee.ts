import { Component } from '@angular/core';
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
  employee: EmployeeObject[] = [
    { name: 'Ben Johnson', email: 'ben@gmail,com' },
    { name: 'Adam Smith', email: 'adamsmith@gmail,com' },
    { name: 'Allen Border', email: 'allenborder@gmail,com' },
    { name: 'Islam Makhachev', email: 'islam@gmail,com' },
    { name: 'Illia Topuria', email: 'illia@gmail,com' },
  ];
}
