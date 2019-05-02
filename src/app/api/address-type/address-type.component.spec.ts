import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddressTypeComponent} from './address-type.component';

describe( 'AddressTypeComponent', () => {
  let component: AddressTypeComponent;
  let fixture: ComponentFixture<AddressTypeComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [AddressTypeComponent]
    } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture=TestBed.createComponent( AddressTypeComponent );
    component=fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
