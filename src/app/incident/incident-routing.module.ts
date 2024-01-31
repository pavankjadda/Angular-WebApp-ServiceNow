import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { incidentManagementRoute } from "./incident/incident.route";

@NgModule({
  imports: [RouterModule.forChild(incidentManagementRoute)],
  exports: [RouterModule],
})
export class IncidentRoutingModule {}
