import {HttpEvent, HttpHeaders} from "@angular/common/http";
import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {State} from "./model/state";
import {StateService} from "./services/state.service";

@Component( {
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
} )
export class StateComponent implements OnInit
{
  statesObservable: Observable<State[]>;

  constructor(private stateService: StateService) {}

  ngOnInit()
  {
    this.getStates();
  }

  getStates()
  {
    const url='http://localhost:8080/api/v2/state/list';
    const httpOptions={headers: new HttpHeaders( {'Content-Type': 'application/json'} )};
    this.stateService.getStates(url,httpOptions).subscribe(
      data => {
        // @ts-ignore
        this.statesObservable=data;
        },
      err => console.error( err ),
      () => console.log( 'States retrieved from backend' ) );
    return this.statesObservable;
  }
  statesDataAvailable(): boolean
  {
    return this.statesObservable!==undefined;
  }
}
