import { Component, OnInit } from '@angular/core';
import { TaskList } from 'src/app/Models/task-list';
import { TaskService } from '../task.service';
import { Task } from 'src/app/Models/task';

@Component({
  selector: 'app-task-planning',
  templateUrl: './task-planning.component.html',
  styleUrls: ['./task-planning.component.scss']
})
export class TaskPlanningComponent implements OnInit {

  taskList: TaskList | undefined;
  taskAtHand: Task;
  taskLoaded: Promise<boolean> | undefined;
  priority = 0;
  urgency = 0;

  constructor(private taskService: TaskService) {
    this.taskAtHand = new Task("Loading Task");
  }


  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks()
      .subscribe(taskList => {
        this.taskList = taskList;
        this.taskAtHand = taskList.getTaskAtHand();
        this.graphScaling();
        this.taskLoaded = Promise.resolve(true);
      });
  }

  graphScaling() {
    const offset = 25;
    const axisLength = 200 - (2 * offset);
    this.urgency = offset + this.taskAtHand.urgency * (axisLength / 10);
    this.priority = (axisLength + offset) - (this.taskAtHand.priority * (axisLength / 10));
  }
}
