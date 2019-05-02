import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginManagementRoutes} from './login/login-management.route';

@NgModule(
  {
    imports: [
      RouterModule.forChild(LoginManagementRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
export class CoreRoutingModule {

}
