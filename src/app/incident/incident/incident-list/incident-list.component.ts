import {Component, OnInit} from '@angular/core';
import {IncidentService} from '../service/incident.service';
import {Router} from '@angular/router';
import {INCIDENT_API_URL, SERVER_API_URL} from '../../../app.constants';
import {Incident} from '../model/incident';

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
              private router: Router)
  {

  }

  ngOnInit()
  {
    this.getIncidents();

    this.cols = [
      { field: 'incident_id', header: 'Incident Id' },
      { field: 'ticket_status', header: 'Incident Status' },
      { field: 'ticket_coa', header: 'Incident COA' },
      { field: 'complted_indicator_count', header: 'Indicator Count'},
      { field: 'urgency_rank', header: 'Urgency Rank' },
      { field: 'sys_created_on', header: 'Created Date' },
      { field: 'sys_updated_on', header: 'Last Updated' }
    ];
  }

  private getIncidents()
  {
      const incidentsApiUrl=SERVER_API_URL+INCIDENT_API_URL;
      this.incidentService.getIncidents(incidentsApiUrl).subscribe(
        data=>
        {
          // @ts-ignore
          this.incidents=data.result;
        },
        error1 =>
        {
          console.log('Failed to load incidents');
        }
      );
  }

  incidentsDataAvailable():boolean
  {
    return this.incidents!==undefined;
  }
}
