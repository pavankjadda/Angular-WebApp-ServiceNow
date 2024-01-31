import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Incident } from "../../../types/incident";

@Injectable({
  providedIn: "root",
})
export class IncidentService {
  constructor(private httpClient: HttpClient) {}

  getIncidents(url) {
    return this.httpClient.get<any[]>(url);
  }

  createIncident(url, incident) {
    return this.httpClient.post(url, incident);
  }

  getIncidentDetails(url) {
    return this.httpClient.get<Incident>(url);
  }

  updateIncident(url: string, incident: Incident) {
    return this.httpClient.put(url, incident);
  }

  deleteIncident(url: string) {
    return this.httpClient.delete(url);
  }
}
