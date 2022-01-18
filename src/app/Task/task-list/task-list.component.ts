import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockTasks } from 'src/app/Mock/mock-tasks';
import { Task } from 'src/app/Models/task'
import { environment } from '../../../environments/environment';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  mockcompletedList = (environment.production) ?
    undefined : MockTasks.completedList;
  mockList = (environment.production) ?
    undefined : MockTasks.list;
  mockDeletedList = (environment.production) ?
    undefined : MockTasks.deletedList;

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void { }

  selectTask(task: Task) {
    this.taskService.setTaskAtHand(task);
    this.router.navigate(["../task-planning"], { relativeTo: this.route });
  }

  checkTheBox(task: Task) { MockTasks.completeTask(task); }

  uncheckTheBox(task: string) { MockTasks.uncompleteTask(task); }

  getTimeLeft(task: Task): String {
    return task.timeLeft()
  }

}
