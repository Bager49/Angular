import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
    // if (this.authService.isAuthenticated()){
    //     return true
    // }else{
    //   this.router.navigate(["login"])//login sayfasina yönlendir eger giris yapmadan urun eklemeye calisiyorsa
    //   return false;
    // }
  }
}
