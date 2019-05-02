import {HttpHeaders} from "@angular/common/http";
import {Component, OnDestroy, OnInit} from "@angular/core";
import {Observable, Subscription} from "rxjs";
import {BASIC_AUTH, SERVER_API_URL} from "../../../app.constants";
import {OrderDetail} from "../model/order-detail";
import {OrderDetailService} from "../service/order-detail.service";

@Component( {
  selector: 'app-order-detail-list',
  templateUrl: './order-detail-list.component.html',
  styleUrls: ['./order-detail-list.component.css']
} )
export class OrderDetailListComponent implements OnInit, OnDestroy
{
  orderdetailObservable: Observable<OrderDetail[]>;
  getOrderDetailsSubscription: Subscription;

  constructor(private orderDetailService: OrderDetailService)
  {
  }

  ngOnInit()
  {
    this.getOrderDetails();
  }

  orderDetailsDataAvailable()
  {
    return this.orderdetailObservable!==undefined;
  }

  ngOnDestroy()
  {
    this.getOrderDetailsSubscription.unsubscribe();
  }

  private getOrderDetails()
  {
    const url=SERVER_API_URL+'orders/list';
    const httpOptions={
      headers: new HttpHeaders( {
        'Content-Type': 'application/json',
        'Authorization': 'Basic '+BASIC_AUTH
      } )
    };
    this.getOrderDetailsSubscription=this.orderDetailService.getOrderDetails( url, httpOptions ).subscribe(
      data => {
        // @ts-ignore
        this.orderdetailObservable=data;
      },
      error => console.log( 'Error Occured while fetching Order list' ),
      () => console.log( 'getOrderDetails success' )
    );
    return this.orderdetailObservable;
  }
}
