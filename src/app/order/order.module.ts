import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxSpinnerModule} from "ngx-spinner";
import {CategoryDeleteComponent} from "./category/category-delete/category-delete.component";
import {CategoryEditComponent} from "./category/category-edit/category-edit.component";
import {CategoryHomeComponent} from "./category/category-home/category-home.component";
import {CategoryListComponent} from "./category/category-list/category-list.component";
import {CategoryNewComponent} from "./category/category-new/category-new.component";
import {CategoryViewComponent} from "./category/category-view/category-view.component";
import {CategoryComponent} from "./category/category.component";
import {OrderDetailDeleteComponent} from "./order-detail/order-detail-delete/order-detail-delete.component";
import {OrderDetailEditComponent} from "./order-detail/order-detail-edit/order-detail-edit.component";
import {OrderDetailHomeComponent} from "./order-detail/order-detail-home/order-detail-home.component";
import {OrderDetailListComponent} from "./order-detail/order-detail-list/order-detail-list.component";
import {OrderDetailNewComponent} from "./order-detail/order-detail-new/order-detail-new.component";
import {OrderDetailUpdateComponent} from "./order-detail/order-detail-update/order-detail-update.component";
import {OrderDetailViewComponent} from "./order-detail/order-detail-view/order-detail-view.component";
import {OrderDetailComponent} from "./order-detail/order-detail.component";
import {OrderRoutingModule} from "./order-routing.module";
import {ProductHomeComponent} from "./product/product-home/product-home.component";
import {ProductComponent} from "./product/product.component";

@NgModule( {
  declarations: [
    CategoryComponent,
    ProductComponent,
    CategoryListComponent,
    CategoryViewComponent,
    CategoryNewComponent,
    CategoryHomeComponent,
    OrderDetailComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    OrderDetailHomeComponent,
    OrderDetailListComponent,
    OrderDetailNewComponent,
    OrderDetailDeleteComponent,
    OrderDetailUpdateComponent,
    OrderDetailViewComponent,
    OrderDetailEditComponent,
    ProductHomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    OrderRoutingModule
  ]
} )


export class OrderModule
{
}
