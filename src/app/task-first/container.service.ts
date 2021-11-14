import { Injectable } from '@angular/core';
import { Status } from './status';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class ContainerService {
  constructor() {}

  getUsers(): Promise<User[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const users: User[] = [
          {
            firstName: 'Harry',
            lastName: 'Potter',
            birthDate: new Date('2010-07-31'),
            status: Status.Active,
            about:
              'Harry is strongly guided by his own conscience, and has a keen feeling of what is right and wrong.',
          },
          {
            firstName: 'Ron',
            lastName: 'Weasley',
            birthDate: new Date('2011-03-01'),
            status: Status.Inactive,
            about:
              'Ron is known for his humor, loyalty, readiness to defend his friends and his love for sweets.',
          },
          {
            firstName: 'Hermione',
            lastName: 'Granger',
            birthDate: new Date('2012-09-19'),
            status: Status.Deleted,
            about:
              'Hermione is levelheaded, book-smart, and always very logical.',
          },
        ];
        resolve(users);
      }, 2000);
    });
  }
}
