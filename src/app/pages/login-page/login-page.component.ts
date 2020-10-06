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
    linkAplicativo: 'http://google.com'
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
    _root.user.sipAddress = '192.100.20.5';
    _root.user.ssistOperativo = _root.tools.getOperatingSystem();

    _root.userService.login(this.user)
    .then((res:any) => {
      _root.loginProccess = false;
      if(res.token !== undefined) {
        localStorage.setItem('access_token', _root.tools.cryptrData(res.token));
        localStorage.setItem('user_login', _root.tools.cryptrData(JSON.stringify(res)));
        window.location.href = `${_root._win.relativePath}/`;
      }
      _root.tools.hidePreloader();
    })
    .catch(err => {
      _root.loginProccess = false;
      if(err.error.error !== undefined) {
        _root.tools.showToastr('ERROR', err.error.mensaje, 'error', 2000);
      }
      _root.tools.hidePreloader();
    });
  }

}
