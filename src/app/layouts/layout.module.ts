import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FooterComponent} from "./footer/footer.component";

import {HeaderComponent} from "./header/header.component";
import {MainComponent} from "./main/main.component";


@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [HeaderComponent, FooterComponent, MainComponent],
  exports:[MainComponent]
})
export class LayoutModule { }
