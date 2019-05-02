import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {CoreRoutingModule} from './core-routing.module';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {RoleComponent} from './role/role.component';
import {UserComponent} from './user/user.component';
import {Http403ErrorComponent} from './helpers/http403-error/http403-error.component';


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
    LogoutComponent,
    Http403ErrorComponent]
})


export class CoreModule {}
