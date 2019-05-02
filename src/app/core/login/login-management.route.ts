import {Routes} from "@angular/router";
import {LogoutComponent} from "../logout/logout.component";
import {LoginComponent} from "./login.component";

export const LoginManagementRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];
