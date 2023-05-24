import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {Role} from '../role/model/role';

@Injectable( {
               providedIn: 'root'
             } )
export class UserAuthGuard 
{
  constructor(private authService: AuthService, private router: Router)
  {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    const url: string=state.url;
    return this.checkLogin( url );
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    return this.canActivate( route, state );
  }

  hasUserRole()
  {
    let userRoles: Array<Role>=JSON.parse( localStorage.getItem( 'currentUser' ) ).roles;
    for(let role of userRoles)
    {
      if(role.name==='admin')
      {
        return true;
      }

    }
    return false;
  }

  private checkLogin(url: string): boolean
  {
    if(AuthService.isUserLoggedIn()&&this.hasUserRole())
    {
      return true;
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl=url;

    // Navigate to the login page with extras
    this.router.navigate( ['/403'] );
    return false;
  }
}
