import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { FormService } from '../../services/form.service';
import { UserService } from '../../services/user.service';
import { ApiService } from '../../services/api.service';
import { IPostulacion } from '../../interfaces/postulacion';
import { IExperiencia } from '../../interfaces/experiencia';
import { IUserProfile } from '../../interfaces/user-profile';
import Tools from '../../utils/tools';

@Component({
  selector: 'app-form-tab',
  templateUrl: './form-tab.component.html',
  styleUrls: ['./form-tab.component.scss']
})
export class FormTabComponent implements OnInit, OnChanges {

  value?: string = '100';

  @Input() formName:string = '';
  @Input() idPostulacion:string = '';
  tools = new Tools();
  aceptacion_declara:boolean = false;

  files: File[] = [];

  documents:any = [];
  images_repre:any = [];
  tipoPersona:string = '';

  // UBIGEO
  departamentos:any = [];
  provincias:any = [];
  distritos:any = [];

  // TAXONOMIAS
  categorias:any = [];
  menciones_prev:any = [];
  menciones:any = [];
  mencionTitle:string = '';
  mencionDesc:string = '';

  preguntasMencion:any = [];
  preguntasTablaAnswer:any = [];
  documentosOrientados:any = [
    {value: ''},
    {value: ''},
    {value: ''},
    {value: ''},
    {value: ''}
  ];

  tipoNumeroDocumentoDeclara:any = '';
  numeroDocumentoDeclara:any = '';

  // EXPERIENCIA
  a1:boolean = null;
  a2:boolean = null;
  a3:boolean = null;
  a4:boolean = null;
  a5:boolean = null;
  a6:boolean = null;

