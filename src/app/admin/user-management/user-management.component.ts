import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../core/auth/auth.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit
{

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) {
  }

  ngOnInit()
  {
    //if(this.authService.currentUserValue.token === '' || !this.authService.isValidSession())
    if(!AuthService.isUserLoggedIn())
    {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }
}
