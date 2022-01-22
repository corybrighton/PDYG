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

  taskList: TaskList;
  taskLoaded: Promise<boolean> | undefined;
  taskListNames: string[] = [];
  taskPlanneds: boolean[] = [];
  taskAtHand: Task;

  constructor(private taskService: TaskService) {
    this.taskList = new TaskList();
    this.taskAtHand = new Task("Loading Plan Task...")
  }

  ngOnInit(): void {
    this.getTasks();
    this.taskService.getTaskAtHand().subscribe(
      task => this.taskAtHand = task
    )
  }

  getTasks() {
    this.taskService.getTasks()
      .subscribe(taskList => {
        this.taskList = taskList;
        this.taskListNames = [...taskList.list.keys()];
        taskList.list.forEach(element => {
          this.taskPlanneds.push(false);
        });
        this.taskLoaded = Promise.resolve(true);
      });
  }

  goToNextTask() {
    let taskIndex = 0;
    if (this.taskLoaded) {
      taskIndex =
        this.taskListNames.indexOf(this.taskAtHand.taskItem) + 1;
      if (taskIndex >= this.taskListNames.length || taskIndex == -1)
        taskIndex = 0;

      this.taskService.setTaskAtHand(this.getTask(taskIndex));
    }
  }

  private getTask(n: number): Task {
    let taskName = this.taskListNames[n];
    let task: Task = new Task("Loading Task Next...");
    return this.taskList.list.get(taskName) || task;
  }

  goBackATask() {
    console.log("go back")
    let taskIndex = 0;
    if (this.taskLoaded) {
      taskIndex = this.taskListNames.indexOf(this.taskAtHand.taskItem) - 1;
      if (taskIndex < 0)
        taskIndex = this.taskListNames.length - 1;
      this.taskService.setTaskAtHand(this.getTask(taskIndex));
    }
  }
}
