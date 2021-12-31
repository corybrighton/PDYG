import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockTasks } from '../Mock/mock-tasks';
import { TaskList } from '../Models/task-list';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<TaskList> {
    const tasks = of(MockTasks);
    return tasks;
  }
}
