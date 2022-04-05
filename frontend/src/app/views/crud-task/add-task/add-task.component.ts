import { Component, OnInit } from '@angular/core';
import { MyTask } from 'src/app/views/crud-task/models/task';
import { NavService } from 'src/app/component/nav/nav.service';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addTask: boolean = true;

  task: MyTask = {
   text: '',
   isMark: false,
   date: '',
  }

  constructor(private service: NavService, private crudService: CrudService) {
     
   }

  ngOnInit(): void {
    
  }

  onAddTask(){
    this.addTask = this.service.onShowMenu();
  }

  newTask(): void {
    this.crudService.newTask(this.task).subscribe(() => {
      window.location.reload();
    })
   this.cleanInput();
  }

  cleanInput(){
    this.task.text= '';
    this.task.date= '';
  }
}
