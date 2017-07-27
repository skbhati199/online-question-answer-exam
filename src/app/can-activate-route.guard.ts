import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';


import { AuthService } from './provider/auth.service';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private auth:AuthService){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return this.auth.isUserAuthenticated();
  }
}
