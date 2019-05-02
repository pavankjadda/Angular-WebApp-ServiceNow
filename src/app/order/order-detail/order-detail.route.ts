import {Routes} from "@angular/router";
import {UserAuthGuard} from "../../guards/user-auth.guard";
import {OrderDetailDeleteComponent} from "./order-detail-delete/order-detail-delete.component";
import {OrderDetailEditComponent} from "./order-detail-edit/order-detail-edit.component";
import {OrderDetailHomeComponent} from "./order-detail-home/order-detail-home.component";
import {OrderDetailListComponent} from "./order-detail-list/order-detail-list.component";
import {OrderDetailNewComponent} from "./order-detail-new/order-detail-new.component";
import {OrderDetailViewComponent} from "./order-detail-view/order-detail-view.component";
import {OrderDetailComponent} from "./order-detail.component";

export const orderDetailManagementRoute: Routes=[
  {
    path: 'order',
    component: OrderDetailComponent,
    canActivate: [UserAuthGuard],
    children: [
      {
        path: 'list',
        component: OrderDetailListComponent
      },
      {
        path: 'new',
        component: OrderDetailNewComponent
      },
      {
        path: ':id',
        component: OrderDetailViewComponent,
        children: [
          {
            path: 'edit',
            component: OrderDetailEditComponent
          },
          {
            path: 'delete',
            component: OrderDetailDeleteComponent
          }
        ]
      },
      {
        path: '',
        component: OrderDetailHomeComponent
      }
    ]
  }];

