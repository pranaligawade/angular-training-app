import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import {HelloWorldComponent  } from './component/hello-world/hello-world.component';
import { TodoComponent } from './component/todo/todo.component';
import {CounterComponent } from './component/counter/counter.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import {CalculatorComponent } from './component/calculator/calculator.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HomeComponent } from './component/home/home.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { DbatuComponent } from './component/dbatu/dbatu.component';
import { DbatuAboutComponent } from './component/dbatu-about/dbatu-about.component';
import { DbatuContactComponent } from './component/dbatu-contact/dbatu-contact.component';
import { FormTableComponent } from './component/form-table/form-table.component';
import { AngularMaterialDemoComponent } from './component/angular-material-demo/angular-material-demo.component';
import { DialogExampleComponent } from './component/dialog-example/dialog-example.component';
import { LifeCycleComponent } from './component/life-cycle/life-cycle.component';
import { FormExampleComponent } from './component/form-example/form-example.component';
const routes: Routes = [
 {
    path: '',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path:'form-example',
    component: FormExampleComponent

      },
    {
    path:'life-cycle',
    component:LifeCycleComponent

      },
  {
    path:'dialog-example',
    component:DialogExampleComponent

      },
  {
path:'form-table',
component:FormTableComponent

  },
  {
    path:'angular-material-demo',
    component:AngularMaterialDemoComponent

      },
  {
    path:'dbatu',
    component: DbatuComponent
  },{
path:'dbatu-about',
component:DbatuAboutComponent
  },
  {
path:'dbatu-contact',
component:DbatuContactComponent
  },
  {
    path:'hello-world',
    component:HelloWorldComponent
  },
  {
    path:'todo',
    component : TodoComponent
 },
  {
    path: 'calculator',
   component:  CalculatorComponent
  },
  {
    path:'counter',
    component :CounterComponent
 },
  {
    path:'user-details',
    component : UserDetailsComponent
 },



  {
    path: 'parent',
    component:ParentComponent ,

children:[
    {
      path:'child',
      component:ChildComponent
    }
  ]
},
  {
path:'**',
component : PageNotFoundComponent

  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