  userProfile:IUserProfile = {
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

  postulacion:IPostulacion = {
    id_postulacion: '0',
    categoria: '',
    mencion: '',
    titulo: '',
    departamento: '',
    provincia: '',
    distrito: '',
    localidad: '',
    direccion: '',
    tipo_persona: '',
    tipo_experiencia: '',
    nombre_completo: '',
    nom_representante: '',
    cargo_postulante: '',
    telefono: '',
    email: '',
    red_social_postulante: '',
    numero_documento: '',
    domicilio_legal: '',
    nombre_organizacion: '',
    breve_resumen: '',
    obj_postulacion: '',
    inclusion_postulacion: '',
    sostenibilidad_postulacion: '',
    replicabilidad_postulacion: '',
    link_video: '',
    link_video1: '',
    link_video2: '',
    link_video3: '',
    link_video4: '',
    nombre_postulante_declara: '',
    tipo_number_doc_declara: '',
    direccion_postulante_declara: '',
    cantidad_documentos: '1',
    sitio_web_postulante: ''
  };

  experiencia: IExperiencia = {
    contexto_experiencia: '',
    aporte_solucion: '',
    detalle_principales_result: '',
    detalle_resumen_experiencia: '',
    poblacion_beneficiada: '',
    nro_personas_benef: '',
    fuentes_financiamiento: '',
    documentos_orientadores: '',
    recursos_accesibles: '',
    desarrollo_capacidades: '',
    incentvos_economicos: '',
    detalle_apropiacion_exp: '',
    cambios_positivos: '',
    factores_riesgo: '',
    factores_exito: '',
    condiciones_experiencia: '',
    actividades_necesarias: '',
    contacto_nombre1: '',
    contacto_telefono1: '',
    contacto_correo1: '',
    contacto_nombre2: '',
    contacto_telefono2: '',
    contacto_correo2: '',
    contacto_nombre3: '',
    contacto_telefono3: '',
    contacto_correo3: '',
    seccion4_cuenta1: '',
    seccion4_detalle1: '',
    seccion4_cuenta2: '',
    seccion4_detalle2: '',
    seccion4_cuenta3: '',
    seccion4_detalle3: '',
    seccion4_cuenta4: '',
    seccion4_detalle4: '',
    seccion4_cuenta5: '',
    seccion4_detalle5: '',
    seccion4_cuenta6: '',
    seccion4_detalle6: '',
    seccion4_cuenta7: '',
    seccion4_detalle7: '',
    seccion4_cuenta8: '',
    seccion4_detalle8: '',
    seccion4_cuenta9: '',
    seccion4_detalle9: '',
    seccion4_cuenta10: '',
    seccion4_detalle10: '',
    seccion4_cuenta11: '',
    seccion4_detalle11: '',
    seccion4_cuenta12: '',
    seccion4_detalle12: '',
    detalle_logros_experiencia: '',
    alcance_geografico: '',
    recursos_educativos: '',
    recursos_educativos_web: ''
  }

  constructor(
    private globalService: GlobalService,
    private userService: UserService,
    private formService: FormService,
    private apiService: ApiService
  ) {
    let _root = this;
  }

  ngOnInit(): void {
    let _root = this;

    _root.tools.showPreloader();

    if(_root.formName == 'datos_gen') {
      _root.apiService.departamentos()
      .then((res:any) => {
        _root.departamentos = res.body.data;
  
        return _root.apiService.categorias();
      })
      .then((res:any) => {
        if(res.status == 200) {
          let _categorias = [];
          let _menciones = [];
          for(let item of res.body.data) {
            if(item.recurso == 'categoria') {
              item.id = (item.id).toString();
              item.parent_id = (item.parent_id).toString();
              _categorias.push(item);
            }
            if(item.recurso == 'mencion') {
              item.id = (item.id).toString();
              item.parent_id = (item.parent_id).toString();
              _menciones.push(item);
            }
          }
  
          _root.categorias = _root.tools.listToTree(_categorias);
          _root.menciones_prev = _menciones;
          
          _root.loadData();
        }
      })
      .catch((err:any) => {
        _root.tools.hidePreloader();
      });
    }
    else {
      _root.loadData();
    }
  }

  ngOnChanges(): void {
    this.loadMencionAnswer();
  }

  loadData() {
    let _root = this;

    _root.userProfile = JSON.parse(_root.tools.decryptrData(localStorage.getItem('user_profile')));
    _root.userProfile.id_tipo_documento = parseInt(_root.userProfile.id_tipo_documento);

    // _root.postulacion.email = _root.userProfile.correo;
    // _root.postulacion.numero_documento = _root.userProfile.numero_documento;

    if(_root.idPostulacion != '') {
      _root.apiService.postulacionById(_root.idPostulacion)
      .then((res:any) => {
        if(res.data !== undefined) {
          if(res.data.length > 0) {
            let DG = res.data[0];
            _root.postulacion.id_postulacion = (DG.id_postulacion).toString();

            if( (DG.id_categoria).toString() != '' ) {
              let _menciones = [];
              for(let item of _root.menciones_prev) {
                if(item.parent_id == (DG.id_categoria).toString()) {
                  _menciones.push(item);
                }
              }
              _root.menciones = _root.tools.listToTree(_menciones);
            }
            _root.postulacion.categoria = (DG.id_categoria).toString();
            _root.postulacion.mencion = (DG.id_mencion).toString();

            _root.postulacion.titulo = DG.titulo_postulacion;
            _root.postulacion.departamento = DG.departamento_postulacion;
            _root.postulacion.provincia = DG.provincia_postulacion;
            _root.postulacion.distrito = DG.distrito_postulacion;

            if(_root.formName == 'img_repre') {
              _root.loadFiles();
            }

            if(_root.formName == 'anex_sust') {
              _root.loadFiles();
            }

            if((_root.formName == 'datos_gen') || (_root.formName == 'anex_sust') || (_root.formName == 'dec_jur')) {

              if(_root.formName == 'datos_gen') {
                if( DG.provincia_postulacion != '' ) {
                  _root.apiService.provincias(DG.departamento_postulacion)
                  .then((res:any) => {
                    _root.provincias = res.body.data;
                  })
                  .catch((err:any) => {
      
                  });
                }
    
                if( DG.distrito_postulacion != '' ) {
                  _root.apiService.distritos(DG.departamento_postulacion, DG.provincia_postulacion)
                  .then((res:any) => {
                    _root.distritos = res.body.data;
                  })
                  .catch((err:any) => {
      
                  });
                }
              }
              
              _root.postulacion.localidad = (DG.localidad_postulacion !== null) ? DG.localidad_postulacion : '';
              _root.postulacion.direccion = (DG.direccion_postulacion !== null) ? DG.direccion_postulacion : '';
              _root.postulacion.tipo_persona = (DG.tipo_persona !== null) ? (DG.tipo_persona).toString() : '';
              _root.tipoPersona = (DG.tipo_persona !== null) ? (DG.tipo_persona).toString() : '';
              _root.postulacion.tipo_experiencia = (DG.tipo_experiencia !== null) ? (DG.tipo_experiencia).toString() : '';
              _root.postulacion.nombre_completo = (DG.nombre_organizacion_natural !== null) ? DG.nombre_organizacion_natural : '';
              _root.postulacion.nom_representante = (DG.representante_legal !== null) ? DG.representante_legal : '';
              _root.postulacion.cargo_postulante = (DG.cargo_postulante !== null) ? DG.cargo_postulante : '';
              _root.postulacion.telefono = (DG.telefono_postulante !== null) ? DG.telefono_postulante : '';
              _root.postulacion.email = (DG.correo_postulante !== null) ? DG.correo_postulante : '';
              _root.postulacion.red_social_postulante = (DG.red_social_postulante !== null) ? DG.red_social_postulante : '';
              _root.postulacion.numero_documento = (DG.numero_documento !== null) ? DG.numero_documento : '';
              _root.postulacion.domicilio_legal = (DG.domicilio_legal !== null) ? DG.domicilio_legal : '';
              _root.postulacion.nombre_organizacion = (DG.nombre_organizacion !== null) ? DG.nombre_organizacion : '';
              _root.postulacion.breve_resumen = (DG.resumen_postulacion !== null) ? DG.resumen_postulacion : '';
              _root.postulacion.obj_postulacion = (DG.objeto_postulacion !== null) ? DG.objeto_postulacion : '';
              _root.postulacion.inclusion_postulacion = (DG.inclusion_postulacion !== null) ? DG.inclusion_postulacion : '';
              _root.postulacion.sostenibilidad_postulacion = (DG.sostenibilidad_postulacion !== null) ? DG.sostenibilidad_postulacion : '';
              _root.postulacion.replicabilidad_postulacion = (DG.replicabilidad_postulacion !== null) ? DG.replicabilidad_postulacion : '';
              _root.postulacion.link_video = (DG.link_video !== null) ? DG.link_video : '';
              _root.postulacion.link_video1 = (DG.link_video1 !== null) ? DG.link_video1 : '';
              _root.postulacion.link_video2 = (DG.link_video2 !== null) ? DG.link_video2 : '';
              _root.postulacion.link_video3 = (DG.link_video3 !== null) ? DG.link_video3 : '';
              _root.postulacion.link_video4 = (DG.link_video4 !== null) ? DG.link_video4 : '';
              _root.postulacion.tipo_number_doc_declara = (DG.tipo_number_doc_declara !== null) ? DG.tipo_number_doc_declara : '';
              _root.postulacion.nombre_postulante_declara = (DG.nombre_postulante_declara !== null) ? DG.nombre_postulante_declara : '';
              _root.postulacion.direccion_postulante_declara = (DG.direccion_postulante_declara !== null) ? DG.direccion_postulante_declara : '';
              _root.postulacion.sitio_web_postulante = (DG.sitio_web_postulante !== null) ? DG.sitio_web_postulante : '';
              _root.postulacion.aceptacion_declara = (DG.aceptacion_declara !== null) ? DG.aceptacion_declara : 0;

              if(_root.formName == 'dec_jur') {
                if(_root.postulacion.tipo_number_doc_declara != '') {
                  let _arr = (_root.postulacion.tipo_number_doc_declara).split('-');
  
                  if(_arr[0] == 'DNI') {
                    _root.tipoNumeroDocumentoDeclara = '1';
                  }
                  else if(_arr[0] == 'Carmet de extrnajería') {
                    _root.tipoNumeroDocumentoDeclara = '2';
                  }
                  _root.numeroDocumentoDeclara = _arr[1];
                }

                console.log( _root.postulacion.aceptacion_declara );
  
                if(!_root.postulacion.aceptacion_declara) {
                  _root.postulacion.aceptacion_declara = false;
                }
                else {
                  _root.postulacion.aceptacion_declara = true;
                }
              }
  
              localStorage.setItem('postulacion', _root.tools.cryptrData( JSON.stringify(_root.postulacion) ));
            }
          }
        }

        return _root.apiService.experienciaById(_root.idPostulacion);
      })
      .then((res:any) => {
        if( res.status !== undefined ) {
          if( res.status == 200 ) {
            let DE = res.data;

            _root.experiencia.contexto_experiencia = ( DE.contexto_experiencia !== null ) ? DE.contexto_experiencia : '';
            _root.experiencia.aporte_solucion = ( DE.aporte_solucion !== null ) ? DE.aporte_solucion : '';
            _root.experiencia.detalle_principales_result = ( DE.detalle_principales_resultados !== null ) ? DE.detalle_principales_resultados : '';
            _root.experiencia.detalle_resumen_experiencia = ( DE.detalle_resumen_experiencia !== null ) ? DE.detalle_resumen_experiencia : '';
            _root.experiencia.poblacion_beneficiada = ( DE.poblacion_beneficiada !== null ) ? DE.poblacion_beneficiada : '';
            _root.experiencia.nro_personas_benef = ( DE.nro_personas_benef !== null ) ? DE.nro_personas_benef : '';
            _root.experiencia.fuentes_financiamiento = ( DE.fuentes_financiamiento !== null ) ? DE.fuentes_financiamiento : '';
            _root.experiencia.documentos_orientadores = ( DE.documentos_orientadores !== null ) ? DE.documentos_orientadores : '';
            _root.experiencia.recursos_accesibles = ( DE.recursos_accesibles !== null ) ? DE.recursos_accesibles : '';
            _root.experiencia.desarrollo_capacidades = ( DE.desarrollo_capacidades !== null ) ? DE.desarrollo_capacidades : '';
            _root.experiencia.incentvos_economicos = ( DE.incentvos_economicos !== null ) ? DE.incentvos_economicos : '';
            _root.experiencia.detalle_apropiacion_exp = ( DE.detalle_apropiacion_exp !== null ) ? DE.detalle_apropiacion_exp : '';
            _root.experiencia.cambios_positivos = ( DE.cambios_positivos !== null ) ? DE.cambios_positivos : '';
            _root.experiencia.factores_riesgo = ( DE.factores_riesgo !== null ) ? DE.factores_riesgo : '';
            _root.experiencia.factores_exito = ( DE.factores_exito !== null ) ? DE.factores_exito : '';
            _root.experiencia.condiciones_experiencia = ( DE.condiciones_experiencia !== null ) ? DE.condiciones_experiencia : '';
            _root.experiencia.actividades_necesarias = ( DE.actividades_necesarias !== null ) ? DE.actividades_necesarias : '';
            _root.experiencia.contacto_nombre1 = ( DE.contacto_nombre1 !== null ) ? DE.contacto_nombre1 : '';
            _root.experiencia.contacto_telefono1 = ( DE.contacto_telefono1 !== null ) ? DE.contacto_telefono1 : '';
            _root.experiencia.contacto_correo1 = ( DE.contacto_correo1 !== null ) ? DE.contacto_correo1 : '';
            _root.experiencia.contacto_nombre2 = ( DE.contacto_nombre2 !== null ) ? DE.contacto_nombre2 : '';
            _root.experiencia.contacto_telefono2 = ( DE.contacto_telefono2 !== null ) ? DE.contacto_telefono2 : '';
            _root.experiencia.contacto_correo2 = ( DE.contacto_correo2 !== null ) ? DE.contacto_correo2 : '';
            _root.experiencia.contacto_nombre3 = ( DE.contacto_nombre3 !== null ) ? DE.contacto_nombre3 : '';
            _root.experiencia.contacto_telefono3 = ( DE.contacto_telefono3 !== null ) ? DE.contacto_telefono3 : '';
            _root.experiencia.contacto_correo3 = ( DE.contacto_correo3 !== null ) ? DE.contacto_correo3 : '';
            _root.experiencia.seccion4_cuenta1 = ( DE.seccion4_cuenta1 !== null ) ? DE.seccion4_cuenta1 : '';
            _root.experiencia.seccion4_detalle1 = ( DE.seccion4_detalle1 !== null ) ? DE.seccion4_detalle1 : '';
            _root.experiencia.seccion4_cuenta2 = ( DE.seccion4_cuenta2 !== null ) ? DE.seccion4_cuenta2 : '';
            _root.experiencia.seccion4_detalle2 = ( DE.seccion4_detalle2 !== null ) ? DE.seccion4_detalle2 : '';
            _root.experiencia.seccion4_cuenta3 = ( DE.seccion4_cuenta3 !== null ) ? DE.seccion4_cuenta3 : '';
            _root.experiencia.seccion4_detalle3 = ( DE.seccion4_detalle3 !== null ) ? DE.seccion4_detalle3 : '';
            _root.experiencia.seccion4_cuenta4 = ( DE.seccion4_cuenta4 !== null ) ? DE.seccion4_cuenta4 : '';
            _root.experiencia.seccion4_detalle4 = ( DE.seccion4_detalle4 !== null ) ? DE.seccion4_detalle4 : '';
            _root.experiencia.seccion4_cuenta5 = ( DE.seccion4_cuenta5 !== null ) ? DE.seccion4_cuenta5 : '';
            _root.experiencia.seccion4_detalle5 = ( DE.seccion4_detalle5 !== null ) ? DE.seccion4_detalle5 : '';
            _root.experiencia.seccion4_cuenta6 = ( DE.seccion4_cuenta6 !== null ) ? DE.seccion4_cuenta6 : '';
            _root.experiencia.seccion4_detalle6 = ( DE.seccion4_detalle6 !== null ) ? DE.seccion4_detalle6 : '';
            _root.experiencia.seccion4_cuenta7 = ( DE.seccion4_cuenta7 !== null ) ? DE.seccion4_cuenta7 : '';
            _root.experiencia.seccion4_detalle7 = ( DE.seccion4_detalle7 !== null ) ? DE.seccion4_detalle7 : '';
            _root.experiencia.seccion4_cuenta8 = ( DE.seccion4_cuenta8 !== null ) ? DE.seccion4_cuenta8 : '';
            _root.experiencia.seccion4_detalle8 = ( DE.seccion4_detalle8 !== null ) ? DE.seccion4_detalle8 : '';
            _root.experiencia.seccion4_cuenta9 = ( DE.seccion4_cuenta9 !== null ) ? DE.seccion4_cuenta9 : '';
            _root.experiencia.seccion4_detalle9 = ( DE.seccion4_detalle9 !== null ) ? DE.seccion4_detalle9 : '';
            _root.experiencia.seccion4_cuenta10 = ( DE.seccion4_cuenta10 !== null ) ? DE.seccion4_cuenta10 : '';
            _root.experiencia.seccion4_detalle10 = ( DE.seccion4_detalle10 !== null ) ? DE.seccion4_detalle10 : '';
            _root.experiencia.seccion4_cuenta11 = ( DE.seccion4_cuenta11 !== null ) ? DE.seccion4_cuenta11 : '';
            _root.experiencia.seccion4_detalle11 = ( DE.seccion4_detalle11 !== null ) ? DE.seccion4_detalle11 : '';
            _root.experiencia.seccion4_cuenta12 = ( DE.seccion4_cuenta12 !== null ) ? DE.seccion4_cuenta12 : '';
            _root.experiencia.seccion4_detalle12 = ( DE.seccion4_detalle12 !== null ) ? DE.seccion4_detalle12 : '';
            _root.experiencia.detalle_logros_experiencia = ( DE.detalle_logros_experiencia !== null ) ? DE.detalle_logros_experiencia : '';
            _root.experiencia.alcance_geografico = ( DE.alcance_geografico !== null ) ? DE.alcance_geografico : '';
            _root.experiencia.recursos_educativos = ( DE.recursos_educativos !== null ) ? DE.recursos_educativos : '';
            _root.experiencia.recursos_educativos_web = ( DE.recursos_educativos_web !== null ) ? DE.recursos_educativos_web : '';

            if( _root.experiencia.seccion4_cuenta1 !== null ) {
              if(_root.experiencia.seccion4_cuenta1 != '') {
                if(_root.experiencia.seccion4_cuenta1 == 'SI') {
                  _root.a1 = true;
                }
                else {
                  _root.a1 = false;
                }
              }
              else {
                _root.a1 = false;
              }
            }
            else {
              _root.a1 = null;
            }

            if( _root.experiencia.seccion4_cuenta2 !== null ) {
              if(_root.experiencia.seccion4_cuenta2 != '') {
                if(_root.experiencia.seccion4_cuenta2 == 'SI') {
                  _root.a2 = true;
                }
                else {
                  _root.a2 = false;
                }
              }
              else {
                _root.a2 = false;
              }
            }
            else {
              _root.a2 = null;
            }

            if( _root.experiencia.seccion4_cuenta3 !== null ) {
              if(_root.experiencia.seccion4_cuenta3 != '') {
                if(_root.experiencia.seccion4_cuenta3 == 'SI') {
                  _root.a3 = true;
                }
                else {
                  _root.a3 = false;
                }
              }
              else {
                _root.a3 = false;
              }
            }
            else {
              _root.a3 = null;
            }

            if( _root.experiencia.seccion4_cuenta4 !== null ) {
              if(_root.experiencia.seccion4_cuenta4 != '') {
                if(_root.experiencia.seccion4_cuenta4 == 'SI') {
                  _root.a4 = true;
                }
                else {
                  _root.a4 = false;
                }
              }
              else {
                _root.a4 = false;
              }
            }
            else {
              _root.a4 = null;
            }

            if( _root.experiencia.seccion4_cuenta5 !== null ) {
              if(_root.experiencia.seccion4_cuenta5 != '') {
                if(_root.experiencia.seccion4_cuenta5 == 'SI') {
                  _root.a5 = true;
                }
                else {
                  _root.a5 = false;
                }
              }
              else {
                _root.a5 = false;
              }
            }
            else {
              _root.a5 = null;
            }

            if( _root.experiencia.seccion4_cuenta6 !== null ) {
              if(_root.experiencia.seccion4_cuenta6 != '') {
                if(_root.experiencia.seccion4_cuenta6 == 'SI') {
                  _root.a6 = true;
                }
                else {
                  _root.a6 = false;
                }
              }
              else {
                _root.a6 = false;
              }
            }
            else {
              _root.a6 = null;
            }

            let _docoarr = (_root.experiencia.documentos_orientadores).split('|');
            if(_docoarr[0] !== undefined) { _root.documentosOrientados[0].value = _docoarr[0]; }
            if(_docoarr[1] !== undefined) { _root.documentosOrientados[1].value = _docoarr[1]; }
            if(_docoarr[2] !== undefined) { _root.documentosOrientados[2].value = _docoarr[2]; }
            if(_docoarr[3] !== undefined) { _root.documentosOrientados[3].value = _docoarr[3]; }
            if(_docoarr[4] !== undefined) { _root.documentosOrientados[4].value = _docoarr[4]; }

            let _arrdoc = [];
            for(let docor of _root.documentosOrientados) {
              _arrdoc.push(docor.value);
            }
            _root.experiencia.documentos_orientadores = _arrdoc.join('|');

            localStorage.setItem('experiencia', _root.tools.cryptrData( JSON.stringify(_root.experiencia) ));
          }
        }

        _root.tools.hidePreloader();
      })
      .catch((err:any) => {
        _root.tools.hidePreloader();
      });
    }
    else {
      _root.tools.hidePreloader();
    }
  }

  loadFiles() {
    let _root = this;

    _root.documents = [];
    _root.images_repre = [];

    _root.apiService.listFile(_root.idPostulacion)
    .then((res:any) => {
      for(let file of res) {
        if(file.tipo_documento == 'SU') {
          _root.documents.push(file);
        }
        else if(file.tipo_documento == 'IR') {
          _root.images_repre.push(file);
        }
      }
    })
    .catch((err:any) => {

    });
  }

  loadMencionAnswer() {
    let _root = this;

    if(_root.formName == 'info_esp') {
      if(_root.idPostulacion != '') {
        if( localStorage.getItem('postulacion') ) {
          let _preguntasMencionTabla = [];
          let postulacion = JSON.parse( _root.tools.decryptrData( localStorage.getItem('postulacion') ) );

          return _root.apiService.preguntaTablaSavedList(_root.idPostulacion)
          .then((res:any) => {

            if(res.status == 200) {
              if( res.body.data.length > 0 ) {
                _root.preguntasTablaAnswer = res.body.data;
              }
            }

            return _root.apiService.preguntaTablaListar(postulacion.mencion);
          })
          .then((res:any) => {
            if(res.status == 200) {
              if( res.body.data.length > 0 ) {
                _preguntasMencionTabla = res.body.data;
              }
            }
            
            return _root.apiService.preguntaListar(postulacion.mencion);
          })
          .then((res:any) => {
            if(res.status == 200) {
              if( res.body.data.length > 0 ) {
                let _count = 0;
                let _data = [];
                for(let item of res.body.data) {
                  if( _count == 0 ) {
                    let _formMencion = _root.formService.getFormMencion(item.titulo_mencion);
                    _root.mencionTitle = item.titulo_mencion;
                    _root.mencionDesc = _formMencion.description;
                    _data = _formMencion.fields;
                  }
                  _count = (_count + 1);
                }

                for(let item of _data) {
                  if(item.tipo_campo == 'tabla') {
                    for(let ittem of _preguntasMencionTabla) {
                      if(item.id_campo == ittem.id_campo) {
                        ittem.answers = {};
                        item.tabla = ittem;
                      }
                    }
                  }
                  item.value = '';
                }
                _root.preguntasMencion = _data;
              }
            }

            return _root.apiService.preguntaSavedList(_root.idPostulacion);
          })
          .then((res:any) => {
            if(res.status == 200) {
              if( res.body.data.length > 0 ) {
                for(let item of res.body.data) {
                  for(let itemj of _root.preguntasMencion) {
                    if(item.id_campo == itemj.id_campo) {
                      itemj.value = item.valor_texto;
                    }
                  }
                }
              }
            }

            return _root.apiService.preguntaTablaSavedList(_root.idPostulacion);
          })
          .catch((err:any) => {

          });
        }
      }
    }
  }

  getValueTablaRow(idc, row, col) {
    let _root = this;
    
    for(let item of _root.preguntasTablaAnswer) {
      if((item.id_campo == idc) && (item.fila == row)) {
        if(item[`valor_col_${col}`] !== null) {
          return item[`valor_col_${col}`];
        }
        else {
          return '';
        }
      }
    }
  }

  getTypeInput(title) {
    let type = 'text';
    switch (title) {
      case 'Fecha':
        type = 'date';
        break;

      case 'Si':
        type = 'sino';
        break;

      case 'Sí':
        type = 'sino';
        break;

      case 'No':
        type = 'sino';
        break;
    
      default:
        type = 'text';
        break;
    }

    if(title !== undefined) {
      if( title.indexOf('con una X') !== -1 ) {
        type = 'check';
      }
    }

    return type;
  }

  getValueSiNo(title) {
    let type = '';
    switch (title) {
      case 'Si':
        type = 'SI';
        break;

      case 'Sí':
        type = 'SI';
        break;

      case 'No':
        type = 'NO';
        break;
    }

    if(title !== undefined) {
      if( title.indexOf('con una X') !== -1 ) {
        type = 'SI';
      }
    }

    return type;
  }

  onClickCollapse(event) {
    if(event.target.parentNode.children[1].classList.contains('collapse')) {
      event.target.parentNode.children[1].classList.remove('collapse');
    }
    else {
      event.target.parentNode.children[1].classList.add('collapse');
    }
  }

  onSelect(event, type:string = '') {
    let _root = this;

    _root.files = [];

    _root.files.push(...event.addedFiles);

    if( localStorage.getItem('postulacion') ) {
      let postulacion = JSON.parse( _root.tools.decryptrData(localStorage.getItem('postulacion')) );

      if(postulacion.id_postulacion != '') {
        
        if(_root.files.length > 0) {

          let _counter = 0;
          _root.tools.showPreloader();
  
          for(let file of _root.files) {

            if( _root.tools.checkExtensionFiles(file.name, type) ) {
              if( _root.tools.validateFileSize(file.size, type) ) {

                const formData = new FormData();
                formData.append('file', file);
        
                _root.apiService.uploadFile(formData, postulacion.id_postulacion)
                .then((res:any) => {
                  if(res.fileDownloadUri !== undefined) {
                    let _obj = {
                      id_postulacion: postulacion.id_postulacion,
                      tipo_documento: type,
                      nombre_documento: res.fileName,
                      ruta: res.fileDownloadUri,
                      id_documento: '0',
                    };
        
                    _root.apiService.saveFile(_obj)
                    .then((res1:any) => {
                      _root.documents = [];
                      _root.images_repre = [];
      
                      _root.apiService.listFile(postulacion.id_postulacion)
                      .then((res:any) => {
                        _counter = _counter + 1;

                        console.log( _counter );
                        if( _counter == _root.files.length) {
                          _root.tools.hidePreloader();
                        }

                        for(let file of res) {
                          if(file.tipo_documento == 'SU') {
                            _root.documents.push(file);
                          }
                          else if(file.tipo_documento == 'IR') {
                            _root.images_repre.push(file);
                          }
                        }
                      })
                      .catch((err:any) => {
                        _root.tools.hidePreloader();
                      });
                    })
                    .catch((err:any) => {
                      _root.tools.hidePreloader();
                    });
                  }
                })
                .catch((err:any) => {
                  console.log( err );
                });
              }
              else {
                _root.tools.showToastr('', 'Archivo demasiado pesado', 'error', 2000);
              }
            }
            else {
              _root.tools.showToastr('', 'No se permiten ese tipo de extensiones.', 'error', 2000);
            }
          }
          
        }
      }
    }

    
  }
  
  onRemove(event) {
    let _root = this;

    if(event.tipo_documento == 'SU') {
      _root.documents.splice(_root.documents.indexOf(event), 1);
    }
    else if(event.tipo_documento == 'IR') {
      _root.images_repre.splice(_root.images_repre.indexOf(event), 1);
    }

    _root.apiService.deleteFile(event.id_documento)
    .then((res:any) => {
      // _root.loadFiles();
    })
    .catch((err:any) => {

    });
  }

  onClickFile(event) {
    let _root = this;
    
    let _ext = event.nombre_documento.substr(event.nombre_documento.lastIndexOf('.') + 1);
    let _mimetype = _root.tools.checkMimeType(_ext);

    _root.apiService.downloadFile(event.ruta).subscribe(
      (result:Blob) => {
        let blob = new Blob([result], { type: _mimetype });
        let url = window.URL.createObjectURL(blob);
        let pwa = window.open(url);
        if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
            console.log( 'Please disable your Pop-up blocker and try again.');
        }
      },
      error => {
      }
    );
  }

