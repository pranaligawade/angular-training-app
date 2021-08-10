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
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HomeComponent } from './component/home/home.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { DbatuComponent } from './component/dbatu/dbatu.component';
import { DbatuAboutComponent } from './component/dbatu-about/dbatu-about.component';
import { DbatuContactComponent } from './component/dbatu-contact/dbatu-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { FormExampleComponent } from './component/form-example/form-example.component';
import { AngularMaterialDemoComponent } from './component/angular-material-demo/angular-material-demo.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { FormTableComponent } from './component/form-table/form-table.component';
import { ServiceExampleComponent } from './component/service-example/service-example.component';
import { LifeCycleComponent } from './component/life-cycle/life-cycle.component';
import { DialogExampleComponent } from './component/dialog-example/dialog-example.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogContentComponent } from './component/dialog-content/dialog-content.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
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
      FormExampleComponent,
      AngularMaterialDemoComponent,
      FormTableComponent,
      ServiceExampleComponent,
      LifeCycleComponent,
      DialogExampleComponent,
      DialogContentComponent,
      SideBarComponent,

    // MatCardModule



  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   FormsModule,
   BrowserAnimationsModule,
   MatCardModule,
   MatExpansionModule,
   ReactiveFormsModule,
   MatButtonModule,
   MatInputModule, // input fields
   MatSelectModule, //select box
   MatCardModule,
   MatIconModule,
   MatExpansionModule,
   MatTableModule,
   BrowserAnimationsModule,
   MatDialogModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatSidenavModule,
   MatToolbarModule
  ],
  exports: [  MatNativeDateModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
