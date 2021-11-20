import { Component, OnInit } from '@angular/core';
import { MockTasks } from 'src/app/Mock/mock-tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  mockTaskList = MockTasks;
  constructor() { }

  ngOnInit(): void {
  }

}
