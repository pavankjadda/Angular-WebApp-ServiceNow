import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Http403ErrorComponent} from './http403-error.component';

describe( 'Http403ErrorComponent', () =>
{
  let component: Http403ErrorComponent;
  let fixture: ComponentFixture<Http403ErrorComponent>;

  beforeEach( async( () =>
                     {
                       TestBed.configureTestingModule( {
                                                         declarations: [Http403ErrorComponent]
                                                       } )
                              .compileComponents();
                     } ) );

  beforeEach( () =>
              {
                fixture=TestBed.createComponent( Http403ErrorComponent );
                component=fixture.componentInstance;
                fixture.detectChanges();
              } );

  it( 'should create', () =>
  {
    expect( component ).toBeTruthy();
  } );
} );
