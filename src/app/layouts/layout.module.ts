import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './footer/footer.component';

import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    imports: [
        CommonModule, RouterModule, MatSidenavModule, MatDividerModule, MatListModule, MatIconModule, MatTooltipModule, MatToolbarModule, MatButtonModule
    ],
  declarations: [HeaderComponent, FooterComponent, MainComponent, SideNavBarComponent],
  exports:[MainComponent]
})
export class LayoutModule { }
