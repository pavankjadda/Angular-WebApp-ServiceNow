import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Incident} from '../model/incident';

@Injectable({
  providedIn: 'root'
})
export class IncidentService
{

  constructor(private httpClient:HttpClient) { }

  getIncidents(url)
  {
    return this.httpClient.get<Incident[]>(url);
  }

  createIncident(url, incident)
  {
      return this.httpClient.post(url,incident);
    //return this.httpClient.put(url,httpOptions,incident);
  }

  getIncidentDetails(url)
  {
    return this.httpClient.get<Incident>(url);
  }

  updateIncident(url: string, incident: Incident)
  {
    return this.httpClient.put(url,incident);
  }


  deleteIncident(url: string)
  {
    return this.httpClient.delete(url);
  }
}
