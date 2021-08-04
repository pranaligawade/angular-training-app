import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import {HelloWorldComponent  } from './component/hello-world/hello-world.component';
import { TodoComponent } from './component/todo/todo.component';
import {CounterComponent } from './component/counter/counter.component';
import {CalculatorComponent } from './component/calculator/calculator.component';
import { AddTodoComponent } from './component/todo/add-todo/add-todo.component';
import { TodoListComponent } from './component/todo/todo-list/todo-list.component';
import { FormsModule, NgModel } from '@angular/forms';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HomeComponent } from './component/home/home.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { DbatuComponent } from './component/dbatu/dbatu.component';
import { DbatuAboutComponent } from './component/dbatu-about/dbatu-about.component';
import { DbatuContactComponent } from './component/dbatu-contact/dbatu-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    HelloWorldComponent ,
    TodoComponent,
    CounterComponent,
    CalculatorComponent,
    AddTodoComponent,
    TodoListComponent,
    PageNotFoundComponent,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    DbatuComponent,
    DbatuAboutComponent,
    DbatuContactComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule

  ],

  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
