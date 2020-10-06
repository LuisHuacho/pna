import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {

  _win:any = window;

  constructor(
    private router: Router,
    private apiService: ApiService
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if( localStorage.getItem('access_token') ) {
        if( localStorage.getItem('access_token') == '' ) {
          window.location.href = `${this._win.relativePath }/`;
          return true;
        }
        else {
          window.location.href = `${this._win.relativePath }/login`;
          return false;
        }
      }
      else {
        window.location.href = `${this._win.relativePath }/login`;
        return false;
      }
  }
  
}
