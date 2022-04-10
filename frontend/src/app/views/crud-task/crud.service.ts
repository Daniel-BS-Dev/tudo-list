import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { MyTask } from 'src/app/views/crud-task/models/task';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  
  private readonly baseUrl = environment["urlBackend"];
  isFalse: boolean = false;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ['msg-success']
    }) 
  }

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
