import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AccountModule} from "./account/account.module";
import {AdminModule} from "./admin/admin.module";
import {ApiModule} from "./api/api.module";
import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from "./app.component";
import {CoreModule} from "./core/core.module";
import {httpInterceptorProviders} from "./core/intercepters/httpInterceptorProviders";
import {HelpersModule} from "./helpers/helpers.module";
import {HomeComponent} from "./layouts/home/home.component";
import {LayoutModule} from "./layouts/layout.module";
import {PageNotFoundComponent} from "./layouts/pagenotfound/pagenotfound.component";
import {OrderModule} from "./order/order.module";


@NgModule( {
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AdminModule,
    LayoutModule,
    CoreModule,
    ApiModule,
    AccountModule,
    OrderModule,
    HelpersModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
} )

export class AppModule {
}
