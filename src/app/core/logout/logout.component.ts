import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  standalone: true,
})
export class LogoutComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}
