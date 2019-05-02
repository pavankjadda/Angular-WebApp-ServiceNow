import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../core/auth/auth.service';
import {Role} from '../core/role/model/role';

@Injectable( {
               providedIn: 'root'
             } )
export class UserAuthGuard implements CanActivate
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
      if(role.name==='ROLE_USER')
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
