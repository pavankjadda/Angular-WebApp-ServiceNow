import {inject, TestBed} from '@angular/core/testing';

import {UserAuthGuard} from './user-auth.guard';

describe( 'UserAuthGuard', () =>
{
  beforeEach( () =>
              {
                TestBed.configureTestingModule( {
                                                  providers: [UserAuthGuard]
                                                } );
              } );

  it( 'should ...', inject( [UserAuthGuard], (guard: UserAuthGuard) =>
  {
    expect( guard ).toBeTruthy();
  } ) );
} );
