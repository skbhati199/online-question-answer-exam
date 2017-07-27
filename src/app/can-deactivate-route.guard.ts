import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CanDeactivate } from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component'

@Injectable()
export class CanActivateRouteGuard implements CanDeactivate<DashboardComponent> {
  canDeactivate(component: DashboardComponent): boolean {
    if (component.unsavedChanges) {
      return confirm('Are you sure?');
    }
    return true;
  }
}