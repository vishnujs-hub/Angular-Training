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
import { ChatApplication } from './chat-application/chat-application';
import { HostTopic } from './host-topic/host-topic';
import { Highlight } from './customDirectives/highlight';
import { Customcolor } from './customDirectives/customcolor';
import { BooksearchS } from './booksearch-s/booksearch-s';
import { BookSearchService } from './Services/book-search';
import { BookSearchStore } from './book-search-store/book-search-store';
import { Observables } from './observables/observables';
import { ObservableBookSearch } from './observable-book-search/observable-book-search';
import { Observablebooksearchlist } from './observable-book-search/observablebooksearchlist/observablebooksearchlist';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Header } from './header/header';
import { Course } from './course/course';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'Home', component: Home },
  { path: 'About', component: About },
  { path: 'About/Course/:id', component: Course },
];

@NgModule({
  declarations: [
    App,
    Welcome,
    UserStyle,
    ClassComponent,
    Userlogin,
    Employee,
    EmployeeList,
    Books,
    BookSearch,
    BookList,
    ChatApplication,
    HostTopic,
    Highlight,
    Customcolor,
    BooksearchS,
    BookSearchStore,
    Observables,
    ObservableBookSearch,
    Observablebooksearchlist,
    Home,
    About,
    Header,
    Course,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
  ],
  bootstrap: [App],
})
export class AppModule {}
