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
  taskListName: string[] = [];
  taskPlanned: boolean[] = [];
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
        this.taskListName = [...taskList.list.keys()];
        taskList.list.forEach(element => {
          this.taskPlanned.push(false);
        });
        this.taskLoaded = Promise.resolve(true);
      });
  }

  goToNextTask() {
    let taskIndex = 0;
    if (this.taskLoaded) {
      taskIndex =
        this.taskListName.indexOf(this.taskAtHand.taskItem) + 1;
      if (taskIndex >= this.taskListName.length || taskIndex == -1)
        taskIndex = 0;

      this.taskService.setTaskAtHand(this.getTask(taskIndex));
      console.log(this.taskAtHand.taskItem)
    }
  }

  private getTask(n: number): Task {
    let taskName = this.taskListName[n];
    let task: Task = new Task("Loading Task Next...");
    return this.taskList.list.get(taskName) || task;
  }

  goBackATask() {
    // TODO GO BACK A TASK
    console.log("Go Back")
  }
}
