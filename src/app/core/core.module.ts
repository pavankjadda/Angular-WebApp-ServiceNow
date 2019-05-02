import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxSpinnerModule} from "ngx-spinner";
import {CoreRoutingModule} from "./core-routing.module";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {PrivilegeComponent} from "./privilege/privilege.component";
import {RoleComponent} from "./role/role.component";
import {UserComponent} from "./user/user.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    CoreRoutingModule
  ],
  declarations: [
    LoginComponent,
    UserComponent,
    RoleComponent,
    PrivilegeComponent,
    LogoutComponent]
})


export class CoreModule {}
