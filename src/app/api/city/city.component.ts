import {HttpHeaders} from "@angular/common/http";
import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {SERVER_API_URL} from "../../app.constants";
import {City} from "./model/city";
import {CityService} from "./services/city.service";

@Component( {
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
} )
export class CityComponent implements OnInit
{

  citiesObservable: Observable<City[]>;

  constructor(private cityService:CityService) {
  }
  ngOnInit()
  {
    this.getCities();
  }

  getCities()
  {
    const url=SERVER_API_URL+'api/v2/city/list';
    const httpOptions={
      headers: new HttpHeaders( {'Content-Type': 'application/json'} )
    };
    this.cityService.getCities(url,httpOptions).subscribe(
      data => {
        // @ts-ignore
        this.citiesObservable=data;
        },
      err => console.error( err ),
      () => console.log( 'Cities retrieved from backend' ) );
    return this.citiesObservable;
  }
  cityDataAvailable(): boolean
  {
    return this.citiesObservable !== undefined;
  }

}
