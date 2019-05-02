import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {HelpersRoutingModule} from "./helpers-routing.module";
import {Http403ErrorComponent} from "./http403-error/http403-error.component";

@NgModule( {
             declarations: [Http403ErrorComponent],
  imports: [
    CommonModule,
    HelpersRoutingModule
  ]
} )
export class HelpersModule
{
}
