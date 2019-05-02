import {Role} from '../../role/model/role';

export class User
{
  id: number;
  username: string;
  roles: Role;
  firstName: string;
  lastName: string;
  token: string;
}
