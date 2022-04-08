import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { NavComponent } from './component/nav/nav.component';
import { AddTaskComponent } from './views/crud-task/add-task/add-task.component';
import { MarkTasksComponent } from './views/crud-task/mark-tasks/mark-tasks.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LOCALE_ID, NgModule } from '@angular/core';
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ViewNewTaskComponent } from './views/crud-task/view-new-task/view-new-task.component';
import { UpdateTaskComponent } from './views/crud-task/update-task/update-task.component';
import { ViewAddTaskComponent } from './views/crud-task/add-task/view-add-task/view-add-task.component';
import { ViewAllMarkedTasksComponent } from './views/crud-task/mark-tasks/view-all-marked-tasks/view-all-marked-tasks.component';
registerLocaleData(localePT);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    AddTaskComponent,
    MarkTasksComponent,
    ViewNewTaskComponent,
    UpdateTaskComponent,
    ViewAddTaskComponent,
    ViewAllMarkedTasksComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
