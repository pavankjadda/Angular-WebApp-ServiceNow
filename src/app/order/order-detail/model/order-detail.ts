import {UserProfile} from "../../../account/user-profile/model/user-profile";
import {Address} from "../../../api/address/model/address";
import {Product} from "../../product/model/product";
import {OrderStatus} from "./order-status";

export class OrderDetail
{
  id: number;
  orderStatus: OrderStatus;
  purchasedBy: UserProfile;
  shippingAddress: Address;
  product: Product;
  orderCreatedDateTime: string;
}
