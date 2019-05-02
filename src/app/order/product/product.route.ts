import {Routes} from "@angular/router";
import {UserAuthGuard} from "../../guards/user-auth.guard";
import {ProductHomeComponent} from "./product-home/product-home.component";

export const productManagementRoute: Routes=[
  {
    path: 'product',
    component: ProductHomeComponent,
    canActivate: [UserAuthGuard],
    children: [
      {
        path: 'list',
        component: ProductHomeComponent
      },
      {
        path: 'new',
        component: ProductHomeComponent
      },
      {
        path: ':id',
        component: ProductHomeComponent,
        children: [
          {
            path: 'edit',
            component: ProductHomeComponent
          },
          {
            path: 'delete',
            component: ProductHomeComponent
          }
        ]
      },
      {
        path: '',
        component: ProductHomeComponent
      }
    ]
  }];

