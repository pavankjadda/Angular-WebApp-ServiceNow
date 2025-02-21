import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "app-incident",
    templateUrl: "./incident.component.html",
    styleUrls: ["./incident.component.css"],
    imports: [RouterOutlet]
})
export class IncidentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
