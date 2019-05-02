import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginManagementRoutes} from './login/login-management.route';
import {helpersManagementRoutes} from './helpers/helpers.route';

@NgModule(
  {
    imports: [
      RouterModule.forChild(LoginManagementRoutes),
      RouterModule.forChild(helpersManagementRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
export class CoreRoutingModule {

}
