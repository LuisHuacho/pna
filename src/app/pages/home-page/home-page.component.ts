import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ApiService } from '../../services/api.service';
import Tools from '../../utils/tools';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  _win:any = window;
  tools = new Tools();

  expierences:any = [];
  menciones:any = [];

  constructor(
    private userService: UserService,
    private apiService: ApiService
  ) {
    let _root = this;

    localStorage.removeItem('postulacion');
    localStorage.removeItem('experiencia');

    if(!localStorage.getItem('user_profile')) {
      _root.userService.profile()
      .then((resp:any) => {
        localStorage.setItem('user_profile', _root.tools.cryptrData(JSON.stringify(resp.data)));
      })
      .catch((errp) => {
      });
    }

    _root.apiService.categorias()
    .then((res:any) => {
      for(let item of res.body.data) {
        if(item.recurso == 'categoria') {
          
        }
        if(item.recurso == 'mencion') {
          _root.menciones.push(item);
        }
      }
      return _root.apiService.postulacionById(0);
    })
    .then((res:any) => {
      if(res.data !== undefined) {
        if( res.data.length > 0 ) {
          for(let item of res.data) {
            item.date = _root.tools.convertDate(item.fecha_registro);
            _root.expierences.push(item);
          }
        }
      }
    })
    .catch((errp) => {
    });
  }

  ngOnInit(): void {
    
  }

  deletePostulacion(id) {
    let _root = this;

    _root.apiService.postulacionDelete(id)
    .then((res:any) => {
      if(res.status == 200) {
        window.location.reload();
      }
      else {
        _root.tools.showToastr('', 'No se pudo eliminar la postulación', 'error', 2000);
      }
    })
    .catch((err:any) => {
      _root.tools.showToastr('', 'No se pudo eliminar la postulación', 'error', 2000);
    });
  }

  getMencionByCategorie(idCategoria) {
    let _root = this;
    let result = '';
    for(let item of _root.menciones ) {
      if(item.id == idCategoria) {
        result = item.label;
      }
    }

    return result;
  }

}
