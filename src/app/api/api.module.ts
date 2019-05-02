import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AddressTypeComponent} from "./address-type/address-type.component";
import {AddressComponent} from "./address/address.component";

import {CityComponent} from "./city/city.component";
import {CountryComponent} from "./country/country.component";
import {RegionComponent} from "./region/region.component";
import {StateComponent} from "./state/state.component";


@NgModule({
  imports: [RouterModule,CommonModule],
  declarations: [
    CityComponent,
    CountryComponent,
    RegionComponent,
    StateComponent,
    AddressComponent,
    AddressTypeComponent
  ]
})
export class ApiModule { }

