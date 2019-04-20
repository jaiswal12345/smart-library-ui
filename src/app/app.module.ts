import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BookComponent } from "src/app/book/book.component";
import { BookListComponent } from "src/app/book-list/book-list.component";
import { BookService } from "src/app/shared/book.service";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserService } from "src/app/shared/user.service";
import { RouterModule } from "@angular/router";
//import { Interceptor } from "src/app/shared/interceptor";
const ROUTES = [
  { path: '', component: BookComponent },
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BookComponent },
  { path: '**', component: BookComponent },
];
@NgModule({
  declarations: [
    AppComponent, BookComponent, BookListComponent, LoginComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [BookService, UserService,
   // { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
