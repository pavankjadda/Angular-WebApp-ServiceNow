import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/auth/auth.service';
import {MatDrawerMode} from '@angular/material/sidenav';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  mode = 'side' as MatDrawerMode;
  opened = true;
  constructor(public authService:AuthService) { }

  ngOnInit() {
  }

}
