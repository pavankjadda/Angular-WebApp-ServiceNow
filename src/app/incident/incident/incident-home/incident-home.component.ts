import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-incident-home",
  templateUrl: "./incident-home.component.html",
  styleUrls: ["./incident-home.component.css"],
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class IncidentHomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
