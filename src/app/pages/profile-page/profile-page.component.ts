import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import Tools from '../../utils/tools';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  _win:any = window;
  tools = new Tools();
  userProfile:any = {};
  updateProccess:boolean = false;

  constructor(
    private userService: UserService
  ) {
    let _root = this;
    if(localStorage.getItem('user_profile')) {
      _root.userProfile = JSON.parse( _root.tools.decryptrData(localStorage.getItem('user_profile')) );
    }
  }

  ngOnInit(): void {
    let _root = this;
    let token = _root.tools.decryptrData(localStorage.getItem('access_token'));

    if(_root.userProfile.numero_documento.length >= 8) {
      _root.userService.personaNatural(_root.userProfile.numero_documento, token)
      .then((res:any) => {
        if(res.body.data !== undefined) {
          _root.userProfile.nombres = res.body.data.nombre;
          _root.userProfile.apellidos = `${res.body.data.apellidoPaterno} ${res.body.data.apellidoMaterno}`;
        }
      })
      .catch((err:any) => {
      });
    }
  }

  update(e) {
    e.preventDefault();

    let _root = this;
    
    if( _root.validateRegisterData() ) {
      let _obj = {
        idTipoDocumento: (parseInt(_root.userProfile.id_tipo_documento)).toString(),
        usuario: _root.userProfile.numero_documento,
        nombres: _root.userProfile.nombres,
        apellidos: _root.userProfile.apellidos,
        nacionalidad: _root.userProfile.nacionalidad,
        domicilio: _root.userProfile.domicilio,
        telefono1: _root.userProfile.telefono1,
        sexo: (_root.userProfile.sexo).toString(),
        correo: _root.userProfile.correo
      };

      _root.updateProccess = true;

      _root.userService.profileUpdate(_obj)
      .then((res:any) => {
        return _root.userService.profile();
      })
      .then((resp:any) => {
        _root.updateProccess = false;
        localStorage.setItem('user_profile', _root.tools.cryptrData(JSON.stringify(resp.data)));
        _root.tools.showToastr('', 'Sus datos fueron actualizados', 'success', 2000);
      })
      .catch(err => {
        _root.updateProccess = false;
        if(err.error.error !== undefined) {
          _root.tools.showToastr('ERROR', err.error.mensaje, 'error', 2000);
        }
      });
    }
  }

  validateRegisterData() {
    let _root = this;
    let validate = false;

    if(_root.userProfile.id_tipo_documento == '') {
      validate = false;
      _root.tools.showToastr('ERROR', 'Selecciona un tipo de documento', 'error', 2000);
    }
    else if(_root.userProfile.numero_documento == '') {
      validate = false;
      _root.tools.showToastr('ERROR', 'Ingresa el número de documento', 'error', 2000);
    }
    else if(_root.userProfile.nombres == '') {
      validate = false;
      _root.tools.showToastr('ERROR', 'El campo nombre es obligatorio', 'error', 2000);
    }
    else if(_root.userProfile.apellidos == '') {
      validate = false;
      _root.tools.showToastr('ERROR', 'El campo apellido es obligatorio', 'error', 2000);
    }
    else if(_root.userProfile.nacionalidad == '') {
      validate = false;
      _root.tools.showToastr('ERROR', 'Ingresa una nacionalidad', 'error', 2000);
    }
    else if(_root.userProfile.sexo == '') {
      validate = false;
      _root.tools.showToastr('ERROR', 'Selecciona un sexo', 'error', 2000);
    }
    else if(_root.userProfile.domicilio == '') {
      validate = false;
      _root.tools.showToastr('ERROR', 'Ingresa tu domicilio', 'error', 2000);
    }
    else if(_root.userProfile.telefono1 == '') {
      validate = false;
      _root.tools.showToastr('ERROR', 'Ingresa un teléfono', 'error', 2000);
    }
    else if(_root.userProfile.correo == '') {
      validate = false;
      _root.tools.showToastr('ERROR', 'Ingresa un correo', 'error', 2000);
    }
    // else if(_root.userProfile.contracena == '') {
    //   validate = false;
    //   _root.tools.showToastr('ERROR', 'Ingresa una contraseña', 'error', 2000);
    // }
    else {
      validate = true;
    }

    return validate;
  }

}
