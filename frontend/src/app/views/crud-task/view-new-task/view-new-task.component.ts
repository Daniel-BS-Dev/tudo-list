import { CrudService } from '../crud.service';
import { Component, OnInit, Output } from '@angular/core';
import { MyTask } from 'src/app/views/crud-task/models/task';

@Component({
  selector: 'app-view-new-task',
  templateUrl: './view-new-task.component.html',
  styleUrls: ['./view-new-task.component.css'],
})
export class ViewNewTaskComponent implements OnInit {
  task: MyTask;
  listTask: MyTask[] = [];
  

  constructor(private service: CrudService) {
    this.task = {
      id: 0,
      title: 'Sem titulo',
      text: '',
      isMark: false,
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
      //this.service.showMessage("Produto Deletado");

      setTimeout(() => {
        location.reload();
      }, 500);
    });
  }

  onIsMark(id: number) {
  this.listTask.forEach(x => {
    if(id == x.id){
      x.isMark = !x.isMark;
    }
  })
  }
}
