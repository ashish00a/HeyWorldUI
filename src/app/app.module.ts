import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Route } from '@angular/compiler/src/core';
import { RouterModule } from '@angular/router'
import { zip } from 'rxjs';
import { ConsultantComponent } from './consultant/consultant.component';


/*const routes : Route = [
  {
    path : '',
  Component : NavBarComponent
  },
  {
    path : 'project',
  Component : ProjectComponent
  }
  
];*/


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    NavBarComponent,
    ConsultantComponent,
  
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: NavBarComponent},
      {path: 'project', component: ProjectComponent},
      {path: 'consultant', component: ConsultantComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
