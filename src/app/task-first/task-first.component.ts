import { Component, OnInit } from '@angular/core';
import { ContainerService } from './container.service';
import { User } from './user';

const EMPTY = 'List is empty';

@Component({
  selector: 'app-task-first',
  templateUrl: './task-first.component.html',
  styleUrls: ['./task-first.component.scss'],
})
export class TaskFirstComponent implements OnInit {
  isLoading: boolean = false;
  users: User[] = [];

  constructor(private containerService: ContainerService) {}

  ngOnInit() {}

  async loadUsers() {
    this.isLoading = !this.isLoading;
    this.users = await this.containerService.getUsers();
    this.isLoading = !this.isLoading;
  }

  get emptySting(): string {
    return EMPTY;
  }
}
