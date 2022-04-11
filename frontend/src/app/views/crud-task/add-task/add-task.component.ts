import { Component, OnInit } from '@angular/core';
import { MyTask } from 'src/app/views/crud-task/models/task';
import { NavService } from 'src/app/component/nav/nav.service';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {

  addTask: boolean = true;
  emptyInput: boolean = false;
  emptyDate: boolean = false;

  task: MyTask = {
    text: '',
    title: '',
    isMark: false,
    date: '',
  };

  constructor(private service: NavService, private crudService: CrudService) {}

  ngOnInit(): void {}

  onAddTask() {
    this.addTask = this.service.onShowMenu();
  }

  newTask(): void {
    
    if (this.task.text == '') {
      this.emptyInput = true;
      return;
    }

    if (this.task.date == '') {
      this.emptyDate = true;
      return;
    }

    if (this.task.title == '') {
      this.task = { ...this.task, title: 'Sem titulo' };
    }
   

    this.crudService.newTask(this.task).subscribe(() => {
      this.crudService.showMessage("Tarefa Criada");
     setTimeout(() => {
       location.reload();
     }, 500);
    });
    
    this.cleanInput();
  
  }

  onClickDate(){
    this.emptyDate = false;
  }

  onKeyUp(){
    this.emptyInput = false;
   
  }

  cleanInput() {
    this.task.title = '';
    this.task.text = '';
    this.task.date = '';
  }


}
