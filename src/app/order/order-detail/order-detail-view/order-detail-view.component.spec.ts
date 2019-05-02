import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderDetailViewComponent} from './order-detail-view.component';

describe('OrderDetailViewComponent', () => {
  let component: OrderDetailViewComponent;
  let fixture: ComponentFixture<OrderDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
