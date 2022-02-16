import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/task';

@Component({
  selector: 'app-planning-detial',
  templateUrl: './planning-detial.component.html',
  styleUrls: ['./planning-detial.component.scss']
})
export class PlanningDetialComponent implements OnInit {

  @Input()
  taskAtHand!: Task;

  urgency = 0;
  priority = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.graphScaling();
  }

  ngOnChanges() {
    this.graphScaling();
  }

  graphScaling() {
    const offset = 25;
    const axisLength = 200 - (2 * offset);
    this.urgency = offset + this.taskAtHand.urgency * (axisLength / 10);
    this.priority = (axisLength + offset) - (this.taskAtHand.priority * (axisLength / 10));
  }
}
