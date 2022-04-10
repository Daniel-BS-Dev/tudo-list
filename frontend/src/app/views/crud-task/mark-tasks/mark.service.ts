import { MyTask } from './../models/task';
import { Injectable } from '@angular/core';
import { CrudService } from '../crud.service';

@Injectable({
  providedIn: 'root'
})
export class MarkService {
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


  onIsMark(isMark: boolean, id: number, listTask: MyTask[]) {
    listTask.forEach((x) => {
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
         
        });
      }
    });
  }
}