  onKeyUp(event, limit:number = 10) {
    event.preventDefault();

    let _root = this;
    let _target = event.target;
    let _arr = (_target.value).split(' ');
    let _countArr = _root.countDeleteCleanData(_arr);
    let _msg = document.getElementById( _target.name );

    if( _countArr.length >= (parseInt(limit.toString())) ) {
      let _narr = [];
      for(let i = 0; i < (parseInt(limit.toString()) - 1); i++) {
        _narr.push( _countArr[i] );
      }
      _target.value = _narr.join(' ');
      _target.style.border = '2px solid red';
      _msg.textContent = `Ud. superó el límite de ${limit} palabras.`;
      _msg.style.display = 'block';
    }
    else {
      _msg.textContent = ``;
      _msg.style.display = 'none';
      _target.style.border = '1px solid #ced4da';
    }
  }

  countDeleteCleanData(arr) {
    for(let item of arr) {
      if(item == '') {
        arr.splice(arr.indexOf(item), 1);
      }
    }

    return arr;
  }

  onChange(event, type = '') {
    let _root = this;

    if( type == 'categoria' ) {
      _root.menciones = [];
      _root.postulacion.mencion = '';
      let _menciones = [];
      for(let item of _root.menciones_prev) {
        if(item.parent_id == event) {
          _menciones.push(item);
        }
      }
      _root.menciones = _root.tools.listToTree(_menciones);
    }
    
    if(event.target !== undefined) {
      event.preventDefault();

      let _target = event.target;

      switch (_target.name) {
        case 'tipo_persona':
          console.log( _target.value );
          _root.tipoPersona = _target.value;

          if(_root.tipoPersona == '2') {
            if(_root.postulacion.numero_documento == '00000000') {
              _root.postulacion.numero_documento = '';
            }
            _root.postulacion.tipo_experiencia = '1';
            _root.postulacion.nombre_completo = 'nombre';
          }
          else {
            _root.postulacion.numero_documento = '00000000';
            _root.postulacion.tipo_experiencia = '';
            _root.postulacion.nombre_completo = '';
          }
          break;

        case 'departamento':
          _root.provincias = [];
          _root.distritos = [];

          _root.postulacion.provincia = '';
          _root.postulacion.distrito = '';

          if( (_target.value).length > 0 ) {
            _root.apiService.provincias(_target.value)
            .then((res:any) => {
              _root.provincias = res.body.data;
            })
            .catch((err:any) => {

            });
          }
          break;

        case 'provincia':
          if( (_target.value).length > 0 ) {
            _root.apiService.distritos(_root.postulacion.departamento, _target.value)
            .then((res:any) => {
              _root.distritos = res.body.data;
            })
            .catch((err:any) => {

            });
          }
          break;

        case 'distrito':
          if( (_target.value).length > 0 ) {
            // console.log( _root.postulacion.departamento );
            // console.log( _root.postulacion.provincia );
            // console.log( _root.postulacion.distrito );
          }
          break;

        // case 'aceptacion_declara':
          
        //   break;

        case 'tipo_documento_declara':
          if(_target.value == '1') {
            _root.postulacion.tipo_number_doc_declara = 'DNI-';
          }
          else if(_target.value == '2') {
            _root.postulacion.tipo_number_doc_declara = 'Carnet de extrnajería-';
          }
          break;

        case 'numero_documento_declara':
          _root.postulacion.tipo_number_doc_declara = `${_root.postulacion.tipo_number_doc_declara}${_target.value}`;
          break;

        case 'experiencia.documentos_orientadores':
          let _arr = [];
          for(let docor of _root.documentosOrientados) {
            _arr.push(docor.value);
          }
          _root.experiencia.documentos_orientadores = _arr.join('|');
          break;
      }
    }
    else {
      // console.log(event);
    }

    localStorage.setItem('postulacion', _root.tools.cryptrData( JSON.stringify(_root.postulacion) ));
    localStorage.setItem('experiencia', _root.tools.cryptrData( JSON.stringify(_root.experiencia) ));
  }

