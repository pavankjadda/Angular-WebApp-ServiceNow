import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ActivateComponent} from "./activate/activate.component";
import {PasswordResetComponent} from "./password-reset/password-reset.component";
import {RegisterComponent} from "./register/register.component";
import {SettingsComponent} from "./settings/settings.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";

export const AccountManagementRoutes: Routes=[
  {path: 'register', component: RegisterComponent},
  {path: 'activate', component: ActivateComponent},
  {path: 'password_reset', component: PasswordResetComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: 'settings', component: SettingsComponent}
];


@NgModule(
  {
    imports: [
      RouterModule.forChild( AccountManagementRoutes )

    ],
    exports: [
      RouterModule
    ]
  } )

export class AccountRoutingModule
{
}
