import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IncidentComponent} from './incident/incident.component';
import {IncidentListComponent} from './incident/incident-list/incident-list.component';
import {IncidentHomeComponent} from './incident/incident-home/incident-home.component';
import {IncidentEditComponent} from './incident/incident-edit/incident-edit.component';
import {IncidentViewComponent} from './incident/incident-view/incident-view.component';
import {IncidentNewComponent} from './incident/incident-new/incident-new.component';
import {IncidentRoutingModule} from './incident-routing.module';

@NgModule({
  declarations: [
    IncidentComponent,
    IncidentListComponent,
    IncidentHomeComponent,
    IncidentEditComponent,
    IncidentViewComponent,
    IncidentNewComponent],
  imports: [
    CommonModule,
    IncidentRoutingModule
  ]
})
export class IncidentModule { }
