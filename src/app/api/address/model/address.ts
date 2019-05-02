import {AddressType} from "../../address-type/model/address-type";
import {City} from "../../city/model/city";
import {Country} from "../../country/model/country";
import {State} from "../../state/model/state";

export class Address
{
  id: number;
  streetName: string;
  apartment: string;
  city: City;
  state: State;
  country: Country;
  zipCode: string;
  addressType: AddressType;
}

