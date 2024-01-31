import {Component, OnInit} from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    standalone: true,
    imports: [HeaderComponent, FooterComponent]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
