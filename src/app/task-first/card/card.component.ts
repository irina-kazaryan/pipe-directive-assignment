import { Component, OnInit, Input } from '@angular/core';
import { Status } from '../status';
import { User } from '../user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() user: User;

  constructor() {}

  ngOnInit() {}

  getStyles(): string {
    switch (this.user.status) {
      case Status.Deleted:
        return 'red';
      case Status.Inactive:
        return 'blue';
      case Status.Active:
        return 'green';
    }
  }
}
