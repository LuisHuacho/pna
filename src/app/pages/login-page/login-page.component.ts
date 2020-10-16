import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/user';
import Tools from '../../utils/tools';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  _win:any = window;
  orientaciones:any = [];
  tools = new Tools();
  user:IUser = {
    username: '',
    password: '',
    smacAddress: 'AAAAAAAAA',
    sipAddress: '',
    sappServer: 'PREMIO',
    ssistOperativo: '',
    linkAplicativo: ''
  };
  loginProccess:boolean = false;

  constructor(
    private globalService: GlobalService,
    private userService: UserService
  ) {
    if(localStorage.getItem('user_profile')) {
      window.location.href = `${this._win.relativePath}/`;
    }
  }

  ngOnInit(): void {
    this.orientaciones = this._win.loginText;
  }

  onClickLogin(e) {
    e.preventDefault();
    let _root = this;

    _root.tools.showPreloader();

    _root.loginProccess = true;
    _root.user.ssistOperativo = _root.tools.getOperatingSystem();
    _root.user.linkAplicativo = _root.tools.getHostname();

    _root.globalService.getIpJson()
    .then((res:any) => {
      if(res.ip !== undefined) {
        _root.user.sipAddress = res.ip;
      }

      return _root.userService.login(_root.user);
    })
    .then((res:any) => {
      _root.loginProccess = false;
      if(res.token !== undefined) {
        localStorage.setItem('access_token', _root.tools.cryptrData(res.token));
        localStorage.setItem('user_login', _root.tools.cryptrData(JSON.stringify(res)));
      }

      _root.userService.profile(res.token)
      .then((res:any) => {
        _root.tools.hidePreloader();
        if(res.status == 200) {
          window.location.href = `${_root._win.relativePath}/`;
        }
        else if(res.status == 400) {
          localStorage.removeItem('access_token');
          localStorage.removeItem('user_login');
          _root.tools.showToastr('ERROR', 'Su usuario no está registrado en el sistema. Regístrese para realizar su postulación.', 'error', 5000);
        }
      })
      .catch((err:any) => {
        _root.tools.hidePreloader();
        if(err.status !== undefined) {
          if(err.status == 403) {
            localStorage.removeItem('access_token');
          localStorage.removeItem('user_login');
            _root.tools.showToastr('ERROR', 'Su usuario no está registrado en el sistema. Regístrese para realizar su postulación.', 'error', 5000);
          }
        }
      });
    })
    .catch(err => {
      _root.loginProccess = false;
      if(err.error.error !== undefined) {
        let _msg = err.error.mensaje;
        if(err.error.mensaje == 'Error en autentificación: username o password') {
          _msg = 'Usuario o contraseña incorrectas. Pruebe cambiando su contraseña o escríbanos al correo premionacionalambiental@minam.gob.pe';
        }
        _root.tools.showToastr('ERROR', _msg, 'error', 5000);
      }
      _root.tools.hidePreloader();
    })
    
  }

}
