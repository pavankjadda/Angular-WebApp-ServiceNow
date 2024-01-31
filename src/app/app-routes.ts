import { Routes } from "@angular/router";
import { HomeComponent } from "./layouts/home/home.component";
import { PageNotFoundComponent } from "./layouts/pagenotfound/pagenotfound.component";
import { LoginComponent } from "./core/login/login.component";
import { LogoutComponent } from "./core/logout/logout.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "logout",
    component: LogoutComponent,
  },
  { path: "**", component: PageNotFoundComponent },
];
