import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderDetailListComponent} from './order-detail-list.component';

describe('OrderDetailListComponent', () => {
  let component: OrderDetailListComponent;
  let fixture: ComponentFixture<OrderDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
