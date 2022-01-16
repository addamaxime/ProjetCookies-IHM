import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { StatutService } from '../utils/services/statut.service';

@Injectable({
  providedIn: 'root'
})
export class GuardProfilGuard implements CanActivate {
  constructor(private statutServ: StatutService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.statutServ.connexion) {
      return true;
    } else {
      this.router.navigate(['forbidden']);
      return false
    }
  }
  
}
