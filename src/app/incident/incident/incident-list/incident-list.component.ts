import {Component, OnInit} from '@angular/core';
import {IncidentService} from '../service/incident.service';
import {Router} from '@angular/router';
import {INCIDENT_API_URL, SERVER_API_URL} from '../../../app.constants';
import {Incident} from '../model/incident';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit
{
  incidents:Array<Incident>;
  cols: any[];
  incident: Incident;

  constructor(private incidentService: IncidentService,
              private spinner:NgxSpinnerService,
              private router: Router)
  {

  }

  ngOnInit()
  {
    this.getIncidents();
    this.cols = [
      { field: 'number', header: 'Incident Id' },
      { field: 'state', header: 'Incident State'},
      { field: 'category', header: 'Category' },
      { field: 'subcategory', header: 'Subcategory'},
      { field: 'priority', header: 'Priority' },
      { field: 'assigned_to', header: 'Assigned To' },
      { field: 'assignment_group', header: 'Assignment Group' },
      { field: 'sys_created_on', header: 'Created Date' },
      { field: 'sys_updated_on', header: 'Last Updated' }
    ];
  }

  private getIncidents()
  {
      this.spinner.show();
      const incidentsApiUrl=SERVER_API_URL+INCIDENT_API_URL;
      this.incidentService.getIncidents(incidentsApiUrl).subscribe(
        data=>
        {
          // @ts-ignore
          this.incidents=data.result;
          this.spinner.hide();
        },
        error1 =>
        {
          console.log('Failed to load incidents');
          this.spinner.hide();
        }
      );

  }

  incidentsDataAvailable():boolean
  {
    return this.incidents!==undefined;
  }
}