  onChangeYesNoMencion(event, item) {
    event.preventDefault();

    let _root = this;
    let _target = event.target;
    let _element;

    switch (_target.value) {
      case 'si':
        _element = document.getElementById(_target.name);
        _element.setAttribute('name', _target.value);
        _element.value = '';
        _element.style.display = 'block';
        break;

      case 'no':
        if( _root.idPostulacion != '' ) {
          let _obj = {
            id_campo: (item.id_campo).toString(),
            id_postulacion: _root.idPostulacion,
            valor_si_no: '0',
            valor_texto: `|no`
          };
          _root.apiService.preguntaSave(_obj)
          .then((res:any) => {
          })
          .catch((err:any) => {
          });
        }
        _element = document.getElementById(_target.name);
        _element.setAttribute('name', _target.value);
        _element.value = '';
        _element.style.display = 'none';
        break;
    }
  }

  onChangeAnswer(event, item, type:string = 'simple', to:string = '') {
    event.preventDefault();

    let _root = this;
    let _target = event.target;
    let _value = _target.value;

    if(type == 'SN') {
      if(_target.name !== undefined) {
        if(_target.name != '') {
          _value = `${_value}|${_target.name}`;

          let _obj = {
            id_campo: (item.id_campo).toString(),
            id_postulacion: _root.idPostulacion,
            valor_si_no: '1',
            valor_texto: _value
          };
          _root.apiService.preguntaSave(_obj)
          .then((res:any) => {
          })
          .catch((err:any) => {
          });
        }
      }
    }

    let _ctd = _target.parentNode.parentNode.parentNode;
    if(to == 'sn') {
      for(let item of _ctd.getElementsByClassName('field-table')) {
        if( item.getAttribute('data-class') == _target.getAttribute('data-class') ) {
          item.checked = false;
          item.value = '';
        }
      }

      
      _target.checked = true;
      _value = _target.value;
    }

    if(to == 'ch') {
      if( !_target.checked ) {
        _target.value = '';
      }
      else {
        _target.value = _target.getAttribute('data-value');
      }
    }

    // if(_target.value.length > 0) {
    if( _root.idPostulacion != '' ) {
      if(type == 'simple') {
        let _obj = {
          id_campo: (item.id_campo).toString(),
          id_postulacion: _root.idPostulacion,
          valor_si_no: '1',
          valor_texto: _value
        };
        _root.apiService.preguntaSave(_obj)
        .then((res:any) => {
        })
        .catch((err:any) => {
        });
      }
      else if(type == 'tabla') {

        let _fid = _target.getAttribute('id');
        let _crp = (_target.name).split('-');
        item['id_postulacion'] = _root.idPostulacion;
        item['id_campo'] = _fid.toString();
        item['fila'] = _crp[0].toString();
        
        for( let itemm of _ctd.getElementsByClassName('field-table') ) {
          let _cr = (itemm.name).split('-');
          item[`valor_col_${_cr[1]}`] = itemm.value;
        }

        _root.apiService.preguntaTablaSave(item)
        .then((res:any) => {
        })
        .catch((err:any) => {
        });
      }
    }
    // }
  }

