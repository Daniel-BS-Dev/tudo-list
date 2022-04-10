import { CrudService } from '../crud.service';
import { Component, OnInit, Output } from '@angular/core';
import { MyTask } from 'src/app/views/crud-task/models/task';
import { MarkService } from '../mark-tasks/mark.service';

@Component({
  selector: 'app-view-new-task',
  templateUrl: './view-new-task.component.html',
  styleUrls: ['./view-new-task.component.scss'],
})
export class ViewNewTaskComponent implements OnInit {
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

  deleteTask(id: number): void {
    const deleteProduct = window.confirm(`Deletar Produto de id ${id}`);

    if (!deleteProduct) {
      return;
    }
    this.service.delete((this.task.id = id)).subscribe(() => {
      this.service.showMessage("Tarefa Deletada");
      setTimeout(() => {
        location.reload();
      }, 1000);
    });
  }

  onIsMark(isMark: boolean, id: number) {
    this.serviceMarkTask.onIsMark(isMark, id, this.listTask);
  }
}
