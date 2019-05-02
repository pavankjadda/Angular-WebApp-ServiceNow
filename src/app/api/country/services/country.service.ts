import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Country} from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService
{
  constructor(private httpClient:HttpClient) { }

  getCountries(url,httpOptions)
  {
    return this.httpClient.get<Country[]>(url,httpOptions);
  }
}
