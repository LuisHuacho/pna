import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { UserService } from '../services/user.service';
import Tools from '../utils/tools';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  _win:any = window;
  tools = new Tools();

  constructor(
    private router: Router,
    private userService: UserService,
    private apiService: ApiService,
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
      let _root = this;

      return _root.userService.profileGuard()
      .then((res:any) => {
        if(res.status == 200) {
          return true;
        }
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_login');
        localStorage.removeItem('user_profile');
        localStorage.removeItem('postulacion');
        window.location.href = `${_root._win.relativePath }/login`;
        return false;
      })
      .catch((err:any) => {
        console.log( err );
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_login');
        localStorage.removeItem('user_profile');
        localStorage.removeItem('postulacion');
        window.location.href = `${_root._win.relativePath }/login`;
        return false;
      });
  }
  
}
