import { Component, OnInit } from '@angular/core';

const DIMENSION: number = 5;

@Component({
  selector: 'app-task-second',
  templateUrl: './task-second.component.html',
  styleUrls: ['./task-second.component.scss'],
})
export class TaskSecondComponent implements OnInit {
  quantity: number[] = Array(DIMENSION);

  constructor() {}

  ngOnInit() {}

  get dimension(): number {
    return DIMENSION;
  }
}
