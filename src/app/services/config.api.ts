export class ConfigApi {

    // URL_API:string = 'https://pruebamesavirtual.minam.gob.pe:8443/premioAmbientalServicios';
    URL_API:string = 'http://3.21.132.69:8080/premioAmbientalServicios';

    constructor() {
        
    }

    getEndpoint() {
        return {
            login: `${this.URL_API}/api/login`,
            register: `${this.URL_API}/api/user/register`,
            user: `${this.URL_API}/api/user`,
            userUpdate: `${this.URL_API}/api/user/update`,
            postulacion: `${this.URL_API}/api/postulacion/datos_generales`,
            postulacionDelete: `${this.URL_API}/api/postulacion`,
            validarEnvioPostulacion: `${this.URL_API}/api/postulacion/validar_envio`,
            experiencia: `${this.URL_API}/api/postulacion/datos_experiencias`,

            // PREGUNTAS
            preguntaListar: `${this.URL_API}/api/postulacion/pregunta/listar`,
            preguntaSavedList: `${this.URL_API}/api/postulacion/pregunta/simple`,
            preguntaSave: `${this.URL_API}/api/postulacion/pregunta/simple`,
            preguntaTableSave: `${this.URL_API}/api/postulacion/pregunta/tabla`,
            preguntaTableSavedList: `${this.URL_API}/api/postulacion/pregunta/tabla`,

            preguntaTablaListar: `${this.URL_API}/api/postulacion/pregunta/listar-tablas`,

            // UBIGEO
            departamentos: `${this.URL_API}/api/ubigeo/departamentos`,
            provincias: `${this.URL_API}/api/ubigeo/provincias`,
            distritos: `${this.URL_API}/api/ubigeo/distritos`,

            // CATEGORIAS
            categorias: `${this.URL_API}/api/postulacion/categorias_mencion`,

            personaNatural: `${this.URL_API}/api/transparencia/persona-natural`,
            personaJuridica: `${this.URL_API}/api/transparencia/persona-juridica?id=20535948594`,

            // FILES
            // uploadFile: `${this.URL_API}/api/file/alf/upload`,
            uploadFile: `${this.URL_API}/api/file/upload`,
            document: `${this.URL_API}/api/documeto`,

            // CONTRASEÑA
            recover: `${this.URL_API}/api/user/recover/step01`,
            recoverConfirm: `${this.URL_API}/api/user/recover/step02`,

            ipjson: 'https://ipapi.co/json'
        }
    }
}