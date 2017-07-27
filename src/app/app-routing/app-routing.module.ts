import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component'
import {HomeComponent} from '../home/home.component'

import { CanActivateRouteGuard } from '../can-activate-route.guard';


const routes: Routes = [
  {path : '',component: HomeComponent},
  {path : 'dashboard', component:DashboardComponent,
  canActivate: [CanActivateRouteGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
