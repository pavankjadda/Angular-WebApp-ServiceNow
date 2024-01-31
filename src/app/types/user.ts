import { Role } from "./role";

export class User {
  displayName: string;
  sysId: string;
  username: string;
  roles: Array<Role>;
}
