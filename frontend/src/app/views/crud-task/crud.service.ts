import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyTask } from 'src/app/views/crud-task/models/task';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  
  baseUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  read(): Observable<MyTask[]> {
    return this.http.get<MyTask[]>(this.baseUrl);
  }

  readById(id: string): Observable<MyTask>{
    return this.http.get<MyTask>(`${this.baseUrl}/${id}`)

  }

  newTask(newTask: MyTask): Observable<MyTask> {
    return this.http.post<MyTask>(this.baseUrl, newTask);
  }

  updateTask(task: MyTask): Observable<MyTask>{
    const url = `${this.baseUrl}/${task.id}`
    return this.http.put<MyTask>(url, task)
  }

  delete(id: number): Observable<Task> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Task>(url);
  }
}
