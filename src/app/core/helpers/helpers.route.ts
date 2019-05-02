import {Routes} from '@angular/router';
import {Http403ErrorComponent} from './http403-error/http403-error.component';

export const helpersManagementRoutes: Routes = [
  {
    path: '403',
    component: Http403ErrorComponent
  }
];
