import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormService } from '../../services/form.service';
import { GlobalService } from '../../services/global.service';
import { ApiService } from '../../services/api.service';
import Tools from '../../utils/tools';

@Component({
  selector: 'app-postulation-page',
  templateUrl: './postulation-page.component.html',
  styleUrls: ['./postulation-page.component.scss']
})
export class PostulationPageComponent implements OnInit {

  active:number = 1;

  _win:any = window;
  showStepInfo:boolean = false;
  tools = new Tools();
  tabs:any = [];
  idPostulacion:any = '';
  saveExpProccess:boolean = false;

  showLightBox:boolean = false;
  validateFormSendPostulacion:boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private globalService: GlobalService,
    private formService: FormService,
    private apiService: ApiService,
  ) {
    let _root = this;
    
    _root.activatedRoute.queryParams
    .subscribe(params => {
      if(params['id'] !== undefined) {
        _root.idPostulacion = params['id'];
      }
      else {
        _root.idPostulacion = '';
      }
    });
  }

  ngOnInit(): void {
    let _root = this;

    _root.showStepInfo = true;

    setTimeout(() => {
      _root.showStepInfo = false;
    }, 4000);
    this.tabs = this.formService.getForms();
  }

  hideStepInfo() {
    let _root = this;

    _root.showStepInfo = false;
  }

  onSaveContinue(tab, tabId, sout:string = 'N'): void {
    let _root = this;

    if(_root.active <= (_root.tabs.length - 1)) {
      _root.showStepInfo = true;

      setTimeout(() => {
        _root.showStepInfo = false;
      }, 4000);

      switch (parseInt(tabId)) {
        case 1:
          if( localStorage.getItem('postulacion') ) {
            _root.saveExpProccess = true;
            let postulacion = JSON.parse( _root.tools.decryptrData( localStorage.getItem('postulacion') ) );
            postulacion.estado = '1';

            if(postulacion.tipo_persona == '1') {
              postulacion.numero_documento = '00000000';
            }
            // postulacion.nom_representante = postulacion.nombre_completo;

            _root.apiService.postulacion(postulacion)
            .then((res:any) => {
              _root.saveExpProccess = false;
              if( res.data.postulacion_id !== undefined ) {
                _root.idPostulacion = (res.data.postulacion_id).toString();
                postulacion.id_postulacion = (res.data.postulacion_id).toString();

                if(sout == 'N') {
                  localStorage.setItem('postulacion', _root.tools.cryptrData( JSON.stringify(postulacion) ));
                  _root.active = parseInt(tabId) + 1;
                  window.scrollTo(0, 0);
                }
                else if(sout == 'Y') {
                  window.location.href = `${_root._win.relativePath}/`;
                }
              }
            })
            .catch((err:any) => {
              _root.saveExpProccess = false;
              if(sout != 'tab') {
                _root.tools.showToastr('', 'No se pudo guardar la información', 'error', 2000);
              }
            });
          }
          break;

        case 2:
          if( localStorage.getItem('experiencia') ) {
            _root.saveExpProccess = true;
            let postulacion = JSON.parse( _root.tools.decryptrData( localStorage.getItem('postulacion') ) );
            let experiencia = JSON.parse( _root.tools.decryptrData( localStorage.getItem('experiencia') ) );
            experiencia.id_postulacion = (postulacion.id_postulacion).toString();
            experiencia.id_postulacion = _root.idPostulacion;

            _root.apiService.experiencia(experiencia)
            .then((res:any) => {
              _root.saveExpProccess = false;
              if( res.data.id_experiencia_detalle !== undefined ) {
                experiencia.id_experiencia_detalle = (res.data.id_experiencia_detalle).toString();

                if(sout == 'N') {
                  localStorage.setItem('experiencia', _root.tools.cryptrData( JSON.stringify(experiencia) ));
                  _root.active = parseInt(tabId) + 1;
                  window.scrollTo(0, 0);
                }
                else if(sout == 'Y') {
                  window.location.href = `${_root._win.relativePath}/`;
                }
              }
            })
            .catch((err:any) => {
              _root.saveExpProccess = false;
              if(sout != 'tab') {
                _root.tools.showToastr('', 'No se pudo guardar la información', 'error', 2000);
              }
            });
          }
          break;

        case 3:
          if(sout == 'N') {
            _root.active = parseInt(tabId) + 1;
            window.scrollTo(0, 0);
          }
          else if(sout == 'Y') {
            window.location.href = `${_root._win.relativePath}/`;
          }
          break;

        case 4:
          if( localStorage.getItem('postulacion') ) {
            _root.saveExpProccess = true;
            let postulacion = JSON.parse( _root.tools.decryptrData( localStorage.getItem('postulacion') ) );
            postulacion.estado = '1';

            if(postulacion.tipo_persona == '1') {
              postulacion.numero_documento = '00000000';
            }
            // postulacion.tipo_number_doc_declara = '1';
            // postulacion.nom_representante = postulacion.nombre_completo;

            _root.apiService.postulacion(postulacion)
            .then((res:any) => {
              _root.saveExpProccess = false;
              if( res.data.postulacion_id !== undefined ) {
                _root.idPostulacion = (res.data.postulacion_id).toString();
                postulacion.id_postulacion = (res.data.postulacion_id).toString();

                if(sout == 'N') {
                  localStorage.setItem('postulacion', _root.tools.cryptrData( JSON.stringify(postulacion) ));
                  _root.active = parseInt(tabId) + 1;
                  window.scrollTo(0, 0);
                }
                else if(sout == 'Y') {
                  window.location.href = `${_root._win.relativePath}/`;
                }
              }
            })
            .catch((err:any) => {
              _root.saveExpProccess = false;
              if(sout != 'tab') {
                _root.tools.showToastr('', 'No se pudo guardar la información', 'error', 2000);
              }
            });
          }
          break;

        case 5:
          if( localStorage.getItem('postulacion') ) {
            _root.saveExpProccess = true;
            let postulacion = JSON.parse( _root.tools.decryptrData( localStorage.getItem('postulacion') ) );
            postulacion.estado = '1';

            if(postulacion.tipo_persona == '1') {
              postulacion.numero_documento = '00000000';
            }

            if(!postulacion.aceptacion_declara) {
              _root.saveExpProccess = false;
              _root.tools.showToastr('', 'Acepta la declaración jurada', 'error', 2000);
            }
            else {
              postulacion.aceptacion_declara = '1';
              _root.apiService.postulacion(postulacion)
              .then((res:any) => {
                _root.saveExpProccess = false;
                if( res.data.postulacion_id !== undefined ) {
                  _root.idPostulacion = (res.data.postulacion_id).toString();
                  postulacion.id_postulacion = (res.data.postulacion_id).toString();
  
                  if(sout == 'N') {
                    localStorage.setItem('postulacion', _root.tools.cryptrData( JSON.stringify(postulacion) ));
                    _root.active = parseInt(tabId) + 1;
                    window.scrollTo(0, 0);
                  }
                  else if(sout == 'Y') {
                    window.location.href = `${_root._win.relativePath}/`;
                  }
                }
              })
              .catch((err:any) => {
                _root.saveExpProccess = false;
                if(sout != 'tab') {
                  _root.tools.showToastr('', 'No se pudo guardar la información', 'error', 2000);
                }
              });
            }

          }
          break;
      }
    }
    else if( _root.active == _root.tabs.length ) {
      _root.saveExpProccess = true;
      let postulacion = JSON.parse( _root.tools.decryptrData( localStorage.getItem('postulacion') ) );
      postulacion.estado = '1';

      if(postulacion.tipo_persona == '1') {
        postulacion.numero_documento = '00000000';
      }

      _root.apiService.postulacion(postulacion)
      .then((res:any) => {
        _root.saveExpProccess = false;
        if( res.data.postulacion_id !== undefined ) {
          _root.idPostulacion = (res.data.postulacion_id).toString();
          postulacion.id_postulacion = (res.data.postulacion_id).toString();

          if(sout == 'Y') {
            window.location.href = `${_root._win.relativePath}/`;
          }
        }
      })
      .catch((err:any) => {
        _root.saveExpProccess = false;
        if(sout != 'tab') {
          _root.tools.showToastr('', 'No se pudo guardar la información', 'error', 2000);
        }
      });
    }
  }

  onSaveFinish(tab, tabId, sout:string = 'N'): void {
    let _root = this;

    _root.showLightBox = true;
    _root.validateFormSendPostulacion = true;
  }

  onSaveFinishComplete() {
    let _root = this;
    if( _root.active == _root.tabs.length ) {
      // let _htmlpdf = document.getElementById('pdfdownload');
      let postulacion = JSON.parse( _root.tools.decryptrData( localStorage.getItem('postulacion') ) );

      if(postulacion.tipo_persona == '1') {
        postulacion.numero_documento = '00000000';
      }

      postulacion.estado = '2';

      if(postulacion.aceptacion_declara == true) {
        postulacion.aceptacion_declara = '1';
      }
      else {
        postulacion.aceptacion_declara = '0';
      }

      _root.saveExpProccess = true;

      _root.apiService.postulacionValidaEnvio(postulacion.id_postulacion)
      .then((res:any) => {
        _root.saveExpProccess = false;
        if(res.status !== undefined) {
          if(res.status == 200) {
            postulacion.estado = '2';
            _root.apiService.postulacion(postulacion)
            .then((res:any) => {
              _root.saveExpProccess = false;
              if( res.data.postulacion_id !== undefined ) {
                window.location.href = `${_root._win.relativePath}/`;
              }
            })
            .catch((err:any) => {
              _root.saveExpProccess = false;
              _root.tools.showToastr('', 'No se pudo guardar la información', 'error', 2000);
            });
          }
          else {
            _root.tools.showToastr('', 'No se puede enviar la postulación, la mención debe ser diferente', 'error', 2000);
          }
        }
      })
      .catch((err:any) => {
        _root.saveExpProccess = false;
        _root.tools.showToastr('', 'No se puede validar la postulación', 'error', 2000);
      });
    }
  }

  onSaveFinishCancel() {
    let _root = this;
    _root.showLightBox = false;
    _root.validateFormSendPostulacion = false;
  }

  getUpdatedvalue(event, field, currentTab): void {
    let fieldsIncomplete = [];
    field.value = event;

    if(field.isRequired) {
      if(field.value != '') {
        field.hasValue = true;
      }
      else {
        field.hasValue = false;
      }
    }

    for(let tab of this.tabs) {
      if(tab.id == currentTab.id) {
        for(let f of tab.form) {
          for(let fld of f.fields) {
            if(fld.hasValue == false) {
              fieldsIncomplete.push(fld.hasValue);
            }
          }
        }
      }
    }

    if(fieldsIncomplete.length > 0) {
      currentTab.isComplete = false;
    }
    else {
      currentTab.isComplete = true;
    }
  }

}
