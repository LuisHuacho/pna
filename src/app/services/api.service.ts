import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ConfigApi } from '../services/config.api';
import Tools from '../utils/tools';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

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

  departamentos() {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': `Bearer ${this.token}`
      });

      const params = new HttpParams().set('departamento_nombre', '');

      return this.http.get(this.configApi.getEndpoint().departamentos, {observe: 'response', headers: httpHeaders, params})
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

  provincias(departamento_id) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': `Bearer ${this.token}`
      });

      const params = new HttpParams()
        .set('departamento_id', departamento_id);

      return this.http.get(this.configApi.getEndpoint().provincias, {observe: 'response', headers: httpHeaders, params})
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

  distritos(departamento_id, provincia_id) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': `Bearer ${this.token}`
      });

      const params = new HttpParams()
        .set('departamento_id', departamento_id)
        .set('provincia_id', provincia_id);

      return this.http.get(this.configApi.getEndpoint().distritos, {observe: 'response', headers: httpHeaders, params})
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

  postulacionById(id) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${this.token}`
      });

      this.http.get(`${this.configApi.getEndpoint().postulacion}?id_postulacion=${id}`, {headers: httpHeaders})
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

  postulacion(data) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${this.token}`
      });

      this.http.post(this.configApi.getEndpoint().postulacion, data, {headers: httpHeaders})
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

  postulacionDelete(id) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${this.token}`
      });

      this.http.delete(`${this.configApi.getEndpoint().postulacionDelete}?id_postulacion=${id}`, {headers: httpHeaders})
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

  postulacionValidaEnvio(id) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${this.token}`
      });

      this.http.get(`${this.configApi.getEndpoint().validarEnvioPostulacion}?id_postulacion=${id}`, {headers: httpHeaders})
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

  experienciaById(id) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${this.token}`
      });

      this.http.get(`${this.configApi.getEndpoint().experiencia}?id_postulacion=${id}`, {headers: httpHeaders})
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

  experiencia(data) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${this.token}`
      });

      this.http.post(this.configApi.getEndpoint().experiencia, data, {headers: httpHeaders})
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

  categorias() {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': `Bearer ${this.token}`
      });

      return this.http.get(this.configApi.getEndpoint().categorias, {observe: 'response', headers: httpHeaders})
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

  preguntaListar(id) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': `Bearer ${this.token}`
      });

      return this.http.get(`${this.configApi.getEndpoint().preguntaListar}?id_mencion=${id}`, {observe: 'response', headers: httpHeaders})
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
  
  preguntaSave(data) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': `Bearer ${this.token}`
      });

      this.http.post(this.configApi.getEndpoint().preguntaSave, data, {headers: httpHeaders})
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

  preguntaSavedList(id) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': `Bearer ${this.token}`
      });

      return this.http.get(`${this.configApi.getEndpoint().preguntaSavedList}?id_postulacion=${id}&id_campo=0`, {observe: 'response', headers: httpHeaders})
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

  preguntaTablaSavedList(id, id_campo:string = '0') {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': `Bearer ${this.token}`
      });

      return this.http.get(`${this.configApi.getEndpoint().preguntaTableSavedList}?id_postulacion=${id}&id_campo=${id_campo}`, {observe: 'response', headers: httpHeaders})
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

  preguntaTablaSave(data) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': `Bearer ${this.token}`
      });

      this.http.post(this.configApi.getEndpoint().preguntaTableSave, data, {headers: httpHeaders})
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

  preguntaTablaListar(id) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': `Bearer ${this.token}`
      });

      return this.http.get(`${this.configApi.getEndpoint().preguntaTablaListar}?id_mencion=${id}`, {observe: 'response', headers: httpHeaders})
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

  uploadFile(data, idpostulacion) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      });

      this.http.post(`${this.configApi.getEndpoint().uploadFile}/${idpostulacion}`, data, {headers: httpHeaders})
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

  saveFile(data) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': `Bearer ${this.token}`
      });

      this.http.post(`${this.configApi.getEndpoint().document}`, data, {headers: httpHeaders})
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

  deleteFile(id) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      });

      this.http.delete(`${this.configApi.getEndpoint().document}?id_documento=${id}`, {headers: httpHeaders})
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

  downloadFile(url) : Observable<any> {
    let httpHeaders: HttpHeaders = new HttpHeaders({
      'Accept' : 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(`${url}`, {responseType: 'arraybuffer', headers: httpHeaders});
  }

  listFile(id) {
    let promise = new Promise((resolve, reject) => {
      let httpHeaders: HttpHeaders = new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      });

      this.http.get(`${this.configApi.getEndpoint().document}?id_postulacion=${id}`, {headers: httpHeaders})
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
