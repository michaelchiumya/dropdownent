import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { PortalAuthService } from './services/portal-auth.service';

@Injectable({
  providedIn: 'root'
})
export class PortalAuthGuard implements CanActivate {

  constructor(private PortalAuthservice: PortalAuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
     {
      if (!this.PortalAuthservice.gettoken()) {

        this.router.navigateByUrl("/login");
        return false;
    }
    return this.PortalAuthservice.gettoken();
   }

}
