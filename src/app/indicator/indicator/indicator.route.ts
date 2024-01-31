import { Routes } from "@angular/router";
import { UserAuthGuard } from "../../core/guards/user-auth.guard";
import { IndicatorComponent } from "./indicator.component";
import { IndicatorHomeComponent } from "./indicator-home/indicator-home.component";
import { IndicatorViewComponent } from "./indicator-view/indicator-view.component";
import { IndicatorListComponent } from "./indicator-list/indicator-list.component";

export const indicatorManagementRoute: Routes = [
  {
    path: "indicator",
    component: IndicatorComponent,
    canActivate: [UserAuthGuard],
    children: [
      {
        path: "list",
        component: IndicatorListComponent,
      },
      {
        path: ":id",
        component: IndicatorViewComponent,
      },
      {
        path: "",
        component: IndicatorHomeComponent,
      },
    ],
  },
];
