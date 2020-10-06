import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigApi } from 'src/app/services/config.api';
import { UserService } from '../../services/user.service';
import Tools from '../../utils/tools';

@Component({
  selector: 'app-passwordrecover-page',
  templateUrl: './passwordrecover-page.component.html',
  styleUrls: ['./passwordrecover-page.component.scss']
})
export class PasswordrecoverPageComponent implements OnInit {

  showRecoverPassword:boolean = false;
  recoverProccess:boolean = false;
  recoverConfirmPasswordLink:string = '';
  _win:any = window;

  configApi:any = new ConfigApi();
  tools = new Tools();
  userProfile:any = {
    username: '',
    url: ''
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    let _root = this;
    
    _root.activatedRoute.queryParams
    .subscribe(params => {
      if(params['token'] !== undefined) {
        _root.recoverConfirmPasswordLink = `?token=${params['token']}&url=${_root.tools.getHostname()}${_root._win.relativePath}/login`;
        _root.showRecoverPassword = false;
      }
      else {
        _root.showRecoverPassword = true;
      }
    });
  }

  ngOnInit(): void {
  }

  recoverPassword() {
    let _root = this;

    _root.recoverProccess = true;
    _root.userProfile.url = `${_root.tools.getHostname()}${window.location.pathname}`;

    console.log( _root.userProfile );

    if(_root.userProfile.username.length >= 8) {
      _root.userService.recoverPassword(_root.userProfile)
      .then((res:any) => {
        _root.recoverProccess = false;
        if(res.status == 404) {
          _root.tools.showToastr('ERROR', 'Este usuario no existe', 'error', 2000);
        }
        else if(res.status == 200) {
          _root.tools.showToastr('', 'Te hemos enviado un correo', 'success', 2000);
          setTimeout(() => {
            window.location.href = `${_root._win.relativePath}/`;
          }, 2000);
        }
      })
      .catch((err:any) => {
        _root.recoverProccess = false;
      });
    }
    else {
      _root.recoverProccess = false;
      _root.tools.showToastr('ERROR', 'Ingresa tu usuario correctamente', 'error', 2000);
    }
  }

  recoverPasswordConfirm() {
    let _root = this;

    _root.recoverProccess = true;

    _root.userService.recoverPasswordConfirm(_root.recoverConfirmPasswordLink)
    .then((res:any) => {
      _root.recoverProccess = false;
      if(res.status == 404) {
        _root.tools.showToastr('ERROR', 'Hubo problemas el recuperar tu contraseña', 'error', 2000);
      }
      else if(res.status == 200) {
        _root.tools.showToastr('', 'Te hemos enviado un correo con tu nueva contraseña', 'success', 2000);

        setTimeout(() => {
          window.location.href = `${_root._win.relativePath}/login`;
        }, 2000);
      }
    })
    .catch((err:any) => {
      _root.recoverProccess = false;
    });
  }

}
