import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-checkbox',
  templateUrl: './task-checkbox.component.html',
  styleUrls: ['./task-checkbox.component.scss']
})
export class TaskCheckboxComponent implements OnInit {

  @Input() taskItem?: string;
  @Input() taskFinished?: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  checkTheBox() {
    this.taskFinished = !this.taskFinished;
    // TODO SEND TO BACK END
  }

}