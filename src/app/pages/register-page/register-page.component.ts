import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/user';
import { IUserRegister } from '../../interfaces/user-register';
import Tools from '../../utils/tools';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  
  _win:any = window;
  tools = new Tools();
  user:IUser = {
    username: '',
    password: '',
    smacAddress: '',
    sipAddress: '',
    sappServer: 'PREMIO',
    ssistOperativo: '',
    linkAplicativo: ''
  };
  
  userRegister:IUserRegister = {
    numeroDocumento: '',
    usuario: '',
    contracena: '',
    idTipoDocumento: '',
    nacionalidad: '',
    sexo: '',
    domicilio: '',
    nombres: '',
    apellidos: '',
    telefono1: '',
    telefono2: '',
    correo: ''
  };
  registerProccess:boolean = false;
  searchProccess:boolean = false;

  showLightBox:boolean = false;
  registerComplete:boolean = false;

  nombresEnabled:boolean = true;
  apellidosEnabled:boolean = true;
  documentMask:string = '00000000';

  constructor(
    private globalService: GlobalService,
    private userService: UserService
  ) {
    if(localStorage.getItem('user_profile')) {
      window.location.href = `${this._win.relativePath}/`;
    }
  }

  ngOnInit(): void {

  }

  ip_local() {
    let ip = false;
    this._win.RTCPeerConnection = this._win.RTCPeerConnection || this._win.mozRTCPeerConnection || this._win.webkitRTCPeerConnection || false;

    if (this._win.RTCPeerConnection) {
      let ip:any = []; 
      let pc:any = new RTCPeerConnection({iceServers:[]}), noop = function(){};
      pc.createDataChannel('');
      pc.createOffer(pc.setLocalDescription.bind(pc), noop);

      pc.onicecandidate = function(event) {
        if (event && event.candidate && event.candidate.candidate) {
          let s = event.candidate.candidate.split('\n');
          ip.push(s[0].split(' ')[4]);
        }
      }
    }

    return ip;
  }

  register(e) {
    e.preventDefault();

    let _root = this;

    if( _root.validateRegisterData() ) {
      _root.registerProccess = true;
  
      _root.user.username = 'USUARIO_DEFECTO_BRACK';
      _root.user.password = '123';
      _root.user.ssistOperativo = _root.tools.getOperatingSystem();
      _root.user.linkAplicativo = _root.tools.getHostname();
  
      _root.userService.login(_root.user)
      .then((res:any) => {
        if(res.token !== undefined) {
          _root.userRegister.usuario = _root.userRegister.numeroDocumento;
          _root.userRegister.telefono2 = _root.userRegister.telefono1;
  
          _root.userService.register(_root.userRegister, res.token)
          .then((res:any) => {
            _root.showLightBox = true;
            _root.registerComplete = true;

            setTimeout(() => {
              window.location.href = `${_root._win.relativePath}/`;
            }, 5000);

            if(res.status !== undefined) {
              if(res.status == 203) {
                _root.tools.showToastr('ERROR', 'No se pudo registrar', 'error', 2000);
              }
              else if(res.status == 400) {
                _root.tools.showToastr('', 'Este usuario ya existe', 'error', 2000);
              }
              else {
                _root.tools.showToastr('ERROR', 'No se pudo registrar', 'error', 2000);
              }
            }
            _root.registerProccess = false;
          })
        }
        else {
          _root.registerProccess = false;
        }
      })
      .catch(err => {
        _root.registerProccess = false;
        if(err.error.error !== undefined) {
          // _root.tools.showToastr('ERROR', err.error.mensaje, 'error', 2000);
          _root.tools.showToastr('ERROR', 'No se pudo registrar', 'error', 2000);
        }
      });
    }
  }

  validateRegisterData() {
    let _root = this;
    let validate = false;

    if(_root.userRegister.idTipoDocumento == '') {
      validate = false;
      _root.tools.showToastr('ERROR', 'Selecciona un tipo de documento', 'error', 2000);
    }
    else if(_root.userRegister.numeroDocumento == '') {
      validate = false;
      _root.tools.showToastr('ERROR', 'Ingresa el número de documento', 'error', 2000);
    }
    else if(_root.userRegister.nombres == '') {
      validate = false;
      _root.tools.showToastr('ERROR', 'El campo nombre es obligatorio', 'error', 2000);
    }
    else if(_root.userRegister.apellidos == '') {
      validate = false;
      _root.tools.showToastr('ERROR', 'El campo apellido es obligatorio', 'error', 2000);
    }
    else if(_root.userRegister.nacionalidad == '') {
      validate = false;
      _root.tools.showToastr('ERROR', 'Ingresa una nacionalidad', 'error', 2000);
    }
    else if(_root.userRegister.sexo == '') {
      validate = false;
      _root.tools.showToastr('ERROR', 'Selecciona un sexo', 'error', 2000);
    }
    else if(_root.userRegister.domicilio == '') {
      validate = false;
      _root.tools.showToastr('ERROR', 'Ingresa tu domicilio', 'error', 2000);
    }
    else if(_root.userRegister.telefono1 == '') {
      validate = false;
      _root.tools.showToastr('ERROR', 'Ingresa un teléfono', 'error', 2000);
    }
    else if(_root.userRegister.correo == '') {
      validate = false;
      _root.tools.showToastr('ERROR', 'Ingresa un correo', 'error', 2000);
    }
    else if(_root.userRegister.contracena == '') {
      validate = false;
      _root.tools.showToastr('ERROR', 'Ingresa una contraseña', 'error', 2000);
    }
    else {
      validate = true;
    }

    return validate;
  }

  onSearchPerson(event) {
    event.preventDefault();

    let _root = this;

    if(_root.userRegister.numeroDocumento.length >= 8) {
      _root.searchProccess = true;
      _root.user.username = 'USUARIO_DEFECTO_BRACK';
      _root.user.password = '123';
      _root.user.sipAddress = '';
      _root.user.ssistOperativo = _root.tools.getOperatingSystem();
      _root.user.linkAplicativo = _root.tools.getHostname();

      _root.userService.login(_root.user)
      .then((res:any) => {
        if(res.token !== undefined) {
          _root.userService.personaNatural(_root.userRegister.numeroDocumento, res.token)
          .then((res:any) => {
            if(res.body.data !== undefined) {
              _root.userRegister.nombres = res.body.data.nombre;
              _root.userRegister.apellidos = `${res.body.data.apellidoPaterno} ${res.body.data.apellidoMaterno}`;
            }
            _root.searchProccess = false;
          })
          .catch((err:any) => {
            _root.searchProccess = false;
          });
        }
        else {
          _root.searchProccess = false;
        }
      })
      .catch((err:any) => {
        _root.searchProccess = false;
      });
    }
  }

  onChangeDocumentType(event) {
    event.preventDefault();

    let _root = this;

    _root.userRegister.numeroDocumento = '';
    _root.userRegister.nombres = '';
    _root.userRegister.apellidos = '';

    if( _root.userRegister.idTipoDocumento == '1' ) {
      // _root.documentMask = '00000000';
      _root.nombresEnabled = true;
      _root.apellidosEnabled = true;
    }
    else {
      // _root.documentMask = '00000000000';
      _root.nombresEnabled = false;
      _root.apellidosEnabled = false;
    }
  }

}
