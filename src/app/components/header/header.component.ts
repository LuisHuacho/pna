import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { UserService } from '../../services/user.service';
import { IUserProfile } from '../../interfaces/user-profile';
import Tools from '../../utils/tools';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() type:string = 'default-login';
  _win:any = window;
  tools = new Tools();
  userName:string = '';

  userProfile: IUserProfile = {
    apellidos: '',
    correo: '',
    domicilio: '',
    id_tipo_documento: '',
    nacionalidad: '',
    nombres: '',
    numero_documento: '',
    sexo: '',
    telefono1: '',
    telefono2: ''
  };

  constructor(
    private globalService: GlobalService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    let _root = this;

    if(localStorage.getItem('postulacion')) {
      localStorage.removeItem('postulacion');
    }

    _root.userService.profile()
    .then((res:any) => {
      _root.userProfile = res.data;
    })
    .catch((err:any) => {
    });
    
    if(localStorage.getItem('user_login')) {
      let userLogin = JSON.parse( this.tools.decryptrData(localStorage.getItem('user_login')) );
      if(userLogin.user.username !== undefined) {
        this.userName = userLogin.user.username;
      }
    }
  }

  logout(e) {
    e.preventDefault();

    let _root = this;
    
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_login');
    localStorage.removeItem('user_profile');
    localStorage.removeItem('postulacion');
    window.location.href = `${_root._win.relativePath }/login`;
  }

}
