import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {City} from "../model/city";

@Injectable({
  providedIn: 'root'
})
export class CityService
{
  constructor(private httpClient:HttpClient) { }

  getCities(url,httpOptions)
  {
    return this.httpClient.get<City[]>(url,httpOptions);
  }
}
