import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { indicatorManagementRoute } from "./indicator/indicator.route";

@NgModule({
  imports: [RouterModule.forChild(indicatorManagementRoute)],
  exports: [RouterModule],
})
export class IndicatorRoutingModule {}
