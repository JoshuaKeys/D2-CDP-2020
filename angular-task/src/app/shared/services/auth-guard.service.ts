import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree{
    let isAuthenticated = localStorage.getItem('isAuthorized');
    if(isAuthenticated) {
      return true;
    }
    return this.router.createUrlTree(['/login'])
  }
  constructor(private router: Router) { }
}
