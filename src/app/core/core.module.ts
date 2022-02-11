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
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        CoreRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule
    ],
  declarations: [
    LoginComponent,
    UserComponent,
    RoleComponent,
    LogoutComponent,
    Http403ErrorComponent]
})


export class CoreModule {}
