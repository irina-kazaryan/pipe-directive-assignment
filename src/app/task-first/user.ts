import { Status } from './status';

export interface User {
  firstName: string;
  lastName: string;
  birthDate: Date;
  status: Status;
  about: string;
}
