import { Routes } from "@angular/router";
import { HomeComponent } from "./layouts/home/home.component";
import { PageNotFoundComponent } from "./layouts/pagenotfound/pagenotfound.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "**", component: PageNotFoundComponent },
];
