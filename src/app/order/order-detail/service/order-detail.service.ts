import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {OrderDetail} from "../model/order-detail";

@Injectable( {
  providedIn: 'root'
} )
export class OrderDetailService
{

  constructor(private httpClient: HttpClient)
  {
  }


  getOrderDetails(url: string, httpOptions: { headers: HttpHeaders })
  {
    return this.httpClient.get<OrderDetail[]>( url, httpOptions );
  }
}
