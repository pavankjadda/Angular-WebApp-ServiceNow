import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderDetailDeleteComponent} from './order-detail-delete.component';

describe('OrderDetailDeleteComponent', () => {
  let component: OrderDetailDeleteComponent;
  let fixture: ComponentFixture<OrderDetailDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
