import {Address} from '../../../api/address/model/address';

export class UserProfile
{
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: Address;
  user: string;
}