  getValueAnswer(value, type:string = '') {
    let data = (value).split('|');
    if(type == 'sino') {
      return data[1];
    }
    else {
      return data[0];
    }
  }

  convertJsonToString(data) {
    return JSON.stringify(data);
  }

  onChangeYesNo(event) {
    let _root = this;
    let _target = event.target;

    if(_target.name == 'a1') {
      _root.experiencia.seccion4_detalle1 = '';
      if(_target.value == 'SI') {
        // _root.experiencia.seccion4_cuenta1 = 'Si';
        _root.a1 = true;
      }
      if(_target.value == 'NO') {
        _root.a1 = false;
      }
    }
    else if(_target.name == 'a2') {
      _root.experiencia.seccion4_detalle2 = '';
      if(_target.value == 'SI') {
        _root.a2 = true;
      }
      if(_target.value == 'NO') {
        _root.a2 = false;
      }
    }
    else if(_target.name == 'a3') {
      _root.experiencia.seccion4_detalle3 = '';
      if(_target.value == 'SI') {
        _root.a3 = true;
      }
      if(_target.value == 'NO') {
        _root.a3 = false;
      }
    }
    else if(_target.name == 'a4') {
      _root.experiencia.seccion4_detalle4 = '';
      if(_target.value == 'SI') {
        _root.a4 = true;
      }
      if(_target.value == 'NO') {
        _root.a4 = false;
      }
    }
    else if(_target.name == 'a5') {
      _root.experiencia.seccion4_detalle5 = '';
      if(_target.value == 'SI') {
        _root.a5 = true;
      }
      if(_target.value == 'NO') {
        _root.a5 = false;
      }
    }
    else if(_target.name == 'a6') {
      _root.experiencia.seccion4_detalle6 = '';
      if(_target.value == 'SI') {
        _root.a6 = true;
      }
      if(_target.value == 'NO') {
        _root.a6 = false;
      }
    }

    localStorage.setItem('experiencia', _root.tools.cryptrData( JSON.stringify(_root.experiencia) ));
  }

}
