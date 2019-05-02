import {Routes} from '@angular/router';
import {UserAuthGuard} from '../../core/guards/user-auth.guard';
import {IncidentComponent} from './incident.component';
import {IncidentHomeComponent} from './incident-home/incident-home.component';
import {IncidentListComponent} from './incident-list/incident-list.component';
import {IncidentViewComponent} from './incident-view/incident-view.component';
import {IncidentEditComponent} from './incident-edit/incident-edit.component';
import {IncidentNewComponent} from './incident-new/incident-new.component';


export const incidentManagementRoute: Routes=[
  {
    path: 'incident',
    component: IncidentComponent,
    canActivate: [UserAuthGuard],
    children: [
      {
        path: 'list',
        component: IncidentListComponent
      },
      {
        path: 'new',
        component:IncidentNewComponent
      },
      {
        path: ':id',
        component: IncidentViewComponent,
        children: [
          {
            path: 'edit',
            component: IncidentEditComponent
          }
        ]
      },
      {
        path: '',
        component: IncidentHomeComponent
      }
    ]
  }];
