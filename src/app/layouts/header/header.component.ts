import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/auth/auth.service';

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
} )
export class HeaderComponent implements OnInit
{
  constructor()
  {
  }

  ngOnInit()
  {
  }

  isLoggedIn()
  {
    return AuthService.isUserLoggedIn();
  }
}
