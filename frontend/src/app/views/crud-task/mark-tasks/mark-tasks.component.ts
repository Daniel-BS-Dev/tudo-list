import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { MyTask } from '../models/task';
import { MarkService } from './mark.service';

@Component({
  selector: 'app-mark-tasks',
  templateUrl: './mark-tasks.component.html',
  styleUrls: ['./mark-tasks.component.scss'],
})
export class MarkTasksComponent implements OnInit {

  task: MyTask;
  listTask: MyTask[] = [];
  

  constructor(private service: CrudService, private serviceMarkTask: MarkService) {
   this.task = {
      id: 0,
      title: 'Sem título',
      text: '',
      isMark: false,
      date: '',
    };
  }

  ngOnInit(): void {
    this.service.read().subscribe((task: MyTask[]) => {
      this.listTask = task;
    });
    
  }

  onIsMark(mark: boolean, id:number){
    this.serviceMarkTask.onIsMark(mark, id, this.listTask);
    this.service.showMessage("Tarefa Desmarcada")
  }
}
