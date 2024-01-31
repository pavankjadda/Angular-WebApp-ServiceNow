import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndicatorComponent} from './indicator/indicator.component';
import {IndicatorListComponent} from './indicator/indicator-list/indicator-list.component';
import {IndicatorViewComponent} from './indicator/indicator-view/indicator-view.component';
import {IndicatorHomeComponent} from './indicator/indicator-home/indicator-home.component';
import {IndicatorTypeComponent} from './indicator-type/indicator-type.component';
import {IndicatorRoutingModule} from './indicator-routing.module';

@NgModule({
    imports: [
        CommonModule,
        IndicatorRoutingModule,
        IndicatorComponent,
        IndicatorListComponent,
        IndicatorViewComponent,
        IndicatorHomeComponent,
        IndicatorTypeComponent
    ]
})
export class IndicatorModule { }
