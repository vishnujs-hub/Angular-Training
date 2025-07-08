import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Welcome } from './welcome/welcome';
import { UserStyle } from './user-style/user-style';
import { ClassComponent } from './class-component/class-component';
import { FormsModule } from '@angular/forms';
import { Userlogin } from './userlogin/userlogin';
import { Employee } from './employee/employee';
import { EmployeeList } from './employee/employee-list/employee-list';
import { Books } from './employee/books/books';
import { BookSearch } from './book-search/book-search';
import { BookList } from './book-search/book-list/book-list';

@NgModule({
  declarations: [App, Welcome, UserStyle, ClassComponent, Userlogin, Employee, EmployeeList, Books, BookSearch, BookList],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
  ],
  bootstrap: [App],
})
export class AppModule {}
