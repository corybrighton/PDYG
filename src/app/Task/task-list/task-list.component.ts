import { Component, OnInit } from '@angular/core';
import { MockTasks } from 'src/app/Mock/mock-tasks';
import { Task } from 'src/app/Models/task'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  mockcompletedList = MockTasks.completedList;
  mockList = MockTasks.list;
  mockDeletedList = MockTasks.deletedList;

  constructor() { }

  ngOnInit(): void { }

  checkTheBox(task: Task) { MockTasks.completeTask(task); }

  uncheckTheBox(task: Task) { MockTasks.uncompleteTask(task); }

  getTimeLeft(task: Task): String {
    return task.timeLeft()
  }

}
