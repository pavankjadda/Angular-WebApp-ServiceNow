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

  constructor(private incidentService: IncidentService,
              private router: Router)
  {

  }

  ngOnInit()
  {
    this.getIncidents();
  }

  private getIncidents()
  {
      const incidentsApiUrl=SERVER_API_URL+INCIDENT_API_URL;
      this.incidentService.getIncidents(incidentsApiUrl).subscribe(
        data=>
        {
          this.incidents=data;
        },
        error1 =>
        {
          console.log('Failed to load incidents');
        }
      );
  }
}
