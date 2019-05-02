import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AccountRoutingModule} from "./account-routing.module";

import {ActivateComponent} from "./activate/activate.component";
import {PasswordResetComponent} from "./password-reset/password-reset.component";
import {PasswordComponent} from "./password/password.component";
import {RegisterComponent} from "./register/register.component";
import {SettingsComponent} from "./settings/settings.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";


@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AccountRoutingModule],
  declarations: [
    ActivateComponent,
    RegisterComponent,
    PasswordComponent,
    SettingsComponent,
    PasswordResetComponent,
    UserProfileComponent
  ]
})
export class AccountModule { }

