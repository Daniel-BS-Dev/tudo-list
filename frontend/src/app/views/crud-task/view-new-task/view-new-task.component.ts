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
      //this.service.showMessage("Produto Deletado");

      setTimeout(() => {
        location.reload();
      }, 500);
    });
  }

  onIsMark(isMark: boolean, id: number) {
    this.listTask.forEach((x) => {
      if (id == x.id) {
        let mark = (x.isMark = !isMark);
        let text = x.text;
        let title = x.title;
        let date = x.date;

        this.task = {
          id: id,
          title: title,
          text: text,
          isMark: mark,
          date: date,
        };
        this.service.updateTask(this.task).subscribe(() => {
          console.log(this.task, id, mark);
        });
      }
    });
  }
}
