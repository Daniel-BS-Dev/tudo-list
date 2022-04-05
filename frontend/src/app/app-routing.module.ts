import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './views/crud-task/add-task/add-task.component';
import { MarkTasksComponent } from './views/crud-task/mark-tasks/mark-tasks.component';
import { UpdateTaskComponent } from './views/crud-task/update-task/update-task.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},
{
  path: "markTask",
  component: MarkTasksComponent
},
{
  path: "task/create",
  component: AddTaskComponent
},
{
  path: "task/update/:id",
  component: UpdateTaskComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }