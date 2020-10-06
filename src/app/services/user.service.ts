import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ConfigApi } from '../services/config.api';
import Tools from '../utils/tools';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  configApi:any = new ConfigApi();
  tools = new Tools();
  token:string = '';

  constructor(
    private http: HttpClient
  ) {
    if(localStorage.getItem('access_token')) {
      this.token = this.tools.decryptrData(localStorage.getItem('access_token'));
    }
  }

  login(data) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8'
      });

      this.http.post(this.configApi.getEndpoint().login, data, {headers: httpHeaders})
        .toPromise()
        .then(
          (res:any) => {
            resolve(res);
          }
        )
        .catch(
          (err:any) => {
            reject(err);
          }
        );
    });
    return promise;
  }

  register(data, token) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${token}`
      });

      this.http.post(this.configApi.getEndpoint().register, data, {headers: httpHeaders})
        .toPromise()
        .then(
          (res:any) => {
            resolve(res);
          }
        )
        .catch(
          (err:any) => {
            reject(err);
          }
        );
    });
    return promise;
  }

  profile() {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${this.token}`
      });

      this.http.get(this.configApi.getEndpoint().user, {headers: httpHeaders})
        .toPromise()
        .then(
          (res:any) => {
            resolve(res);
          }
        )
        .catch(
          (err:any) => {
            reject(err);
          }
        );
    });
    return promise;
  }

  profileUpdate(data) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${this.token}`
      });

      this.http.post(this.configApi.getEndpoint().userUpdate, data, {headers: httpHeaders})
        .toPromise()
        .then(
          (res:any) => {
            resolve(res);
          }
        )
        .catch(
          (err:any) => {
            reject(err);
          }
        );
    });
    return promise;
  }

  profileGuard() {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${this.token}`
      });

      this.http.get(this.configApi.getEndpoint().user, {observe: 'response', headers: httpHeaders})
        .toPromise()
        .then(
          (res:any) => {
            resolve(res);
          }
        )
        .catch(
          (err:any) => {
            reject(err);
          }
        );
    });
    return promise;
  }

  personaNatural(dni, token) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${token}`
      });

      this.http.get(`${this.configApi.getEndpoint().personaNatural}?id=${dni}`, {observe: 'response', headers: httpHeaders})
        .toPromise()
        .then(
          (res:any) => {
            resolve(res);
          }
        )
        .catch(
          (err:any) => {
            reject(err);
          }
        );
    });
    return promise;
  }

  recoverPassword(data) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${this.token}`
      });

      this.http.post(this.configApi.getEndpoint().recover, data, {headers: httpHeaders})
        .toPromise()
        .then(
          (res:any) => {
            resolve(res);
          }
        )
        .catch(
          (err:any) => {
            reject(err);
          }
        );
    });
    return promise;
  }

  recoverPasswordConfirm(token) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8'
      });

      this.http.get(`${this.configApi.getEndpoint().recoverConfirm}${token}`, {headers: httpHeaders})
        .toPromise()
        .then(
          (res:any) => {
            resolve(res);
          }
        )
        .catch(
          (err:any) => {
            reject(err);
          }
        );
    });
    return promise;
  }
}
