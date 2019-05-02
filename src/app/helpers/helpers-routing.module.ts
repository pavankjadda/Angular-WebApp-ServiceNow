import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Http403ErrorComponent} from './http403-error/http403-error.component';


const routes: Routes=[
  {path: '403', component: Http403ErrorComponent}
];

@NgModule( {
             imports: [RouterModule.forRoot( routes )],
             exports: [RouterModule]
           } )

export class HelpersRoutingModule
{

}
