import {Routes} from '@angular/router';
import {AuthGuard} from '../../core/guards/auth.guard';
import {AdminHomeComponent} from './admin-home.component';

export const AdminHomeRoutes: Routes = [
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [AuthGuard]
  }
];

