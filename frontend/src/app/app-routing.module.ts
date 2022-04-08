import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateTaskComponent } from './views/crud-task/update-task/update-task.component';
import { HomeComponent } from './views/home/home.component';
import { ViewAllMarkedTasksComponent } from './views/crud-task/mark-tasks/view-all-marked-tasks/view-all-marked-tasks.component';
import { ViewAddTaskComponent } from './views/crud-task/add-task/view-add-task/view-add-task.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},
{
  path: "markedTask",
  component: ViewAllMarkedTasksComponent
},
{
  path: "task/create",
  component: ViewAddTaskComponent
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