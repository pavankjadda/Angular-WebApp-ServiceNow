import { Component } from "@angular/core";
import { environment } from "../environments/environment.prod";
import { RouterLink, RouterOutlet } from "@angular/router";
import { MainComponent } from "./layouts/main/main.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: true,
  imports: [RouterLink, RouterOutlet, MainComponent],
})
export class AppComponent {
  constructor() {
    console.log(environment.production); // Logs false for default environment
  }
}
