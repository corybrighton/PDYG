import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MockTasks } from '../Mock/mock-tasks';
import { Task } from '../Models/task';
import { TaskList } from '../Models/task-list';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskListFilled: boolean = false;
  private taskAtHand = new BehaviorSubject<Task>(new Task("Loading service Task..."))

  constructor() {
  }

  setTaskAtHand(task: Task) { this.taskAtHand.next(task); }

  getTaskAtHand(): Observable<Task> { return this.taskAtHand; }

  getTasks(): Observable<TaskList> {
    let tasks = of(MockTasks);
    if (environment.production) {
      // TODO GET FROM SERVER TASK LIST
    } else {
      tasks = of(MockTasks);
      this.taskListFilled = true;
    }
    return tasks;
  }
}
