import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/auth/auth.service';
import {Router} from '@angular/router';

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
} )
export class HeaderComponent implements OnInit {
  constructor(public router: Router, private authService: AuthService) {
  }


  ngOnInit() {
  }

  /**
   * Logout user
   *
   * @author Pavan Kumar Jadda
   * @since 1.0.0
   */
  logout() {
    this.authService.logout();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
