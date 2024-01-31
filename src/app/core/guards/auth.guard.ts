import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { Role } from "../../types/role";

@Injectable({
  providedIn: "root",
})
export class AuthGuard {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    return this.canActivate(route, state);
  }

  hasAdminRole() {
    let userRoles: Array<Role> = JSON.parse(
      localStorage.getItem("currentUser"),
    ).roles;
    for (let role of userRoles) {
      if (role.name === "ROLE_ADMIN") {
        return true;
      }
    }
    return false;
  }

  hasItilRole() {
    let userRoles: Array<Role> = JSON.parse(
      localStorage.getItem("currentUser"),
    ).roles;
    for (let role of userRoles) {
      if (role.name === "itil") {
        return true;
      }
    }
    return false;
  }
  private checkLogin(url: string): boolean {
    if (AuthService.isUserLoggedIn() && this.hasItilRole()) {
      return true;
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(["/403"]);
    return false;
  }
}
