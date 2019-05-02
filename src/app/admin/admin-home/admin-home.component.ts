import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../core/auth/auth.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit
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
