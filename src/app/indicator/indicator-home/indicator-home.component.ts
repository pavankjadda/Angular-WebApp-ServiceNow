import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-indicator-home",
  templateUrl: "./indicator-home.component.html",
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class IndicatorHomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
