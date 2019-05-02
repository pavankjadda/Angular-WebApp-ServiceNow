import {Component, OnInit} from '@angular/core';
import {IncidentService} from '../service/incident.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit
{

  constructor(private incidentService:IncidentService,
              private router:Router)
  {

  }

  ngOnInit()
  {

  }

}
