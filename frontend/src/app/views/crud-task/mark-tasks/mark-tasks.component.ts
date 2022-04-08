import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { MyTask } from '../models/task';

@Component({
  selector: 'app-mark-tasks',
  templateUrl: './mark-tasks.component.html',
  styleUrls: ['./mark-tasks.component.css'],
})
export class MarkTasksComponent implements OnInit {
  task: MyTask;
  listTask: MyTask[] = [];

  constructor(private service: CrudService) {
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
}
