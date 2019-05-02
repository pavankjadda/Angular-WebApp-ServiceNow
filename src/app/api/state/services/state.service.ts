import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

import {State} from "../model/state";

@Injectable({
  providedIn: 'root'
})
export class StateService
{
  constructor(private httpClient:HttpClient) { }

  getStates(url,httpOptions)
  {
    return this.httpClient.get<State[]>(url,httpOptions);
  }
}
