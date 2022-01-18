import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-planning-detial',
  templateUrl: './planning-detial.component.html',
  styleUrls: ['./planning-detial.component.scss']
})
export class PlanningDetialComponent implements OnInit {

  taskAtHand: Task;
  urgency = 0;
  priority = 0;

  constructor(private taskService: TaskService) {
    this.taskAtHand = new Task("Loading Task...");
  }

  ngOnInit(): void {
    this.taskService.getTaskAtHand().subscribe(
      task => this.taskAtHand = task
    )
    this.graphScaling();
  }

  graphScaling() {
    const offset = 25;
    const axisLength = 200 - (2 * offset);
    this.urgency = offset + this.taskAtHand.urgency * (axisLength / 10);
    this.priority = (axisLength + offset) - (this.taskAtHand.priority * (axisLength / 10));
  }
}
