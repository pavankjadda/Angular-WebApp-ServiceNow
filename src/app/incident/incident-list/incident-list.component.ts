import { Component, OnInit } from "@angular/core";
import { IncidentService } from "../../services/incident.service";
import { Router } from "@angular/router";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { InputTextModule } from "primeng/inputtext";
import { SharedModule } from "primeng/api";
import { TableModule } from "primeng/table";
import { NgFor, NgIf, NgSwitch } from "@angular/common";
import { Incident } from "../../types/incident";
import { INCIDENT_API_URL, SERVER_API_URL } from "../../app.constants";

@Component({
  selector: "app-incident-list",
  templateUrl: "./incident-list.component.html",
  styleUrls: ["./incident-list.component.css"],
  standalone: true,
  imports: [
    NgxSpinnerModule,
    NgIf,
    TableModule,
    SharedModule,
    NgFor,
    NgSwitch,
    InputTextModule,
  ],
})
export class IncidentListComponent implements OnInit {
  incidents: Array<Incident>;
  cols: any[];
  incident: Incident;

  constructor(
    private incidentService: IncidentService,
    private spinner: NgxSpinnerService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getIncidents();
    this.cols = [
      { field: "number", header: "Incident Id" },
      { field: "state", header: "Incident State" },
      { field: "category", header: "Category" },
      { field: "subcategory", header: "Subcategory" },
      { field: "priority", header: "Priority" },
      { field: "assigned_to", header: "Assigned To" },
      { field: "assignment_group", header: "Assignment Group" },
      { field: "sys_created_on", header: "Created Date" },
      { field: "sys_updated_on", header: "Last Updated" },
    ];
  }

  incidentsDataAvailable(): boolean {
    return this.incidents !== undefined;
  }

  private getIncidents() {
    this.spinner.show();
    const incidentsApiUrl = SERVER_API_URL + INCIDENT_API_URL;
    this.incidentService.getIncidents(incidentsApiUrl).subscribe(
      (data) => {
        // @ts-ignore
        this.incidents = data.result;
        this.spinner.hide();
      },
      (error1) => {
        console.log("Failed to load incidents");
        this.spinner.hide();
      },
    );
  }
}
