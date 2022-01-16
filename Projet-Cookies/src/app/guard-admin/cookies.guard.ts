import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { StatutService } from '../utils/services/statut.service';

@Injectable({
  providedIn: 'root'
})
export class CookiesGuard implements CanActivate {
  constructor(private statutServ: StatutService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.statutServ.isAdmin) {
      return true;
    } else {
      this.router.navigate(['forbidden']);
      return false
    }
  }

}
