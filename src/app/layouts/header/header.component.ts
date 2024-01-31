import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../core/auth/auth.service";
import { NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  standalone: true,
  imports: [RouterLink, NgIf],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  isLoggedIn() {
    return AuthService.isUserLoggedIn();
  }
}
