import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {categoryManagementRoute} from "./category/category.route";
import {orderDetailManagementRoute} from "./order-detail/order-detail.route";
import {productManagementRoute} from "./product/product.route";


@NgModule(
  {
  imports: [
    RouterModule.forChild(categoryManagementRoute),
    RouterModule.forChild(orderDetailManagementRoute),
    RouterModule.forChild( productManagementRoute ),
  ],
  exports: [
    RouterModule
  ]
} )
export class OrderRoutingModule
{
}
