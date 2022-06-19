import { TaskService } from './../task.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/Models/task';
import { faSquareCheck, faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-planning-detial',
  templateUrl: './planning-detial.component.html',
  styleUrls: ['./planning-detial.component.scss']
})
export class PlanningDetialComponent implements OnInit {

  @Input()
  taskAtHand!: Task;
  
  urgency: number = 0;
  priority: number = 0;
  isEditing: boolean = false;
  faSquareCheck = faSquareCheck;
  faSquare = faSquare;
  faSquarePen = faSquarePen;

  constructor(private route: Router, private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTaskAtHand().subscribe(t => {this.taskAtHand = t});
    if (this.taskAtHand.taskItem !== this.taskService.TASKLOADSERVICE)
      this.graphScaling();
    else
      this.route.navigateByUrl("/task-list");
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

  checkTheBox() {
    this.taskAtHand.finished = !this.taskAtHand.finished;
    // TODO put on finished list
    // TODO make a new one when repeated
    // TODO SEND TO BACK END
  }
}
