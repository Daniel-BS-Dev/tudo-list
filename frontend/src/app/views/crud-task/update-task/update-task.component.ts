import { MyTask } from './../models/task';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
})
export class UpdateTaskComponent implements OnInit {
  task: MyTask = {
    text: '',
    isMark: false,
    date: '',
  };

  constructor(
    private service: CrudService,
    private router: Router,
    private id: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const takeId = this.id.snapshot.paramMap.get('id');
    this.service.readById(String(takeId)).subscribe((task) => {
      this.task = task;
    });
  }

  updateTask(): void {
    this.service.updateTask(this.task).subscribe(() => {
      this.cancel();
    });
  }

  cancel(): void {
    this.router.navigate(['task/create']);
  }
}
