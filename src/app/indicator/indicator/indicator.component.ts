import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-indicator',
    templateUrl: './indicator.component.html',
    styleUrls: ['./indicator.component.css'],
    standalone: true,
    imports: [RouterOutlet]
})
export class IndicatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
