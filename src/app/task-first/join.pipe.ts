import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';

@Pipe({
  name: 'join',
})
export class JoinPipe implements PipeTransform {
  transform(users: User[]): string {
    return `Users: ${users.map((u) => u.firstName).join(', ')}`;
  }
}
