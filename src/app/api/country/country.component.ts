import {HttpHeaders} from "@angular/common/http";
import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Country} from "./model/country";
import {CountryService} from "./services/country.service";

@Component( {
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
} )
export class CountryComponent implements OnInit
{
  countriesObservable: Observable<Country[]>;

  constructor(private countryService: CountryService) {}

  ngOnInit()
  {
    this.getCountries();
  }

  getCountries()
  {
    const url='http://localhost:8080/api/v2/country/list';
    const httpOptions = {
      headers: new HttpHeaders( {'Content-Type':  'application/json'})
    };

    this.countryService.getCountries(url,httpOptions).subscribe(
      data=> {
        // @ts-ignore
        this.countriesObservable=data;
        },
      err => console.error(err),
      () => console.log('Countries retrived from backend'));
    return this.countriesObservable;
  }

  isDataReady(): boolean
  {
    return this.countriesObservable!==undefined;
  }
}
