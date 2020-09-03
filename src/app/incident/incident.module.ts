import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgxSpinnerModule} from 'ngx-spinner';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {IncidentRoutingModule} from './incident-routing.module';
import {IncidentTypeComponent} from './incident-type/incident-type.component';
import {IncidentEditComponent} from './incident/incident-edit/incident-edit.component';
import {IncidentHomeComponent} from './incident/incident-home/incident-home.component';
import {IncidentListComponent} from './incident/incident-list/incident-list.component';
import {IncidentNewComponent} from './incident/incident-new/incident-new.component';
import {IncidentViewComponent} from './incident/incident-view/incident-view.component';
import {IncidentComponent} from './incident/incident.component';

@NgModule({
  declarations: [
    IncidentComponent,
    IncidentListComponent,
    IncidentHomeComponent,
    IncidentEditComponent,
    IncidentViewComponent,
    IncidentNewComponent,
    IncidentTypeComponent],
  imports: [
    CommonModule,
    IncidentRoutingModule,
    TableModule,
    DropdownModule,
    InputTextModule,
    NgxSpinnerModule
  ]
})
export class IncidentModule { }
