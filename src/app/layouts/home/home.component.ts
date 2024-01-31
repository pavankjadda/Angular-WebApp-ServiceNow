import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import {AuthService} from '../../core/auth/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive]
})
export class HomeComponent implements OnInit
{
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) {
  }

  ngOnInit()
  {
    if(!AuthService.isUserLoggedIn())
    {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }

}
