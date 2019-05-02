import {Role} from '../../role/model/role';

export class User
{
  displayName: string;
  sysId: string;
  username: string;
  roles: Array<Role>;
}
