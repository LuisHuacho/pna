import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  getForms() {

    return [
      {
        id: 1,
        tabLabel: 'I. Datos generales',
        tabDescription: '',
        isComplete: false,
        formType: 'static',
        tabName: 'datos_gen',
        form: []
      },
      {
        id: 2,
        tabLabel: 'II. Información general',
        tabDescription: 'En esta sección destaque de qué forma la experiencia ambiental que presenta cumple con los criterios de evaluación generales señalados en las Bases del Premio para la categoría y mención a la cual postula.',
        isComplete: false,
        formType: 'static',
        tabName: 'info_gen',
        form: []
      },
      {
        id: 3,
        tabLabel: 'III. Información específica',
        tabDescription: 'En esta sección se busca conocer cómo las intervenciones están orientadas al fortalecimiento y desarrollo de la conciencia y ciudadanía ambiental, mediante procesos educativos o de promoción comunitaria efectuados fuera de los espacios educativos formales.',
        isComplete: false,
        formType: 'static',
        tabName: 'info_esp',
        form: []
      },
      {
        id: 4,
        tabLabel: 'IV. Anexo de sustento',
        tabDescription: 'Adjunte evidencias que den cuenta de los resultados obtenidos con la experiencia. Utilice de 1 a 5 archivos de hasta 10 MB cada uno. Para archivos de mayor tamaño, usted puede utilizar sitios web que permitan almacenar y compartir archivos grandes, y anotar el enlace respectivo. (Pueden adjuntarse: publicaciones, fotos, reportajes en medios de comunicación, enlaces a páginas web y/o redes sociales, videos, otros)',
        isComplete: false,
        formType: 'static',
        tabName: 'anex_sust',
        form: []
      },
      {
        id: 5,
        tabLabel: 'V. Imagen representativa',
        tabDescription: 'Suba la fotografía más representante de su experiencia. Se recomienda que el tamaño sea de 1024x768 pixeles, con un peso entre 300KB y 1MB (como máximo)',
        isComplete: false,
        formType: 'static',
        tabName: 'img_repre',
        form: []
      },
      {
        id: 6,
        tabLabel: 'VI. Declaración jurada',
        isComplete: false,
        formType: 'static',
        tabName: 'dec_jur',
        form: []
      }
    ]
  }

  getFormMencion(mencion) {
    let forms = {
      'Educación ambiental comunitaria': {
        description: 'En esta sección se busca conocer cómo las intervenciones están orientadas al fortalecimiento y desarrollo de la conciencia y ciudadanía ambiental, mediante procesos educativos o de promoción comunitaria efectuados fuera de los espacios educativos formales.',
        fields: [
            {
                "descripcion": "<div class='desc-group'> <p class='group-title'><strong>1.Sobre la pertinencia de la experiencia educativa</strong></p> <p>Se busca conocer cómo la experiencia educativa concuerda con las prioridades ambientales locales, y con las necesidades de los participantes; y si esta enfoca la idoneidad de las formas de intervención en el contexto sociocultural local. Desarrolle la información solicitada en cada punto.</p><p class='ml-3'><strong>a. Temas educativos</strong></p><p class='ml-3'>Señale el/los principal/es tema/s educativo/s abordado/s y describa cómo enfoca/n los problemas ambientales significativos para la localidad. (Use hasta 200 palabras).</p></div>",
                "nombre_maquina": "1_a",
                "titulo_campo": "",
                "titulo_mencion": "Educación ambiental comunitaria",
                "id_campo_tipo": 1,
                "id_formulario": 1,
                "id_campo": 1,
                "tipo_campo": "texto",
                "limit": 200
            },
            {
                "descripcion": "<div class='desc-group'><p class='ml-3'><strong>b. Contenidos educativos</strong></p><p class='ml-3'>Describa en un máximo de 150 palabras cómo los contenidos educativos de su propuesta han sido adecuados a la realidad local para una mayor comprensión de los participantes.</p></div>",
                "nombre_maquina": "1_b",
                "titulo_campo": "",
                "titulo_mencion": "Educación ambiental comunitaria",
                "id_campo_tipo": 1,
                "id_formulario": 1,
                "id_campo": 2,
                "tipo_campo": "texto",
                "limit": 150
            },
            {
                "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>c. Didáctica</strong></p><p class='ml-3'>Describa en un máximo de 150 palabras al público objetivo (participantes) y la forma en la que interviene en las acciones desarrolladas.</p></div>",
                "nombre_maquina": "1_c",
                "titulo_campo": "",
                "titulo_mencion": "Educación ambiental comunitaria",
                "id_campo_tipo": 1,
                "id_formulario": 1,
                "id_campo": 3,
                "tipo_campo": "texto",
                "limit": 150
            },
            {
                "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>d. Uso de recursos y materiales locales</strong></p><p class='ml-3'>Señale qué recursos y materiales locales utiliza en la acción educativa y/o de comunicación y cómo se usan (Use máximo 150 palabras).</p></div>",
                "nombre_maquina": "1_d",
                "titulo_campo": "",
                "titulo_mencion": "Educación ambiental comunitaria",
                "id_campo_tipo": 1,
                "id_formulario": 1,
                "id_campo": 4,
                "tipo_campo": "texto",
                "limit": 150
            },
            {
                "descripcion": "<div class='desc-group'> <p class='ml-5'><strong>¿Cuál es el Lenguaje predominante en la localidad? </strong></p></div>",
                "nombre_maquina": "1_d_1",
                "titulo_campo": "",
                "titulo_mencion": "Educación ambiental comunitaria",
                "id_campo_tipo": 1,
                "id_formulario": 1,
                "id_campo": 5,
                "tipo_campo": "texto"
            },
            {
                "descripcion": "<div class='desc-group'> <p class='ml-5'><strong>¿Cuál es el nivel educativo de la mayoría de los participantes? </strong></p></div>",
                "nombre_maquina": "1_d_2",
                "titulo_campo": "",
                "titulo_mencion": "Educación ambiental comunitaria",
                "id_campo_tipo": 1,
                "id_formulario": 1,
                "id_campo": 6,
                "tipo_campo": "texto"
            },
            {
                "descripcion": "<div class='desc-group'> <p class='ml-5'><strong>¿El lenguaje que ha señalado, es utilizado en el material educativo y/o de comunicación?</strong></p></div>",
                "nombre_maquina": "1_d_3",
                "titulo_campo": "<p>Si su respuesta es SI, describa cómo (use hasta 100 palabras):</p>",
                "titulo_mencion": "Educación ambiental comunitaria",
                "id_campo_tipo": 1,
                "id_formulario": 1,
                "id_campo": 102,
                "tipo_campo": "texto",
                "sino": true,
                "id_sino": "m1_1d",
                "limit": 100
            },
            {
                "descripcion": "<div class='desc-group'><p class='ml-3'><strong>e. Describa cómo el material educativo y/o de comunicación ha sido adaptado para facilitar la\ncomprensión de los participantes (use hasta 100 palabras).</strong></p></div>",
                "nombre_maquina": "1_e",
                "titulo_campo": "",
                "titulo_mencion": "Educación ambiental comunitaria",
                "id_campo_tipo": 1,
                "id_formulario": 1,
                "id_campo": 103,
                "tipo_campo": "texto",
                "limit": 100
            },
            {
                "descripcion": "<div class='desc-group'> <p class='group-title'><strong>2. Sobre el aporte al ejercicio de los derechos de acceso</strong></p> <p>se busca conocer sobre el abordaje de los derechos de acceso a la información pública ambiental, participación en la toma de decisiones sobre asuntos públicos ambientales, y acceso a la justicia en asuntos ambientales, consagrados en los Artículos II, III y IV de la Ley Nº 28611, Ley General del Ambiente.Desarrolle la información solicitada en cada punto.</p> <p class='ml-3'><strong>a. Información ambiental</strong></p><p>Indique cuáles son las principales fuentes oficiales de información ambiental que utiliza, y coméntenos cómo promueve el uso de esta información entre los participantes para que adopten decisiones (use hasta 100 palabras):</p></div>",
                "nombre_maquina": "2_a",
                "titulo_campo": "",
                "titulo_mencion": "Educación ambiental comunitaria",
                "id_campo_tipo": 1,
                "id_formulario": 1,
                "id_campo": 104,
                "tipo_campo": "texto",
                "limit": 100
            },
            {
                "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Participación ciudadana</strong></p><p>Indique si se ha impulsado desde la Experiencia, que los participantes presenten propuestas en instancias de participación ciudadana en la gestión ambiental frente a decisiones de políticas, estrategias, planes y proyectos ambientales. (use hasta 100 palabras):</p></div>",
                "nombre_maquina": "2_b",
                "titulo_campo": "",
                "titulo_mencion": "Educación ambiental comunitaria",
                "id_campo_tipo": 1,
                "id_formulario": 1,
                "id_campo": 105,
                "tipo_campo": "texto",
                "limit": 100
            },
            {
                "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>c. Justicia ambiental</strong></p><p>¿La experiencia ha impulsado que los participantes presenten denuncias para proteger derechos ambientales o corregir daños ambientales haciendo uso de los mecanismos públicos establecidos para las denuncias ambientales?. (use hasta 100 palabras):</p></div>",
                "nombre_maquina": "2_c",
                "titulo_campo": "",
                "titulo_mencion": "Educación ambiental comunitaria",
                "id_campo_tipo": 1,
                "id_formulario": 1,
                "id_campo": 106,
                "tipo_campo": "texto",
                "limit": 100
            },
            {
                "descripcion": "<div class='desc-group'> <p class='group-title'><strong>3. Aporte a la corresponsabilidad socio-ambiental</strong></p> <p>se busca conocer cómo se enfoca la promoción de compromisos en interesados directos mediante la detección de la integralidad de la problemática ambiental, y su interrelación con fenómenos naturales y sociales; el diseño y puesta en práctica de soluciones; y el cumplimiento del principio de cooperación público privada, establecido en la Política Nacional del Ambiente.</p><p class='ml-3'>a. Explique cómo la Experiencia ha contribuido a que los participantes identifiquen su vinculación\ncon el problema socio-ambiental y las posibles acciones de solución.</p></div>",
                "nombre_maquina": "3_a",
                "titulo_campo": "",
                "titulo_mencion": "Educación ambiental comunitaria",
                "id_campo_tipo": 1,
                "id_formulario": 1,
                "id_campo": 107,
                "tipo_campo": "texto",
                "limit": 100
            },
            {
                "descripcion": "<div class='desc-group'><p class='ml-3'>b. Señale cómo la experiencia ha contribuido a que los participantes asuman responsabilidad en\nla solución del problema socio-ambiental identificado.</p></div>",
                "nombre_maquina": "3_b",
                "titulo_campo": "",
                "titulo_mencion": "Educación ambiental comunitaria",
                "id_campo_tipo": 1,
                "id_formulario": 1,
                "id_campo": 108,
                "tipo_campo": "texto",
                "limit": 100
            },
            {
                "descripcion": "<div class='desc-group'><p class='ml-3'>c. Señale cómo la experiencia ha contribuido a que los participantes intervengan de manera\ncoordinada en la atención de los problemas socio-ambientales identificados.</p></div>",
                "nombre_maquina": "3_c",
                "titulo_campo": "",
                "titulo_mencion": "Educación ambiental comunitaria",
                "id_campo_tipo": 1,
                "id_formulario": 1,
                "id_campo": 109,
                "tipo_campo": "texto",
                "limit": 100
            }
        ]
      },

      'Investigación ambiental': {
        description: 'En esta sección se busca conocer el aporte a la solución de problemas ambientales de las investigaciones científicas culminadas (todo aquel estudio original y planificado que tiene como finalidad obtener nuevos conocimientos científicos o tecnológicos), que pueden ser: investigación básica que es la generación o ampliación de los conocimientos generales científicos y técnicos no necesariamente vinculados con productos o procesos industriales o comerciales o investigación aplicada que es la generación o aplicación de conocimientos con vista a utilizarlos en el desarrollo de productos o procesos nuevos o para suscitar mejores productos o procesos existentes.',
        fields: [
            {
                "descripcion": "<div class='desc-group'> <p class='group-title'><strong>1.Aspectos formales y estructurales:</strong></p> <p>Se evaluará si la estructura interna del trabajo guarda coherencia, de tal forma que el lenguaje transmite de forma lógica, clara y concisa el desarrollo de la investigación.</p> <p class='ml-3'><strong>a. Resumen de la investigación</strong></p><p class='ml-3'>Consigne el abstract o resumen ejecutivo que sintetiza el trabajo de investigación (Use hasta 300 palabras):</p></div>",
                "nombre_maquina": "1_a",
                "titulo_campo": "",
                "titulo_mencion": "Investigación ambiental",
                "id_campo_tipo": 1,
                "id_formulario": 2,
                "id_campo": 110,
                "tipo_campo": "texto",
                "limit": 300
            },
            {
                "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Respaldo de la investigación por parte de una institución.</strong></p><p class='ml-3'>Anote el nombre de la institución que respalda su investigación y descríbala brevemente (Use hasta 50 palabras):</p><p class='ml-5'>Nombre de la Institución:</p></div>",
                "nombre_maquina": "1_b_1",
                "titulo_campo": "",
                "titulo_mencion": "Investigación ambiental",
                "id_campo_tipo": 1,
                "id_formulario": 2,
                "id_campo": 111,
                "tipo_campo": "texto",
                "limit": 50
            },
            {
                "descripcion": "<div class='desc-group'><p class='ml-5'>Descripción de la Institución: </p></div>",
                "nombre_maquina": "1_b_2",
                "titulo_campo": "",
                "titulo_mencion": "Investigación ambiental",
                "id_campo_tipo": 1,
                "id_formulario": 2,
                "id_campo": 112,
                "tipo_campo": "texto",
                "limit": 50
            },
            {
                "descripcion": "<div class='desc-group'> <p class='group-title'><strong>2.Aporte de la investigación a la solución de un problema socio-ambiental:</strong></p> <p>Se evaluará el aporte de los conocimientos generados para atender problemas o responder necesidades socio-ambientales en un ámbito determinado.</p> <p class='ml-3'><strong>a. Aporte en la solución de problemas relacionados a los componentes y líneas priorizadas en Agenda de Investigación Ambiental 2021</strong></p><p class='ml-3'>De los componentes y líneas priorizadas en la Agenda de Investigación Ambiental 2021, describa el aporte de la propuesta de investigación para una posible solución de alguna de las problemáticas críticas relacionadas(Use hasta 200 palabras):</p><p class='ml-5'>Componente o línea priorizada:</p></div>",
                "nombre_maquina": "2_a_1",
                "titulo_campo": "",
                "titulo_mencion": "Investigación ambiental",
                "id_campo_tipo": 1,
                "id_formulario": 2,
                "id_campo": 113,
                "tipo_campo": "texto",
                "limit": 200
            },
            {
                "descripcion": "<div class='desc-group'><p class='ml-5'>Aporte:</p></div>",
                "nombre_maquina": "2_a_2",
                "titulo_campo": "",
                "titulo_mencion": "Investigación ambiental",
                "id_campo_tipo": 1,
                "id_formulario": 2,
                "id_campo": 119,
                "tipo_campo": "texto",
                "limit": 200
            },
            {
                "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Conocimiento y/o trabajo novedoso en torno a un tema ambiental específico</strong></p><p class='ml-3'>Comente porqué la propuesta de investigación es novedosa y cómo responde a un tema ambiental específico (Use hasta 200 palabras): </p></div>",
                "nombre_maquina": "2_b",
                "titulo_campo": "",
                "titulo_mencion": "Investigación ambiental",
                "id_campo_tipo": 1,
                "id_formulario": 2,
                "id_campo": 114,
                "tipo_campo": "texto",
                "limit": 200
            },
            {
                "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>c. Aporte en la solución de problemas socio-ambientales priorizados por los tomadores de decisión.</strong></p><p class='ml-5'>Problema socio-ambiental identificado:</p></div>",
                "nombre_maquina": "2_c_1",
                "titulo_campo": "",
                "titulo_mencion": "Investigación ambiental",
                "id_campo_tipo": 1,
                "id_formulario": 2,
                "id_campo": 115,
                "tipo_campo": "texto",
                "limit": 200
            },
            {
                "descripcion": "<div class='desc-group'><p class='ml-5'>Aporte</p></div>",
                "nombre_maquina": "2_c_2",
                "titulo_campo": "",
                "titulo_mencion": "Investigación ambiental",
                "id_campo_tipo": 1,
                "id_formulario": 2,
                "id_campo": 120,
                "tipo_campo": "texto",
                "limit": 200
            },
            {
                "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>d. Beneficio de la investigación en grupos sociales vulnerables a las amenazas y problemáticas ambientales</strong></p><p class='ml-3'>Señale si la investigación beneficia a grupos sociales vulnerables a las amenazas y problemáticas ambientales</p></div>",
                "nombre_maquina": "2_d",
                "titulo_campo": "<p>Si su respuesta es afirmativa, describa brevemente el o los beneficios (Use hasta a 100 palabras):</p>",
                "titulo_mencion": "Investigación ambiental",
                "id_campo_tipo": 1,
                "id_formulario": 2,
                "id_campo": 116,
                "tipo_campo": "texto",
                "sino": true,
                "id_sino": "m2_2d1",
                "limit": 200
            },
          {
              "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>e. Publicación de la investigación</strong></p><p class='ml-3'>Precise si la investigación ha sido publicada y en qué medio (revista científica, texto, otro):</p></div>",
              "nombre_maquina": "2_e",
              "titulo_campo": "<p>Medio:</p>",
              "titulo_mencion": "Investigación ambiental",
              "id_campo_tipo": 1,
              "id_formulario": 2,
              "id_campo": 117,
              "tipo_campo": "texto",
              "sino": true,
              "id_sino": "m2_2e1"
          },
          {
              "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>f. Difusión de la investigación</strong></p><p class='ml-3'>Anote los principales medios en los que fue difundida la investigación (3 principales)</p></div>",
              "nombre_maquina": "2_f",
              "titulo_campo": "",
              "titulo_mencion": "Investigación ambiental",
              "id_campo_tipo": 2,
              "id_formulario": 2,
              "id_campo": 118,
              "tipo_campo": "tabla"
          }
        ]
      },

      'Estrategias de comunicacion ambiental': {
        description: 'En esta sección se busca conocer el impacto de las campañas u otros mecanismos que busquen despertar conciencia ambiental, realizados en espacios públicos, redes sociales o medios de comunicación masivos, que motiven a la ciudadanía a actuar en favor de la protección del ambiente.',
        fields: [
            {
                "descripcion": "<div class='desc-group'> <p class='group-title'><strong>1. Originalidad de recursos utilizados</strong></p> <p>cualidad de los recursos empleados que se caracterizan por ser nuevos o novedosos.</p> <p class='ml-3'><strong>a. Innovación en los recursos utilizados. </strong></p><p class='ml-3'>describa cómo la experiencia incorpora instrumentos o herramientas creativos o artísticos en su campaña, y destaque las características que los hacen innovadores (use hasta 150 palabras)</p></div>",
                "nombre_maquina": "1_a",
                "titulo_campo": "",
                "titulo_mencion": "Estrategias de comunicacion ambiental",
                "id_campo_tipo": 1,
                "id_formulario": 3,
                "id_campo": 95,
                "tipo_campo": "texto",
                "limit": 150
            },
            {
                "descripcion": "<div class='desc-group'> <p class='group-title'><strong>2. Contribución al empoderamiento de actores involucrados</strong></p> <p>cualidad por la cual se promueven mejores desempeños para la prevención o tratamiento de los problemas ambientales.</p> <p class='ml-3'><strong>b. Participación activa e involucramiento con la campaña</strong></p><p class='ml-3'>Comente cuál ha sido la estrategia utilizada para que los actores involucrados aporten a la solución del problema que se busca visibilizar con la campaña (use hasta 150 palabras)</p></div>",
                "nombre_maquina": "2_a",
                "titulo_campo": "",
                "titulo_mencion": "Estrategias de comunicacion ambiental",
                "id_campo_tipo": 1,
                "id_formulario": 3,
                "id_campo": 96,
                "tipo_campo": "texto",
                "limit": 150
            },
            {
                "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Aporte a la solución del problema</strong></p> <p class='ml-3'>coméntenos cómo la experiencia ha motivado que los involucrados pongan en marcha acciones de solución al problema. (use hasta 150 palabras)</p></div>",
                "nombre_maquina": "2_b",
                "titulo_campo": "",
                "titulo_mencion": "Estrategias de comunicacion ambiental",
                "id_campo_tipo": 1,
                "id_formulario": 3,
                "id_campo": 97,
                "tipo_campo": "texto",
                "limit": 150
            },
            {
                "descripcion": "<div class='desc-group'> <p class='group-title'><strong>3. Generación de sinergias</strong></p> <p>proceso que permite combinar los esfuerzos de dos o más actores involucrados y elevar su potencial de actuación frente a problemas ambientales.</p> <p class='ml-3'><strong>a. Mecanismos de coordinación</strong></p> <p class='ml-3'>describa cómo la campaña ha propiciado la formación de mecanismos de coordinación entre los actores involucrados en el problema ambiental (use hasta 150 palabras)</p></div>",
                "nombre_maquina": "3_a",
                "titulo_campo": "",
                "titulo_mencion": "Estrategias de comunicacion ambiental",
                "id_campo_tipo": 1,
                "id_formulario": 3,
                "id_campo": 98,
                "tipo_campo": "texto",
                "limit": 150
            },
          {
              "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Intervención articulada</strong></p> <p class='ml-3'>Si han existido acciones conjuntas entre los actores involucrados, que hayan sido propiciadas gracias a la implementación de la campaña, descríbalas (use hasta 150 palabras).</p></div>",
              "nombre_maquina": "3_b",
              "titulo_campo": "",
              "titulo_mencion": "Estrategias de comunicacion ambiental",
              "id_campo_tipo": 1,
              "id_formulario": 3,
              "id_campo": 99,
              "tipo_campo": "texto",
              "limit": 150
          },
          {
              "descripcion": "<div class='desc-group'> <p class='group-title'><strong>4. Escalamiento de la experiencia en medios de comunicación</strong></p> <p>elevación de la iniciativa a medios de comunicación masiva para impactar en el público objetivo.</p> <p class='ml-3'><strong>a. Plataformas de difusión</strong></p> <p class='ml-3'>indique a través de qué medios de comunicación ha sido difundida la campaña y cuál ha sido su cobertura.</p></div>",
              "nombre_maquina": "4_a",
              "titulo_campo": "",
              "titulo_mencion": "Estrategias de comunicacion ambiental",
              "id_campo_tipo": 2,
              "id_formulario": 3,
              "id_campo": 100,
              "tipo_campo": "tabla"
          },
          {
              "descripcion": "<div class='desc-group'> <p class='group-title'><strong>5. Fomento de valores ambientales en la ciudadanía</strong></p> <p>impulso a comportamientos de respeto y responsabilidad por parte de la ciudadanía frente al entorno ambiental.</p> <p class='ml-3'><strong>a. Fomento de valores</strong></p> <p class='ml-3'>describa cuáles han sido los mensajes fuerza utilizados e indique cuáles han sido los valores ambientales que se ha buscado promover a través de ellos (use hasta 150 palabras).</p></div>",
              "nombre_maquina": "5_a",
              "titulo_campo": "",
              "titulo_mencion": "Estrategias de comunicacion ambiental",
              "id_campo_tipo": 1,
              "id_formulario": 3,
              "id_campo": 101,
              "tipo_campo": "texto",
              "limit": 150
          },
          
        ]
      },

      'Periodismo ambiental': {
        description: 'En esta sección se busca conocer cómo el material periodístico publicado en medios escritos, radiales, televisivos y digitales (reportajes, informes, artículos, crónicas, entre otros) destaca temáticas ambientales relevantes y aporta de manera sustancial a la visibilización de problemáticas u oportunidades ambientales, incidiendo en la opinión pública y las autoridades.',
        fields: [
          {
              "descripcion": "<div class='desc-group'> <p class='group-title'><strong>1. Exposición didáctica y comprensible del tema ambiental</strong></p> <p>Busca conocer cómo la información presentada en el material periodístico explica el problema u oportunidad ambiental de manera clara, precisa y utilizando recursos visuales.</p> <p class='ml-3'><strong>a. Lenguaje claro</strong></p> <p class='ml-3'>describa el público objetivo al que va dirigida la información, e indique cómo ha adaptado los contenidos para que sea fácilmente comprendido por éste(Use hasta 200 palabras)</p></div>",
              "nombre_maquina": "1_a",
              "titulo_campo": "",
              "titulo_mencion": "Periodismo ambiental",
              "id_campo_tipo": 1,
              "id_formulario": 4,
              "id_campo": 7,
              "tipo_campo": "texto",
              "limit": 200
          },
          {
            "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Precisión de la información</strong></p> <p class='ml-3'>Describa cómo ha buscado relevar el problema u oportunidad ambiental en el material periodístico</p></div>",
            "nombre_maquina": "1_b",
            "titulo_campo": "",
            "titulo_mencion": "Periodismo ambiental",
            "id_campo_tipo": 1,
            "id_formulario": 4,
            "id_campo": 8,
            "tipo_campo": "texto",
            "limit": 100
        },
        {
            "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>c. Uso de recursos audiovisuales</strong></p> <p class='ml-3'>Señale los recursos audiovisuales que ha utilizado y cómo ha buscado que éstos impacten en la audiencia (use hasta 100 palabras)</p></div>",
            "nombre_maquina": "1_c",
            "titulo_campo": "",
            "titulo_mencion": "Periodismo ambiental",
            "id_campo_tipo": 1,
            "id_formulario": 4,
            "id_campo": 9,
            "tipo_campo": "texto",
            "limit": 100
        },
          {
              "descripcion": "<div class='desc-group'> <p class='group-title'><strong>2. Capacidad de despertar conciencia ambiental</strong></p> <p>Busca conocer la cualidad o característica que permite transmitir la relevancia y urgencia de la actuación ciudadana para conservar el ambiente. Desarrolle la información solicitada en cada punto.</p> <p class='ml-3'><strong>a. Planteamiento de acción</strong></p> <p class='ml-3'>Comente sobre las propuestas de acción y/o ejemplos de buenas prácticas que ha incluido en el material periodístico, precisando qué cambios se busca alcanzar en el público objetivo al que van dirigidos (autoridades gubernamentales, empresas, instituciones u organizaciones y/o ciudadanía en general). (use hasta 100 palabras):</p></div>",
              "nombre_maquina": "2_a",
              "titulo_campo": "",
              "titulo_mencion": "Periodismo ambiental",
              "id_campo_tipo": 1,
              "id_formulario": 4,
              "id_campo": 10,
              "tipo_campo": "texto",
              "limit": 100
          },
          {
              "descripcion": "<div class='desc-group'> <p class='group-title'><strong>3. Calidad de la información e importancia para la producción de conocimiento</strong></p> <p>se busca conocer la confiabilidad de la información del material periodístico y su contribución a generar nuevos conocimientos para el desarrollo sostenible.</p> <p class='ml-3'><strong>a. Fuentes de información</strong></p> <p class='ml-3'>indique las fuentes de información a las que ha recurrido para sustentar el documento periodístico presentado (artículos, investigaciones científicas, textos publicados, entrevistas, testimonios, videos, otros)</p></div>",
              "nombre_maquina": "3_a",
              "titulo_campo": "",
              "titulo_mencion": "Periodismo ambiental",
              "id_campo_tipo": 1,
              "id_formulario": 4,
              "id_campo": 11,
              "tipo_campo": "texto",
              "limit": 100
          },
          {
            "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Contribución a la generación de nuevos conocimientos y/o toma de decisiones</strong></p> <p class='ml-3'>describa cómo el tema y/o problemática abordado/a en el material periodístico, ha generado nuevas corrientes de acción, opinión o discusión en la ciudadanía; o si ha permitido a las autoridades adoptar medidas que aporten al tema (use hasta 100 palabras).</p></div>",
            "nombre_maquina": "3_b",
            "titulo_campo": "",
            "titulo_mencion": "Periodismo ambiental",
            "id_campo_tipo": 1,
            "id_formulario": 4,
            "id_campo": 12,
            "tipo_campo": "texto",
            "limit": 100
        },
          {
              "descripcion": "<div class='desc-group'> <p class='group-title'><strong>4. Nivel de alcance del material periodístico</strong></p> <p>refiere la cantidad potencial de personas que pueden acceder al material periodístico a partir de la cobertura del medio empleado.</p> <p class='ml-3'><strong>a. Plataformas de difusión</strong></p> <p class='ml-3'>indique a través de qué medios de comunicación ha sido difundido el material periodístico presentado y cuál ha sido su cobertura </p></div>",
              "nombre_maquina": "4_a",
              "titulo_campo": "",
              "titulo_mencion": "Periodismo ambiental",
              "id_campo_tipo": 2,
              "id_formulario": 4,
              "id_campo": 13,
              "tipo_campo": "tabla"
          }
        ]
      },

      'Ecoeficiencia en instituciones pública': {
        description: 'En esta sección se busca conocer cómo las instituciones públicas aplican medidas de ecoeficiencia, usando menos recursos, y generando menos impactos negativos al ambiente.',
        fields: [
            {
                "descripcion": "<div class='desc-group'><p class='group-title'><strong>1. Cumplimiento del Decreto Supremo N° 009-2009-MINAM</strong></p><p>Se evaluará el grado en el que la experiencia ha logrado cumplir los pasos para la implementación de las medidas de ecoeficiencia en la institución (línea base, diagnóstico de oportunidades de ecoeficiencia, buenas prácticas, plan de ecoeficiencia institucional, monitoreo de medidas de ecoeficiencia); así como las medidas de ecoeficiencia de primera y segunda etapa que se disponen en esta norma.</p><p class='ml-3'><strong>Completa la siguiente información:</strong></p></div>",
                "nombre_maquina": "1_a",
                "titulo_campo": "",
                "titulo_mencion": "Ecoeficiencia en instituciones pública",
                "id_campo_tipo": 2,
                "id_formulario": 5,
                "id_campo": 14,
                "tipo_campo": "tabla"
            },
            {
                "descripcion": "<div class='desc-group'> <p class='group-title'><strong>2. Institucionalidad</strong></p> <p>Se evaluará el grado en el que la experiencia ha logrado incorporar la ecoeficiencia en la estructura orgánica y los procesos de la institución pública.</p></div>",
                "nombre_maquina": "2_a",
                "titulo_campo": "",
                "titulo_mencion": "Ecoeficiencia en instituciones pública",
                "id_campo_tipo": 2,
                "id_formulario": 5,
                "id_campo": 15,
                "tipo_campo": "tabla"
            },
            {
                "descripcion": "<div class='desc-group'> <p class='group-title'><strong>3. Cultura de Ecoeficiencia</strong></p> <p>Se evaluará el grado en el que la experiencia ha fomentado el desarrollo de una cultura de ecoeficiencia en los servidores públicos de la institución.</p><p class='ml-3'><strong>a. Sensibilización</strong></p> <p class='ml-3'>indique cuáles fueron las principales acciones realizadas para sensibilizar a los servidores públicos sobre la importancia del uso eficiente y responsable de los recursos en la institución (Use hasta 100 palabras).</p></div>",
                "nombre_maquina": "3_a",
                "titulo_campo": "",
                "titulo_mencion": "Ecoeficiencia en instituciones pública",
                "id_campo_tipo": 1,
                "id_formulario": 5,
                "id_campo": 16,
                "tipo_campo": "texto",
                "limit": 100
            },
          {
              "descripcion": "<div class='desc-group'><p class='ml-3'><strong>b. Buenas prácticas de los servidores</strong></p> <p class='ml-3'>describa los principales logros de los servidores públicos en relación a la adopción de buenas prácticas para el uso eficiente y responsable de los recursos en la institución (Use hasta 100 palabras).</p></div>",
              "nombre_maquina": "3_b",
              "titulo_campo": "",
              "titulo_mencion": "Ecoeficiencia en instituciones pública",
              "id_campo_tipo": 1,
              "id_formulario": 5,
              "id_campo": 17,
              "tipo_campo": "texto",
              "limit": 100
          },
          {
              "descripcion": "<div class='desc-group'> <p class='group-title'><strong>4. Impacto de las medidas de ecoeficiencia implementadas</strong></p> <p>Se evaluará el grado en el que la experiencia ha contribuido a optimizar el uso de los recursos en la institución pública traduciéndose en un ahorro económico. Se consideran el ahorro de papel y materiales conexos, energía, agua y segregación y reciclado de residuos sólidos.</p><p class='ml-3'><strong>Respecto a la línea base, complete la siguiente información:</strong></p></div>",
              "nombre_maquina": "4_a",
              "titulo_campo": "",
              "titulo_mencion": "Ecoeficiencia en instituciones pública",
              "id_campo_tipo": 2,
              "id_formulario": 5,
              "id_campo": 18,
              "tipo_campo": "tabla"
          }
        ]
      },

      'Economía circular': {
        description: 'En esta sección se busca reconocer las iniciativas empresariales o emprendimientos o proyectos innovadores que buscan cambiar los patrones de producción y consumo actual, en el marco del modelo de economía circular, a partir de la reducción del uso de recursos naturales en sus productos o servicios, la optimización del uso de recursos en sus procesos, el aprovechando los residuos como materia prima, y que a su vez garantizan la protección del ambiente y la mejora en su desempeño económico.',
        fields: [
            {
                "descripcion": "<div class='desc-group'> <p class='group-title'><strong>1. Innovación ambiental</strong></p> <p>Se valorará el desarrollo de un nuevo producto y/o servicio; o la mejora de procesos o métodos en relación a las técnicas, materiales y soluciones que generen competitividad o cambios en los patrones de producción y/o consumo, con consideraciones ambientales a lo largo del ciclo de vida del producto o servicio.</p> <p class='ml-3'><strong>a. Contribución de la innovación en la resolución de problemas ambientales</strong></p> <p class='ml-3'>Comente cómo su proyecto aporta a la solución de un problema ambiental o responde a una necesidad ambiental (Use hasta 200 palabras):</p> <p class='ml-5'>Problema o necesidad ambiental</p></div>",
                "nombre_maquina": "1_a_1",
                "titulo_campo": "",
                "titulo_mencion": "Economía circular",
                "id_campo_tipo": 1,
                "id_formulario": 6,
                "id_campo": 19,
                "tipo_campo": "texto",
                "limit": 200
            },
            {
                "descripcion": "<div class='desc-group'> <p class='ml-5'>Aporte</p></div>",
                "nombre_maquina": "1_a_2",
                "titulo_campo": "",
                "titulo_mencion": "Economía circular",
                "id_campo_tipo": 1,
                "id_formulario": 6,
                "id_campo": 121,
                "tipo_campo": "texto",
                "limit": 100
            },
          {
              "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Producto o proceso con valor potencial para la solución de un problema ambiental</strong></p> <p class='ml-3'>Describa el valor potencial del producto o proceso ambiental en la solución de un problema ambiental (Use hasta 100 palabras)</p></div>",
              "nombre_maquina": "1_b",
              "titulo_campo": "",
              "titulo_mencion": "Economía circular",
              "id_campo_tipo": 1,
              "id_formulario": 6,
              "id_campo": 20,
              "tipo_campo": "texto",
              "limit": 150
          },
          {
            "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>c. Producto novedoso introducido en el mercado exitosamente</strong></p> <p class='ml-3'>Comente la estrategia utilizada para introducir su producto en el mercado (Use hasta 150 palabras)</p></div>",
            "nombre_maquina": "1_c",
            "titulo_campo": "",
            "titulo_mencion": "Economía circular",
            "id_campo_tipo": 1,
            "id_formulario": 6,
            "id_campo": 21,
            "tipo_campo": "texto",
            "limit": 150
        },
        {
            "descripcion": "<div class='desc-group'> <p class='group-title'><strong>2. Uso de recursos</strong></p> <p>Se evaluará el grado en el que la experiencia ha logrado reducir el uso de los recursos e insumos (materia y energía), en el diseño de su producto o servicio, en el proceso mismo, y generando la menor cantidad de residuos post consumo; habiendo integrando las consideraciones ambientales en toda la cadena de valor, que permitan minimizar sus impactos ambientales negativos.</p> <p class='ml-3'>a. Responda sobre los principales aspectos que han sido considerados para reducir la materia prima, insumos y componentes del producto y/o servicio (Use hasta 150 palabras), de acuerdo a:</p> <p class='ml-5'>Se han reducido los componentes o la cantidad de materiales y/o insumos del producto.</p></div>",
            "nombre_maquina": "2_a_1",
            "titulo_campo": "<p>¿Cómo?</p>",
            "titulo_mencion": "Economía circular",
            "id_campo_tipo": 1,
            "id_formulario": 6,
            "id_campo": 22,
            "tipo_campo": "texto",
            "sino": true,
            "id_sino": "m6_2a1"
        },
          {
              "descripcion": "<div class='desc-group'> <p class='ml-5'>¿Los materiales y/o componentes del producto son fáciles de limpiar, reparar y reutilizar</p></div>",
              "nombre_maquina": "2_a_2",
              "titulo_campo": "<p>¿Cómo?</p>",
              "titulo_mencion": "Economía circular",
              "id_campo_tipo": 1,
              "id_formulario": 6,
              "id_campo": 23,
              "tipo_campo": "texto",
              "sino": true,
              "id_sino": "m6_2a2"
          },
          {
            "descripcion": "<div class='desc-group'> <p class='ml-3'>b. Si se trata de un producto, complete la información sobre las consideraciones tomadas en relación al diseño del producto y empaque:</p> <p class='ml-5'>El diseño considera la ecoeficiencia en el uso de energía y recursos para el uso del consumidor.</p></div>",
            "nombre_maquina": "2_b_1",
            "titulo_campo": "<p>¿Cómo?</p>",
            "titulo_mencion": "Economía circular",
            "id_campo_tipo": 1,
            "id_formulario": 6,
            "id_campo": 24,
            "tipo_campo": "texto",
            "sino": true,
            "id_sino": "m6_2b1"
        },
          {
              "descripcion": "<div class='desc-group'> <p class='ml-5'>El diseño considera la aceptación y reutilización total o parcial del producto en la etapa final de su ciclo de vida.</p></div>",
              "nombre_maquina": "2_b_2",
              "titulo_campo": "<p>¿Cómo?</p>",
              "titulo_mencion": "Economía circular",
              "id_campo_tipo": 1,
              "id_formulario": 6,
              "id_campo": 25,
              "tipo_campo": "texto",
              "sino": true,
              "id_sino": "m6_2b2"
          },
          {
            "descripcion": "<div class='desc-group'> <p class='ml-5'>Se ha contemplado medidas para evitar el sobre empaque</p></div>",
            "nombre_maquina": "2_b_3",
            "titulo_campo": "<p>¿Cómo?</p>",
            "titulo_mencion": "Economía circular",
            "id_campo_tipo": 1,
            "id_formulario": 6,
            "id_campo": 26,
            "tipo_campo": "texto",
            "sino": true,
            "id_sino": "m6_2b3"
        },
        {
            "descripcion": "<div class='desc-group'> <p class='ml-5'>Los componentes del producto son fácilmente identificables para su posterior reciclaje.</p></div>",
            "nombre_maquina": "2_b_4",
            "titulo_campo": "<p>¿Cómo?</p>",
            "titulo_mencion": "Economía circular",
            "id_campo_tipo": 1,
            "id_formulario": 6,
            "id_campo": 27,
            "tipo_campo": "texto",
            "sino": true,
            "id_sino": "m6_2b4"
        },
        {
            "descripcion": "<div class='desc-group'> <p class='group-title'><strong>3. Producción limpia</strong></p> <p>Se evaluará el grado en el que la experiencia ha aplicado de forma continua una estrategia integrada de prevención de impactos ambientales en procesos y en servicios, con el objetivo de reducir riesgos para seres humanos y para el ambiente, incrementar la competitividad de la empresa, y garantizar su viabilidad económica.</p> <p class='ml-3'><strong>a. Gestión óptima de materias primas/ insumos</strong></p> <p class='ml-3'>Comente sobre los criterios de sostenibilidad que ha aplicado en la adquisición de sus materias primas/ insumos (compras responsables) y solicitudes de servicios. (use hasta 100 palabras):</p></div>",
            "nombre_maquina": "3_a",
            "titulo_campo": "",
            "titulo_mencion": "Economía circular",
            "id_campo_tipo": 1,
            "id_formulario": 6,
            "id_campo": 28,
            "tipo_campo": "texto",
            "limit": 100
        },
        {
            "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Implementación de tecnologías limpias</strong></p> <p class='ml-3'>describa cómo la experiencia promueve buenas prácticas y/o tecnologías limpias para el uso eficiente de:</p> <p class='ml-5'>Agua (use hasta 100 palabras):</p></div>",
            "nombre_maquina": "3_b_1",
            "titulo_campo": "",
            "titulo_mencion": "Economía circular",
            "id_campo_tipo": 1,
            "id_formulario": 6,
            "id_campo": 29,
            "tipo_campo": "texto",
            "limit": 100
        },
        {
            "descripcion": "<div class='desc-group'> <p class='ml-5'>Energía (use hasta 100 palabras):</p></div>",
            "nombre_maquina": "3_b_2",
            "titulo_campo": "",
            "titulo_mencion": "Economía circular",
            "id_campo_tipo": 1,
            "id_formulario": 6,
            "id_campo": 30,
            "tipo_campo": "texto",
            "limit": 100
        },
          {
              "descripcion": "<div class='desc-group'> <p class='ml-5'>Transporte (use hasta 100 palabras):</p></div>",
              "nombre_maquina": "3_b_3",
              "titulo_campo": "",
              "titulo_mencion": "Economía circular",
              "id_campo_tipo": 1,
              "id_formulario": 6,
              "id_campo": 31,
              "tipo_campo": "texto",
              "limit": 100
          },
          {
            "descripcion": "<div class='desc-group'> <p class='group-title'><strong>4. Tratamiento y valorización interna</strong></p> <p>Se evaluará cómo se hace el tratamiento y reciclaje de los recursos sólidos, efluentes y emisiones del proceso productivo, si se da mediante técnicas ecoeficientes de tratamiento previo y/o la implementación de tecnologías de control.</p> <p class='ml-3'><strong>a. Gestión de residuos sólidos</strong></p> <p class='ml-3'>Precise si su empresa cuenta con un plan de gestión integral de residuos sólidos y/o cómo realiza el tratamiento de sus residuos sólidos para el reciclaje (Use hasta 150 palabras)</p></div>",
            "nombre_maquina": "4_a",
            "titulo_campo": "",
            "titulo_mencion": "Economía circular",
            "id_campo_tipo": 1,
            "id_formulario": 6,
            "id_campo": 32,
            "tipo_campo": "texto",
            "limit": 150
        },
          {
              "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Gestión de aguas residuales. </strong></p> <p class='ml-3'>Precise si su empresa realiza el tratamiento de las aguas residuales en sus procesos y describa cómo se privilegia su reutilización (Use hasta 150 palabras)</p></div>",
              "nombre_maquina": "4_b",
              "titulo_campo": "",
              "titulo_mencion": "Economía circular",
              "id_campo_tipo": 1,
              "id_formulario": 6,
              "id_campo": 33,
              "tipo_campo": "texto",
              "limit": 150
          },
          {
            "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>c. Control de emisiones</strong></p> <p>Precise si su empresa realiza el control de emisiones reduciendo su potencial impacto (Use hasta 150 palabras).</p></div>",
            "nombre_maquina": "4_c",
            "titulo_campo": "",
            "titulo_mencion": "Economía circular",
            "id_campo_tipo": 1,
            "id_formulario": 6,
            "id_campo": 34,
            "tipo_campo": "texto",
            "limit": 150
        },
        {
            "descripcion": "<div class='desc-group'> <p class='group-title'><strong>5. Valorización externa</strong></p> <p>Se evaluará de qué forma los residuos sólidos que se generan y que no se incorporan al ciclo productivo se constituyen en un subproducto útil y comercializable, o son objeto de disposición final segura.</p> <p class='ml-3'><strong>a. Valorización de residuos sólidos</strong></p> <p class='ml-3'>Describa cómo la experiencia realiza el acondicionamiento y comercialización de sus residuos sólidos (use hasta 150 palabras).</p></div>",
            "nombre_maquina": "5_a",
            "titulo_campo": "",
            "titulo_mencion": "Economía circular",
            "id_campo_tipo": 1,
            "id_formulario": 6,
            "id_campo": 35,
            "tipo_campo": "texto",
            "limit": 150
        },
        {
            "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Disposición segura de residuos sólidos</strong></p> <p class='ml-3'>Describa cómo se realiza la recolección y transporte de los residuos sólidos generados (use hasta 150 palabras).</p></div>",
            "nombre_maquina": "5_b",
            "titulo_campo": "",
            "titulo_mencion": "Economía circular",
            "id_campo_tipo": 1,
            "id_formulario": 6,
            "id_campo": 36,
            "tipo_campo": "texto",
            "limit": 150
        },
        {
            "descripcion": "<div class='desc-group'> <p class='group-title'><strong>6. Consumo responsable</strong></p> <p>Se evaluará el grado en el que la experiencia ha realizado acciones de sensibilización e información que promuevan el consumo responsable al interno y externo.</p> <p class='ml-3'><strong>a. Sensibilización y buenas prácticas del personal</strong></p> <p class='ml-5'>Describa cómo la experiencia ha contribuido a que el personal sea sensibilizado sobre la importancia del uso eficiente y responsable de los recursos en la empresa (use hasta 150 palabras).</p></div>",
            "nombre_maquina": "6_a_1",
            "titulo_campo": "",
            "titulo_mencion": "Economía circular",
            "id_campo_tipo": 1,
            "id_formulario": 6,
            "id_campo": 37,
            "tipo_campo": "texto",
            "limit": 150
        },
          {
              "descripcion": "<div class='desc-group'> <p class='ml-5'>Describa cómo la experiencia ha promovido que el personal realice buenas prácticas para el uso eficiente y responsable de los recursos en la empresa (use hasta 150 palabras).</p></div>",
              "nombre_maquina": "6_a_2",
              "titulo_campo": "",
              "titulo_mencion": "Economía circular",
              "id_campo_tipo": 1,
              "id_formulario": 6,
              "id_campo": 38,
              "tipo_campo": "texto",
              "limit": 150
          },
          {
            "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Sensibilización e información a los aliados</strong></p> <p class='ml-5'>Comente cómo la experiencia ha permitido articular con los actores locales para poner en práctica el consumo responsable. (use hasta 150 palabras).</p></div>",
            "nombre_maquina": "6_b_1",
            "titulo_campo": "",
            "titulo_mencion": "Economía circular",
            "id_campo_tipo": 1,
            "id_formulario": 6,
            "id_campo": 39,
            "tipo_campo": "texto",
            "limit": 150
        },
          {
              "descripcion": "<div class='desc-group'> <p class='ml-5'>Comente cómo la experiencia ha permitido sensibilizar e informar a los clientes sobre el consumo responsable. (use hasta 150 palabras)</p></div>",
              "nombre_maquina": "6_b_2",
              "titulo_campo": "",
              "titulo_mencion": "Economía circular",
              "id_campo_tipo": 1,
              "id_formulario": 6,
              "id_campo": 40,
              "tipo_campo": "texto",
              "limit": 150
          }
        ]
      },

      'Mejora de la calidad de aire': {
        description: 'En esta sección se busca conocer las medidas o instrumentos implementados para prevenir y reducir la contaminación atmosférica y acústica, así como para minimizar sus impactos negativos.',
        fields: [
          {
              "descripcion": "<div class='desc-group'> <p class='group-title'><strong>1. Reducción en los niveles de contaminación</strong></p> <p>Se evaluará la aplicación de acciones y/o medidas para disminuir las concentraciones de los parámetros establecidos en los ECA para aire, ECA para agua o ECA para suelo.</p> <p class='ml-3'><strong>a. Aspectos de evaluación</strong></p> <p class='ml-3'>amplíe la información sobre las acciones y/o medidas que ha realizado para disminuir contaminantes establecidos en el ECA Aire.</p></div>",
              "nombre_maquina": "1_a",
              "titulo_campo": "",
              "titulo_mencion": "Mejora de la calidad de aire",
              "id_campo_tipo": 2,
              "id_formulario": 7,
              "id_campo": 41,
              "tipo_campo": "tabla"
          },
          {
            "descripcion": "<div class='desc-group'> <p class='group-title'><strong>2. Minimización de impactos negativos al ambiente</strong></p> <p>enfoca la aplicación de acciones o medidas para prevenir o reducir participativamente la problemática por contaminación ambiental</p> <p class='ml-3'><strong>a. Aspectos de evaluación</strong></p> <p class='ml-3'>amplíe la información sobre las acciones y/o medidas que ha realizado para identificar participativamente y atender la problemática por contaminación ambiental.</p></div>",
            "nombre_maquina": "2_a",
            "titulo_campo": "",
            "titulo_mencion": "Mejora de la calidad de aire",
            "id_campo_tipo": 2,
            "id_formulario": 7,
            "id_campo": 42,
            "tipo_campo": "tabla"
        },
          {
              "descripcion": "<div class='desc-group'> <p class='group-title'><strong>3. Actividades para promover el compromiso de la ciudadanía</strong></p> <p>comprende la aplicación de acciones y/o medidas que promuevan la participación de la ciudadanía en el mejoramiento de la calidad ambiental</p> <p class='ml-3'><strong>a. Actividades para promover el compromiso de la ciudadanía</strong></p> <p class='ml-3'>señale qué acciones y/o medidas ha realizado para promover la participación de la ciudadanía en el mejoramiento de la calidad ambiental y cual ha sido su impacto</p></div>",
              "nombre_maquina": "3_a",
              "titulo_campo": "",
              "titulo_mencion": "Mejora de la calidad de aire",
              "id_campo_tipo": 2,
              "id_formulario": 7,
              "id_campo": 43,
              "tipo_campo": "tabla"
          }
        ]
      },

      'Manejo de residuos sólidos': {
        description: 'En esta sección se busca conocer los procesos que permiten reducir, eliminar y/o manejar correctamente los residuos sólidos, tales como minimización, reciclaje, reúso, tratamiento, disposición final; y/o que generen econegocios y cadenas de valor que involucran a asociaciones de recicladores, promotores ambientales, entre otros.',
        fields: [
          {
              "descripcion": "<div class='desc-group'> <p class='group-title'><strong>1. Cumplimiento de las regulaciones ambientales vigentes</strong></p> <p>Se evaluará la concordancia de la experiencia con las disposiciones del Decreto Legislativo N°1278, que aprueba la Ley de Gestión Integral de Residuos Sólidos, la cual tiene por objetivo asegurar la maximización constante de la eficiencia en el uso de materiales, y una gestión y manejo adecuado de los residuos sólidos, mediante la minimización de la generación de residuos sólidos en la fuente, la valorización material o energética y la adecuada disposición final.</p> <p class='ml-3'><strong>a. Cumplimiento de los procesos</strong></p> <p class='ml-3'>Indique las actividades que ha desarrollado por cada uno de los procesos de gestión y manejo adecuado de los residuos sólidos:</p></div>",
              "nombre_maquina": "1_a",
              "titulo_campo": "",
              "titulo_mencion": "Manejo de residuos sólidos",
              "id_campo_tipo": 2,
              "id_formulario": 8,
              "id_campo": 44,
              "tipo_campo": "tabla"
          },
          {
            "descripcion": "<div class='desc-group'> <p class='group-title'><strong>2. Antigüedad de operaciones</strong></p> <p>Se evaluará la continuidad del funcionamiento de la experiencia, medida desde el inicio de sus operaciones hasta la actualidad.</p> <p class='ml-3'><strong>a. Continuidad de la experiencia</strong></p> <p class='ml-3'>Señale el tiempo ininterrumpido de funcionamiento de la experiencia:</p></div>",
            "nombre_maquina": "2_a",
            "titulo_campo": "",
            "titulo_mencion": "Manejo de residuos sólidos",
            "id_campo_tipo": 1,
            "id_formulario": 8,
            "id_campo": 45,
            "tipo_campo": "texto"
        },
          {
              "descripcion": "<div class='desc-group'> <p class='group-title'><strong>3. Inclusión de asociación de recicladores, promotores ambientales u otros aliados</strong></p> <p>Se evaluará de qué manera la experiencia ha logrado la participación de aliados en actividades de reaprovechamiento de residuos.</p> <p class='ml-3'><strong>a. Inclusión de aliados</strong></p> <p class='ml-3'>Describa de qué forma la experiencia ha implementado una estrategia que permita la inclusión de aliados (Use hasta 150 palabras).</p></div>",
              "nombre_maquina": "3_a",
              "titulo_campo": "",
              "titulo_mencion": "Manejo de residuos sólidos",
              "id_campo_tipo": 1,
              "id_formulario": 8,
              "id_campo": 46,
              "tipo_campo": "texto",
              "limit": 150
          },
          {
              "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Generación de ingresos económicos</strong></p> <p class='ml-3'>Describa cómo la experiencia ha generado ingresos económicos u otros beneficios para sus aliados (Use hasta 150 palabras).</p></div>",
              "nombre_maquina": "3_b",
              "titulo_campo": "",
              "titulo_mencion": "Manejo de residuos sólidos",
              "id_campo_tipo": 1,
              "id_formulario": 8,
              "id_campo": 47,
              "tipo_campo": "texto",
              "limit": 150
          },
          {
              "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>c. Beneficios sociales</strong></p> <p class='ml-3'>Describa cómo la experiencia ha generado beneficios sociales (acceso a capacitación, servicios de salud, otros) para sus aliados (Use hasta 150 palabras).</p></div>",
              "nombre_maquina": "3_c",
              "titulo_campo": "",
              "titulo_mencion": "Manejo de residuos sólidos",
              "id_campo_tipo": 1,
              "id_formulario": 8,
              "id_campo": 48,
              "tipo_campo": "texto",
              "limit": 150
          }
        ]
      },

      'Conservación y recuperación de ecosistemas continentales y marinos, especies y diversidad genética': {
        description: 'En esta sección se busca conocer experiencias que contribuyan a la gestión sostenible de los ecosistemas continentales, así como de los ecosistemas marinos, a la conservación de las especies de flora fauna, manejo sostenible de los recursos hidrobiológicos y diversidad genética; y que aporten a la provisión de los servicios ecosistémicos con un enfoque social participativo.',
        fields: [
            {
                "descripcion": "<div class='desc-group'> <p class='group-title'><strong>1. Contribución a la conservación de los ecosistemas continentales o marinos, las especies y los recursos hidrobiológicos</strong></p> <p>Se evaluarán las acciones realizadas para promover la conservación y el uso sostenible de los ecosistemas y especies, así como en la prevención de su fragmentación y degradación por actividades antrópicas, abarcando el mantenimiento, la utilización sostenible, la mejora del entorno natural y la generación de beneficios para las poblaciones locales. Asimismo, la conservación de las especies y los recursos hidrobiológicos se orienta a asegurar las condiciones mínimas que permitan su supervivencia/mantenimiento, así como, el control del ingreso y dispersión de especies exóticas.</p> <p class='ml-3'><strong>a. Aporte a la conservación de la especie o ecosistema</strong></p> <p class='ml-3'>¿La experiencia cuenta con un instrumento para la gestión o conservación del ecosistema continental o marino, o alguna especie o grupo de especies: (plan de gestión, manejo, conservación u otro instrumento), que sea reconocido o aprobado a través de norma nacional o regional o local? o, en el caso de experiencias comunales, ¿cuenta con actas o acuerdos?</p></div>",
                "nombre_maquina": "1_a_1",
                "titulo_campo": "<p>¿Con qué instrumento/s aprobado/s cuenta?</p>",
                "titulo_mencion": "Conservación y recuperación de ecosistemas continentales y marinos, especies y diversidad genética",
                "id_campo_tipo": 1,
                "id_formulario": 9,
                "id_campo": 49,
                "tipo_campo": "texto",
                "sino": true,
                "id_sino": "m9_1a1"
            },
            {
                "descripcion": "<div class='desc-group'> <p class='ml-5'>Anote la/s especie/s y/o ecosistema/s beneficiado/s con su experiencia </p></div>",
                "nombre_maquina": "1_a_2",
                "titulo_campo": "",
                "titulo_mencion": "Conservación y recuperación de ecosistemas continentales y marinos, especies y diversidad genética",
                "id_campo_tipo": 1,
                "id_formulario": 9,
                "id_campo": 51,
                "tipo_campo": "texto"
            },
            {
                "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Resultados</strong></p> <p class='ml-3'>Coloque los principales resultados de la experiencia, que contribuyen fehacientemente a la conservación de la especie o el ecosistema, y promueve la participación y generación de beneficios para las poblaciones locales. (Use hasta 150 palabras).</p></div>",
                "nombre_maquina": "1_b",
                "titulo_campo": "",
                "titulo_mencion": "Conservación y recuperación de ecosistemas continentales y marinos, especies y diversidad genética",
                "id_campo_tipo": 1,
                "id_formulario": 9,
                "id_campo": 122,
                "tipo_campo": "texto",
                "limit": 150
            },
            {
                "descripcion": "<div class='desc-group'> <p class='group-title'><strong>2. Contribución a la recuperación de especies amenazadas o ecosistemas continentales o marinos degradados: </strong></p> <p>Se evaluarán las acciones que aporten en la recuperación de los ciclos y procesos ecológicos, y la reconstrucción de la estructura y funcionamiento de los ecosistemas, mediante la adopción de medidas de recuperación y rehabilitación de ecosistemas, tanto en el ambiente terrestre como marino, y especies amenazadas o CITES, que han sido degradados o dañados en el País. Asimismo, la recuperación de las especies se orienta a restablecer condiciones mínimas de supervivencia de las mismas y acciones para la recuperación de sus poblaciones, entre otros aspectos relacionados.</p> <p class='ml-3'><strong>a. Aporte a la recuperación del ecosistema y/o especie</strong></p> <p class='ml-3'>¿La experiencia cuenta con un instrumento para la recuperación del ecosistema terrestre o marino, o una especie o grupo de especies: (proyecto de restauración o acciones de recuperación), que sean reconocidas por instancias nacionales, regionales o locales, así como experiencias comunales, e iniciativas de organizaciones sociales, evidenciadas o documentadas por actas o acuerdos, según corresponda o, en el caso de experiencias comunales, ¿cuenta con actas o acuerdos?</p></div>",
                "nombre_maquina": "2_a_1",
                "titulo_campo": "<p>¿Con qué instrumento/s aprobado/s cuenta? </p>",
                "titulo_mencion": "Conservación y recuperación de ecosistemas continentales y marinos, especies y diversidad genética",
                "id_campo_tipo": 1,
                "id_formulario": 9,
                "id_campo": 52,
                "tipo_campo": "texto",
                "sino": true,
                "id_sino": "m9_2a1"
            },
            
            {
                "descripcion": "<div class='desc-group'> <p class='ml-5'>Anote la/s especie/s y/o ecosistema/s beneficiado/s</p></div>",
                "nombre_maquina": "2_a_2",
                "titulo_campo": "",
                "titulo_mencion": "Conservación y recuperación de ecosistemas continentales y marinos, especies y diversidad genética",
                "id_campo_tipo": 1,
                "id_formulario": 9,
                "id_campo": 54,
                "tipo_campo": "texto"
            },
            {
                "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Resultados</strong></p> <p class='ml-3'>Coloque los principales resultados de la experiencia, que contribuyen fehacientemente a la recuperación de la especie/el ecosistema. (Use hasta 150 palabras).</p></div>",
                "nombre_maquina": "2_b",
                "titulo_campo": "",
                "titulo_mencion": "Conservación y recuperación de ecosistemas continentales y marinos, especies y diversidad genética",
                "id_campo_tipo": 1,
                "id_formulario": 9,
                "id_campo": 55,
                "tipo_campo": "texto",
                "limit": 150
            },
            {
                "descripcion": "<div class='desc-group'> <p class='ml-3'>c. Destaque la contribución de la experiencia introduciendo nuevos procesos, instrumentos, metodologías, herramientas, técnicas u otros para la recuperación de especies/ecosistemas (Use hasta 150 palabras). </p></div>",
                "nombre_maquina": "2_c",
                "titulo_campo": "",
                "titulo_mencion": "Conservación y recuperación de ecosistemas continentales y marinos, especies y diversidad genética",
                "id_campo_tipo": 1,
                "id_formulario": 9,
                "id_campo": 56,
                "tipo_campo": "texto",
                "limit": 150
            },
            {
                "descripcion": "<div class='desc-group'> <p class='group-title'><strong>3. Contribución a la conservación de la agrobiodiversidad o agroecosistemas</strong></p> <p>Se evaluará las acciones que aporten a la conservación de los ciclos y procesos ecológicos propios de los agroecosistemas. Asimismo, abarca el mantenimiento y la utilización sostenible de los agroecosistemas y la mejora del entorno natural en el cual se sustentan los agroecosistemas. Los agroecosistemas considerados pueden ser los sistemas agroforestales, cultivo intercalados, cultivos en rotación, sistemas integrados de producción agropecuaria, silvopastoril, de regadío, de secano, acuícola, mixto, etc. La conservación de la agrobiodiversidad se orienta a establecer condiciones de conservación in situ y aprovechamiento sostenible de cultivos y crianzas</p> <p class='ml-3'><strong>a. Aporte a la conservación de la agrobiodiversidad y/o agroecosistemas</strong></p> <p class='ml-3'>¿La experiencia cuenta con un instrumento para la gestión y conservación de la agrobiodiversidad y/o agroecosistemas: (plan de gestión, manejo, conservación u otro instrumento), que sea reconocido o aprobado a través de norma nacional o regional o local? o, en el caso de experiencias comunales, ¿cuenta con actas o acuerdos?</p></div>",
                "nombre_maquina": "3_a_1",
                "titulo_campo": "<p>¿Con qué instrumento/s aprobado/s cuenta?</p>",
                "titulo_mencion": "Conservación y recuperación de ecosistemas continentales y marinos, especies y diversidad genética",
                "id_campo_tipo": 1,
                "id_formulario": 9,
                "id_campo": 57,
                "tipo_campo": "texto",
                "sino": true,
                "id_sino": "m9_3a1"
            },
              {
                  "descripcion": "<div class='desc-group'> <p class='ml-5'>Anote la/s especie/s y/o ecosistema/s beneficiado/s</p></div>",
                  "nombre_maquina": "3_a_2",
                  "titulo_campo": "",
                  "titulo_mencion": "Conservación y recuperación de ecosistemas continentales y marinos, especies y diversidad genética",
                  "id_campo_tipo": 1,
                  "id_formulario": 9,
                  "id_campo": 59,
                  "tipo_campo": "texto"
              },
          {
              "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Resultados</strong></p> <p class='ml-3'>Coloque los principales resultados de la experiencia, que contribuyen fehacientemente a la conservación de la agrobiodiversidad y/o agroecosistemas. (Use hasta 150 palabras).</p></div>",
              "nombre_maquina": "3_b",
              "titulo_campo": "",
              "titulo_mencion": "Conservación y recuperación de ecosistemas continentales y marinos, especies y diversidad genética",
              "id_campo_tipo": 1,
              "id_formulario": 9,
              "id_campo": 60,
              "tipo_campo": "texto",
              "limit": 150
          },
          {
              "descripcion": "<div class='desc-group'> <p class='ml-3'>c. Destaque la contribución de la experiencia introduciendo nuevos procesos, instrumentos, metodologías, herramientas, técnicas u otros para la conservación de la agrobiodiversidad y/o agroecosistemas (Use hasta 150 palabras).</p></div>",
              "nombre_maquina": "3_c",
              "titulo_campo": "",
              "titulo_mencion": "Conservación y recuperación de ecosistemas continentales y marinos, especies y diversidad genética",
              "id_campo_tipo": 1,
              "id_formulario": 9,
              "id_campo": 61,
              "tipo_campo": "texto",
              "limit": 150
          }
        ]
      },

      'Bionegocios': {
        description: 'En esta sección se busca conocer iniciativas que usan los recursos de la biodiversidad de modo sostenible. En tal sentido, apoyan al desarrollo de la actividad económica de ámbito local con alianzas estratégicas y la generación de valor agregado.',
        fields: [
            {
                "descripcion": "<div class='desc-group'> <p class='group-title'><strong>1. Beneficios económicos sostenibles de la actividad</strong></p> <p>Se evaluará la capacidad de la experiencia de mantener en el tiempo sus niveles de rentabilidad.</p> <p class='ml-3'><strong>a. Viabilidad de mercado</strong></p> <p class='ml-3'>Coméntenos sobre el posicionamiento que su experiencia ha logrado en el mercado, y cómo éste es sostenible en el tiempo (Use hasta 150 palabras)</p></div>",
                "nombre_maquina": "1_a",
                "titulo_campo": "",
                "titulo_mencion": "Bionegocios",
                "id_campo_tipo": 1,
                "id_formulario": 10,
                "id_campo": 62,
                "tipo_campo": "texto",
                "limit": 150
            },
            {
                "descripcion": "<div class='desc-group'> <p class='group-title'><strong>2. Conservación del recurso de la biodiversidad que genera el producto o servicio</strong></p> <p>Se evaluarán las consideraciones adoptadas por la experiencia para conservar el recurso asociado a los productos o servicios que ofrece.</p> <p class='ml-3'><strong>a. Aprovechamiento y uso regulado de los recursos de la biodiversidad</strong></p> <p class='ml-3'>Responda. ¿La experiencia opera con tasas de extracción autorizadas del recurso mediante plan de manejo o permiso de autorización?</p></div>",
                "nombre_maquina": "2_a",
                "titulo_campo": "<p>¿Con qué permiso o autorización cuenta?</p>",
                "titulo_mencion": "Bionegocios",
                "id_campo_tipo": 1,
                "id_formulario": 10,
                "id_campo": 63,
                "tipo_campo": "texto",
                "sino": true,
                "id_sino": "m10_2a"
            },
            {
                "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Consideraciones ambientales en el proceso productivo</strong></p> <p class='ml-3'>coméntenos sobre las tecnologías de bajo impacto ambiental que usa la experiencia. (Use hasta 150 palabras)</p></div>",
                "nombre_maquina": "2_b",
                "titulo_campo": "",
                "titulo_mencion": "Bionegocios",
                "id_campo_tipo": 1,
                "id_formulario": 10,
                "id_campo": 64,
                "tipo_campo": "texto",
                "limit": 150
            },
          {
              "descripcion": "<div class='desc-group'> <p class='group-title'><strong>3. Apoyo al desarrollo de la actividad económica local</strong></p> <p>Se evaluarán los vínculos establecidos por la experiencia con las comunidades locales para beneficiarlas.</p> <p class='ml-3'>a. Describa cómo la experiencia incorpora productores locales en su cadena de producción. (Use hasta 150 palabras).</p></div>",
              "nombre_maquina": "3_a_1",
              "titulo_campo": "",
              "titulo_mencion": "Bionegocios",
              "id_campo_tipo": 1,
              "id_formulario": 10,
              "id_campo": 65,
              "tipo_campo": "texto",
              "limit": 150
          },
          {
              "descripcion": "<div class='desc-group'> <p class='ml-5'>Liste a los principales grupos de productores locales beneficiados</p></div>",
              "nombre_maquina": "3_a_2",
              "titulo_campo": "",
              "titulo_mencion": "Bionegocios",
              "id_campo_tipo": 1,
              "id_formulario": 10,
              "id_campo": 66,
              "tipo_campo": "texto",
              "limit": 150
          },
          {
            "descripcion": "<div class='desc-group'> <p class='ml-3'>b. Señale las principales acciones de mejora de capacidades técnico-productivas de los productores implementadas por la Experiencia</p></div>",
            "nombre_maquina": "3_b",
            "titulo_campo": "",
            "titulo_mencion": "Bionegocios",
            "id_campo_tipo": 1,
            "id_formulario": 10,
            "id_campo": 67,
            "tipo_campo": "texto"
        },
        {
            "descripcion": "<div class='desc-group'> <p class='ml-3'>c. Señale las principales acciones de mejora de capacidades organizativas de los productores implementadas por la Experiencia</p></div>",
            "nombre_maquina": "3_c",
            "titulo_campo": "",
            "titulo_mencion": "Bionegocios",
            "id_campo_tipo": 1,
            "id_formulario": 10,
            "id_campo": 68,
            "tipo_campo": "texto"
        },
        {
            "descripcion": "<div class='desc-group'> <p class='ml-3'>d. Señale las acciones de mejora socio-económicas de los productores implementadas por la\nExperiencia</p></div>",
            "nombre_maquina": "3_d",
            "titulo_campo": "",
            "titulo_mencion": "Bionegocios",
            "id_campo_tipo": 1,
            "id_formulario": 10,
            "id_campo": 69,
            "tipo_campo": "texto"
        },
          {
              "descripcion": "<div class='desc-group'> <p class='group-title'><strong>4. Sostenibilidad del manejo del recurso como factor de diferenciación del producto o servicio</strong></p> <p>Se evaluará la adopción del manejo sostenible de la biodiversidad como elemento central en la promoción comercial del producto o servicio</p> <p class='ml-3'><strong>a. Estrategia de ventas</strong></p> <p class='ml-3'>Describa cómo la experiencia promociona sus productos o servicios apelando a su contribución a la conservación (Use hasta 150 palabras).</p></div>",
              "nombre_maquina": "4_a",
              "titulo_campo": "",
              "titulo_mencion": "Bionegocios",
              "id_campo_tipo": 1,
              "id_formulario": 10,
              "id_campo": 70,
              "tipo_campo": "texto",
              "limit": 150
          },
          {
              "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Certificaciones</strong></p> <p class='ml-3'>¿La Experiencia comercializa productos o servicios con certificaciones que incluyen estándares ambientales?</p></div>",
              "nombre_maquina": "4_b",
              "titulo_campo": "<p>¿Con qué certificaciones cuenta? Liste:</p>",
              "titulo_mencion": "Bionegocios",
              "id_campo_tipo": 1,
              "id_formulario": 10,
              "id_campo": 71,
              "tipo_campo": "texto",
              "sino": true,
              "id_sino": "m10_4b"
          }
        ]
      },

      'Mitigación al cambio climático': {
        description: 'En esta sección se busca conocer iniciativas orientadas a reducir las emisiones de los gases de efecto invernadero y/o contribuir con la generación de sumideros de carbono.',
        fields: [
          {
              "descripcion": "<div class='desc-group'> <p class='group-title'><strong>1. Reducción de emisiones de GEI</strong></p> <p>Se evaluará la disminución de las emisiones netas de GEI como resultado de la implementación de acciones de mitigación de fuentes de emisión de GEI y/o de incremento de las absorciones producidas por los sumideros, en comparación a las emisiones netas de GEI que se habrían producido sin implementar la experiencia.</p> <p class='ml-3'><strong>a. Reducciones netas de emisiones de GEI</strong></p> <p class='ml-3'>Indique cuál ha sido la reducción neta de emisiones de GEI, producto de la Experiencia</p></div>",
              "nombre_maquina": "1_a_1",
              "titulo_campo": "",
              "titulo_mencion": "Mitigación al cambio climático",
              "id_campo_tipo": 1,
              "id_formulario": 11,
              "id_campo": 72,
              "tipo_campo": "texto"
          },
          {
            "descripcion": "<div class='desc-group'> <p class='ml-5'>Comente sobre la situación anterior a la Experiencia y la que se produce como resultado de su implementación (Use hasta 150 palabras).</p></div>",
            "nombre_maquina": "1_a_2",
            "titulo_campo": "",
            "titulo_mencion": "Mitigación al cambio climático",
            "id_campo_tipo": 1,
            "id_formulario": 11,
            "id_campo": 73,
            "tipo_campo": "texto",
            "limit": 150
        },
        {
            "descripcion": "<div class='desc-group'> <p class='group-title'><strong>2. Promoción de mecanismos con atención a poblaciones vulnerables</strong></p> <p>Se evaluará el grado en que los mecanismos empleados generan beneficios a favor de poblaciones vulnerables.</p> <p class='ml-3'><strong>a. Tipo de beneficios generados</strong></p> <p class='ml-3'>precise sobre los beneficios relacionados a la salud, desarrollo económico, acceso a servicios públicos, entre otros, que han sido generados por la Experiencia. (Use hasta 150 palabras).</p></div>",
            "nombre_maquina": "2_a",
            "titulo_campo": "",
            "titulo_mencion": "Mitigación al cambio climático",
            "id_campo_tipo": 1,
            "id_formulario": 11,
            "id_campo": 74,
            "tipo_campo": "texto",
            "limit": 150
        },
        {
            "descripcion": "<div class='desc-group'> <p class='group-title'><strong>3. Mejora del conocimiento y sensibilización en la población del ámbito del proyecto</strong></p> <p>Se evaluará el grado en que la población del ámbito del proyecto ha visto ampliado su conocimiento sobre la mitigación de las fuentes de emisiones de GEI.</p> <p class='ml-3'><strong>a .Competencias desarrolladas en la población objetivo</strong></p> <p class='ml-3'>Describa cuáles han sido las competencias/capacidades locales generadas por la Experiencia para el desarrollo de actividades económicas y modos de vida bajos en emisiones de carbono o que contribuyen a mejorar la capacidad de captura de los sumideros de GEI. (Use hasta 150 palabras).</p></div>",
            "nombre_maquina": "3_a",
            "titulo_campo": "",
            "titulo_mencion": "Mitigación al cambio climático",
            "id_campo_tipo": 1,
            "id_formulario": 11,
            "id_campo": 75,
            "tipo_campo": "texto",
            "limit": 150
        },
        {
            "descripcion": "<div class='desc-group'> <p class='group-title'><strong>4. Aporte en la conservación de ecosistemas locales</strong></p> <p>Se evaluará el grado en que la experiencia contribuye a mantener las condiciones de los ecosistemas y la provisión de bienes y servicios ambientales.el conocimiento y sensibilización en la población del ámbito del proyecto</p> <p class='ml-3'><strong>a. Contribución a la conservación</strong></p> <p class='ml-3'>Describa cómo la experiencia contribuye a conservar los ecosistemas locales. (Use hasta 150 palabras).</p></div>",
            "nombre_maquina": "4_a",
            "titulo_campo": "",
            "titulo_mencion": "Mitigación al cambio climático",
            "id_campo_tipo": 1,
            "id_formulario": 11,
            "id_campo": 76,
            "tipo_campo": "texto",
            "limit": 150
        }
        ]
      },

      'Adaptación al cambio climático': {
        description: 'En esta sección se busca conocer las iniciativas que aportan a la valoración, recuperación y difusión de los conocimientos, saberes y prácticas de las poblaciones para protegerse de los impactos que la variabilidad climática y el cambio climático producen en sus medios de vida (recursos naturales, cultivos, crianzas, etc.).',
        fields: [
            {
                "descripcion": "<div class='desc-group'> <p class='group-title'><strong>1. Capacidad de absorción, preparación y recuperación frente a impactos de los peligros asociados al cambio climático (Resiliencia)</strong></p> <p>Se evaluará el desarrollo de acciones que incrementan la resiliencia, con medidas estructurales y no estructurales. Una medida estructural comprende obras físicas, y las medidas no estructurales son intervenciones vinculadas a la creación o mejora de la capacidad de respuesta a nivel institucional y en la población beneficiaria.</p> <p class='ml-3'><strong>a. Desarrollo de medidas estructurales de incremento de resiliencia</strong></p> <p class='ml-3'>¿La Experiencia ha implementado medidas o acciones estructurales, que incrementan la resiliencia?</p></div>",
                "nombre_maquina": "1_a",
                "titulo_campo": "<p>¿Cuáles?</p>",
                "titulo_mencion": "Adaptación al cambio climático",
                "id_campo_tipo": 1,
                "id_formulario": 12,
                "id_campo": 77,
                "tipo_campo": "texto",
                "sino": true,
                "id_sino": "m12_1a"
            },
            {
                "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Desarrollo de medidas no estructurales de incremento de resiliencia</strong></p> <p class='ml-5'>¿La Experiencia ha logrado generar documentos de Gestión institucionalizada, que incrementan la capacidad de reacción ante eventos asociados al cambio climático?</p></div>",
                "nombre_maquina": "1_b_1",
                "titulo_campo": "<p>¿Cuáles?</p>",
                "titulo_mencion": "Adaptación al cambio climático",
                "id_campo_tipo": 1,
                "id_formulario": 12,
                "id_campo": 78,
                "tipo_campo": "texto",
                "sino": true,
                "id_sino": "m12_1b1"
            },
            {
                "descripcion": "<div class='desc-group'> <p class='ml-5'>¿La Experiencia ha desarrollado eventos de capacitación orientados a incrementar la capacidad de reacción y organización de la población ante eventos asociados al cambio climático?</p></div>",
                "nombre_maquina": "1_b_2",
                "titulo_campo": "<p>¿Cuáles?</p>",
                "titulo_mencion": "Adaptación al cambio climático",
                "id_campo_tipo": 1,
                "id_formulario": 12,
                "id_campo": 79,
                "tipo_campo": "texto",
                "sino": true,
                "id_sino": "m12_1b2"
            },
            {
                "descripcion": "<div class='desc-group'> <p class='group-title'><strong>2. Incremento de capacidad de adaptación</strong></p> <p>Se evaluarán ajustes en los sistemas sociales, ecológicos o económicos como respuesta a los impactos actuales o esperados derivados del cambio climático. Se refiere a las adecuaciones en los procesos, las prácticas y las estructuras para moderar el daño potencial o para aprovechar las oportunidades.</p> <p class='ml-3'>a. Indique cómo la Experiencia permitió a la población participar activamente con propuestas de incorporación de medidas de adaptación al cambio climático en procesos de planificación de su territorio (Use hasta 150 palabras).</p></div>",
                "nombre_maquina": "2_a",
                "titulo_campo": "",
                "titulo_mencion": "Adaptación al cambio climático",
                "id_campo_tipo": 1,
                "id_formulario": 12,
                "id_campo": 80,
                "tipo_campo": "texto",
                "limit": 150
            },
          {
              "descripcion": "<div class='desc-group'> <p class='ml-3'>b. Indique cómo a Experiencia permitió que la población implementara acciones y/o prácticas como medida de adaptación al cambio climático (Use hasta 150 palabras).</p></div>",
              "nombre_maquina": "2_b",
              "titulo_campo": "",
              "titulo_mencion": "Adaptación al cambio climático",
              "id_campo_tipo": 1,
              "id_formulario": 12,
              "id_campo": 81,
              "tipo_campo": "texto",
              "limit": 150
          },
          {
            "descripcion": "<div class='desc-group'> <p class='ml-3'>c. Señale las acciones de adaptación al cambio climático que han sido incorporadas en políticas y/o planes, programas, o proyectos del nivel territorial.</p></div>",
            "nombre_maquina": "2_c",
            "titulo_campo": "",
            "titulo_mencion": "Adaptación al cambio climático",
            "id_campo_tipo": 2,
            "id_formulario": 12,
            "id_campo": 82,
            "tipo_campo": "tabla"
        },
        {
            "descripcion": "<div class='desc-group'> <p class='group-title'><strong>3. Ecosistemas productivos</strong></p> <p>Se evaluará la intervención en ecosistemas de importancia para la población, y que contribuyen a su desarrollo económico.</p> <p class='ml-3'><strong>a. Recuperación de ecosistema altamente valorado por la sociedad</strong></p> <p class='ml-3'>Describa cómo la Experiencia logró la recuperación de un ecosistema altamente valorado por la sociedad por sus bienes y servicios. (Use hasta 150 palabras).</p></div>",
            "nombre_maquina": "3_a",
            "titulo_campo": "",
            "titulo_mencion": "Adaptación al cambio climático",
            "id_campo_tipo": 1,
            "id_formulario": 12,
            "id_campo": 83,
            "tipo_campo": "texto",
            "limit": 150
        },
          {
              "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Generación y potencialización de actividades económicas en la zona de intervención</strong></p> <p class='ml-3'>Describa las principales acciones desarrolladas en el ecosistema, que contribuyeron al mejoramiento de las actividades productivas. (Use hasta 150 palabras).</p></div>",
              "nombre_maquina": "3_b",
              "titulo_campo": "",
              "titulo_mencion": "Adaptación al cambio climático",
              "id_campo_tipo": 1,
              "id_formulario": 12,
              "id_campo": 84,
              "tipo_campo": "texto",
              "limit": 150
          }
        ]
      },

      'Gestión integral del territorio': {
        description: 'En esta sección se busca conocer las iniciativas que aportan a la valoración, recuperación y difusión de los conocimientos, saberes y prácticas de las poblaciones para protegerse de los impactos que la variabilidad climática y el cambio climático producen en sus medios de vida (recursos naturales, cultivos, crianzas, etc.).',
        fields: [
            {
                "descripcion": "<div class='desc-group'> <p class='group-title'><strong>1. Contribución a la gestión ambiental adecuada del territorio</strong></p> <p>Se evaluarán las medidas que consideran y ponen en valor las potencialidades naturales y el aprovechamiento sostenible de los recursos sobre un territorio determinado, contribuyendo a mejorar las oportunidades y la calidad de vida de la población. Siendo la conservación compatible con el desarrollo, la contribución a la gestión ambiental del territorio debe generar escenarios propicios para el desarrollo de actividades económicas como son: el turismo, la pesca, la agricultura; así como actividades de conservación.</p> <p class='ml-3'><strong>a. Aporte de las prácticas que visibilicen el uso ordenado y armonioso del territorio, considerando la dimensión ambiental</strong></p> <p class='ml-3'>¿La Experiencia muestra resultados positivos en la ocupación y uso sostenible del territorio y de sus recursos naturales?</p></div>",
                "nombre_maquina": "1_a_1",
                "titulo_campo": "<p>¿Cuáles?</p>",
                "titulo_mencion": "Gestión integral del territorio",
                "id_campo_tipo": 1,
                "id_formulario": 13,
                "id_campo": 85,
                "tipo_campo": "texto",
                "sino": true,
                "id_sino": "m13_1a1"
            },
            {
                "descripcion": "<div class='desc-group'> <p class='ml-5'>¿La Experiencia presenta resultados de la recuperación y puesta en valor de zonas deterioradas?</p></div>",
                "nombre_maquina": "1_a_2",
                "titulo_campo": "<p>¿Cuáles?</p>",
                "titulo_mencion": "Gestión integral del territorio",
                "id_campo_tipo": 1,
                "id_formulario": 13,
                "id_campo": 86,
                "tipo_campo": "texto",
                "sino": true,
                "id_sino": "m13_1a2"
            },
            {
                "descripcion": "<div class='desc-group'> <p class='ml-5'>¿La Experiencia muestra resultados en el uso sostenible de los recursos que mejoran las oportunidades y la calidad de vida de la población?</p></div>",
                "nombre_maquina": "1_a_3",
                "titulo_campo": "<p>¿Cuáles?</p>",
                "titulo_mencion": "Gestión integral del territorio",
                "id_campo_tipo": 1,
                "id_formulario": 13,
                "id_campo": 87,
                "tipo_campo": "texto",
                "sino": true,
                "id_sino": "m13_1a3"
            },
          {
              "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Desarrollo de instrumentos, acciones y/o proyectos que permita tomar mejores decisiones en la gestión del territorio</strong></p> <p class='ml-3'>¿La Experiencia cuenta con instrumentos para la gestión del territorio a nivel regional o local que impulsen el ordenamiento territorial ambiental?</p></div>",
              "nombre_maquina": "1_b",
              "titulo_campo": "<p>¿Cuáles?</p>",
              "titulo_mencion": "Gestión integral del territorio",
              "id_campo_tipo": 1,
              "id_formulario": 13,
              "id_campo": 88,
              "tipo_campo": "texto",
              "sino": true,
              "id_sino": "m13_1b"
          },
          {
            "descripcion": "<div class='desc-group'> <p class='group-title'><strong>2. Contribución al manejo integrado del territorio</strong></p> <p>Se evaluarán las acciones que contribuyen a la conservación y el manejo sostenible del territorio en zonas marino costeras, áreas naturales protegidas y zonas de amortiguamiento a través de procesos que permitan la articulación y gobernanza entre diversos actores (gobiernos subnacionales, organizaciones, asociaciones, empresarios u sociedad civil, entre otros), para: impulsar la recuperación de ecosistemas degradados, reducir la contaminación de aguas, evitar la erosión de suelos, prevenir la sobreexplotación de especies y mejorar la calidad de vida de los pobladores</p> <p class='ml-3'><strong>a. Aportes a la gobernanza para la conservación y el manejo sostenible de las zonas marino-costeras y la calidad de vida de la población.</strong></p> <p class='ml-5'>¿La Experiencia presenta resultados de la articulación con gobiernos subnacionales y actores locales para impulsar el manejo integrado de las zonas marino-costeras (gobernanza)?</p></div>",
            "nombre_maquina": "2_a_1",
            "titulo_campo": "<p>¿Cuáles?</p>",
            "titulo_mencion": "Gestión integral del territorio",
            "id_campo_tipo": 1,
            "id_formulario": 13,
            "id_campo": 89,
            "tipo_campo": "texto",
            "sino": true,
            "id_sino": "m13_2a1"
        },
          {
              "descripcion": "<div class='desc-group'> <p class='ml-5'>¿La Experiencia visibiliza los beneficios de promover la gestión integrada del territorio en la recuperación de los ecosistemas que abarca?</p></div>",
              "nombre_maquina": "2_a_2",
              "titulo_campo": "<p>¿Cuáles?</p>",
              "titulo_mencion": "Gestión integral del territorio",
              "id_campo_tipo": 1,
              "id_formulario": 13,
              "id_campo": 90,
              "tipo_campo": "texto",
              "sino": true,
              "id_sino": "m13_2a2"
          },
          {
            "descripcion": "<div class='desc-group'> <p class='ml-5'>¿La Experiencia cuenta con instrumentos para la gestión en las zonas marino costeras aprobados?</p></div>",
            "nombre_maquina": "2_a_3",
            "titulo_campo": "<p>¿Cuáles?</p>",
            "titulo_mencion": "Gestión integral del territorio",
            "id_campo_tipo": 1,
            "id_formulario": 13,
            "id_campo": 91,
            "tipo_campo": "texto",
            "sino": true,
            "id_sino": "m13_2a3"
        },
        {
            "descripcion": "<div class='desc-group'> <p class='ml-5'>¿La Experiencia presenta resultados sobre la reducción de la contaminación del litoral y la recuperación del ecosistema?</p></div>",
            "nombre_maquina": "2_a_4",
            "titulo_campo": "<p>¿Cuáles?</p>",
            "titulo_mencion": "Gestión integral del territorio",
            "id_campo_tipo": 1,
            "id_formulario": 13,
            "id_campo": 92,
            "tipo_campo": "texto",
            "sino": true,
            "id_sino": "m13_2a4"
        },
          {
              "descripcion": "<div class='desc-group'> <p class='group-title'><strong>3. Contribución al monitoreo y evaluación del territorio y sus recursos </strong></p> <p>Se evaluarán las acciones de monitoreo y evaluación permanente del territorio y sus recursos naturales, a partir de la producción de información fundamental para la toma de decisiones, la planificación y el desarrollo de políticas públicas para la gestión territorial, la inversión pública y privada, la investigación científica y la promoción del desarrollo sostenible.</p> <p class='ml-3'><strong>a. Aportes que contribuyan a generar información oportuna, en monitoreo y evaluación, para la gestión territorial ambiental para la conservación de los ecosistemas.</strong></p> <p class='ml-3'>Marque Si o No, en el tema o temas en los que contribuye al monitoreo y evaluación del territorio, y responda ¿Cómo?:</p></div>",
              "nombre_maquina": "3_a_1",
              "titulo_campo": "",
              "titulo_mencion": "Gestión integral del territorio",
              "id_campo_tipo": 2,
              "id_formulario": 13,
              "id_campo": 93,
              "tipo_campo": "tabla"
          },
          {
              "descripcion": "<div class='desc-group'> <p class='ml-5'>Responda ¿La información proporcionada permite gestionar adecuadamente el riesgo de desastres?</p></div>",
              "nombre_maquina": "3_a_2",
              "titulo_campo": "<p>¿Cómo?</p>",
              "titulo_mencion": "Gestión integral del territorio",
              "id_campo_tipo": 1,
              "id_formulario": 13,
              "id_campo": 94,
              "tipo_campo": "texto",
              "sino": true,
              "id_sino": "m13_3a2"
          }
        ]
      },

      'Inclusión social en la gestión ambiental': {
        description: 'En esta sección se busca conocer las experiencias que propician una participación activa y pluricultural de la población en la gestión ambiental, y en particular la intervención directa de grupos de población minoritarios o vulnerables, así como de mujeres y jóvenes, sin discriminación alguna.',
        fields: [
            {
                "descripcion": "<div class='desc-group'> <p class='group-title'><strong>1. Contribución a la participación activa y pluricultural de la población en la gestión ambiental</strong></p> <p>Se evaluarán las acciones realizadas por la experiencia para promover espacios de concertación en los que participen representantes de grupos de población minoritarios o vulnerables, así como de mujeres y jóvenes; con el fin de incorporar aspectos en la experiencia que permitan superar las desigualdades y mejorar el nivel de vida de los grupos concernidos.</p> <p class='ml-3'><strong>a. Mecanismos de participación para la gestión ambiental</strong></p> <p class='ml-3'>¿La experiencia cuenta con mecanismos de participación para la gestión ambiental en la que intervienen representantes de grupos minoritarios o vulnerables, mujeres o jóvenes (comité de gestión, mesa de diálogo, planes de desarrollo u otro instrumento), reconocido o aprobado a través de norma nacional o regional o local; o -si son experiencias comunales- instrumentos reconocidos por actas o acuerdos de los grupos de interés?</p></div>",
                "nombre_maquina":"1_a",
                "titulo_campo":"<p>¿Con qué mecanismo/s aprobado/s cuenta?</p>",
                "titulo_mencion":"Inclusión social en la gestión ambiental",
                "id_campo_tipo":1,
                "id_formulario":14,
                "id_campo":123,
                "tipo_campo":"texto",
                "sino": true,
                "id_sino": "m14_1a"
             },
             {
                "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Acciones en favor de grupos minoritarios o vulnerables beneficiados</strong></p> <p class='ml-3'>Describa en un máximo de 150 palabras las principales acciones promovidas a través del mecanismo de participación en favor de los grupos minoritarios o vulnerables, mujeres o jóvenes, sobre los que interviene la experiencia.</p></div>",
                "nombre_maquina":"1_b_1",
                "titulo_campo":"",
                "titulo_mencion":"Inclusión social en la gestión ambiental",
                "id_campo_tipo":1,
                "id_formulario":14,
                "id_campo":124,
                "tipo_campo":"texto",
                "limit": 150
             },
             {
                "descripcion": "<div class='desc-group'> <p class='ml-5'>Señale el grupo e indique cómo ha sido favorecido</p></div>",
                "nombre_maquina":"1_b_2",
                "titulo_campo":"",
                "titulo_mencion":"Inclusión social en la gestión ambiental",
                "id_campo_tipo":2,
                "id_formulario":14,
                "id_campo":125,
                "tipo_campo":"tabla"
             },
             {
                "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>c. Instrumentos de monitoreo y evaluación</strong></p> <p class='ml-3'>Responda: ¿El mecanismo de participación cuenta con instrumentos de monitoreo o evaluación que permiten visibilizar la participación de los grupos minoritarios o vulnerables (línea de base, listas de participación, matriz de seguimiento, mapa de actores, cuotas de representación, otros)?</p></div>",
                "nombre_maquina":"1_c",
                "titulo_campo":"<p>Si su respuesta es SI, comente sobre el/los instrumento/s utilizado/s y su aplicación (use hasta 100 palabras):</p>",
                "titulo_mencion":"Inclusión social en la gestión ambiental",
                "id_campo_tipo":1,
                "id_formulario":14,
                "id_campo":126,
                "tipo_campo":"texto",
                "sino": true,
                "id_sino": "m14_1c"
             },
             {
                "descripcion": "<div class='desc-group'> <p class='group-title'><strong>2. Uso de herramientas y otros medios, que ayudan a reducir las brechas de desigualdad</strong></p> <p>Se busca conocer las acciones destinadas a eliminar todas las formas de discriminación y adoptar medidas para fortalecer las capacidades para el diseño y uso de instrumentos de planificación, prevención, corrección, información, participación y fiscalización para ejercer una eficaz ciudadanía ambiental.</p> <p class='ml-3'>a. Describa las principales actividades realizadas para promover la igualdad y combatir la discriminación contra las minorías religiosas, étnicas, las personas de ascendencia africana, los pueblos indígenas, las personas con discapacidad, los migrantes, las personas mayores, los niños, las mujeres o las personas LGBTI, entre otras. (use hasta 100 palabras):</p></div>",
                "nombre_maquina":"2_a",
                "titulo_campo":"",
                "titulo_mencion":"Inclusión social en la gestión ambiental",
                "id_campo_tipo":1,
                "id_formulario":14,
                "id_campo":127,
                "tipo_campo":"texto",
                "limit": 100
             },
             {
                "descripcion": "<div class='desc-group'> <p class='ml-3'>b. Comente sobre los eventos de capacitación realizados, orientados a promover buenas prácticas para combatir la discriminación en todas sus formas, abordando las causas fundamentales de la desigualdad. (use hasta 100 palabras):</p></div>",
                "nombre_maquina":"2_b",
                "titulo_campo":"",
                "titulo_mencion":"Inclusión social en la gestión ambiental",
                "id_campo_tipo":1,
                "id_formulario":14,
                "id_campo":128,
                "tipo_campo":"texto",
                "limit": 100
             },
             {
                "descripcion": "<div class='desc-group'> <p class='group-title'><strong>3. Aporte al ejercicio de los derechos de acceso</strong></p> <p>Se busca conocer sobre el abordaje de los derechos de acceso a la información pública ambiental, participación en la toma de decisiones sobre asuntos públicos ambientales, y acceso a la justicia en asuntos ambientales, consagrados en los Artículos II, III y IV de la Ley Nº 28611, Ley General del Ambiente.</p> <p class='ml-3'><strong>a. Información ambiental</strong></p> <p class='ml-3'>Indique cuáles son las principales fuentes oficiales de información ambiental que utiliza, y coméntenos cómo promueve el uso de esta información entre los participantes para que adopten decisiones (use hasta 100 palabras):</p></div>",
                "nombre_maquina":"3_a",
                "titulo_campo":"",
                "titulo_mencion":"Inclusión social en la gestión ambiental",
                "id_campo_tipo":1,
                "id_formulario":14,
                "id_campo":129,
                "tipo_campo":"texto",
                "limit": 100
             },
             {
                "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>b. Participación ciudadana</strong></p> <p class='ml-3'>Indique si se ha impulsado desde la Experiencia, que los participantes presenten propuestas en instancias de participación ciudadana en la gestión ambiental frente a decisiones de políticas, estrategias, planes y proyectos ambientales. (use hasta 100 palabras):</p></div>",
                "nombre_maquina":"3_b",
                "titulo_campo":"",
                "titulo_mencion":"Inclusión social en la gestión ambiental",
                "id_campo_tipo":1,
                "id_formulario":14,
                "id_campo":130,
                "tipo_campo":"texto",
                "limit": 100
             },
            {
               "descripcion": "<div class='desc-group'> <p class='ml-3'><strong>c. Justicia ambiental</strong></p> <p class='ml-3'>¿La experiencia ha impulsado que los participantes presenten denuncias para proteger derechos ambientales o corregir daños ambientales haciendo uso de los mecanismos públicos establecidos para las denuncias ambientales?</p> <p>(use hasta 100 palabras):</p></div>",
               "nombre_maquina":"3_c",
               "titulo_campo":"",
               "titulo_mencion":"Inclusión social en la gestión ambiental",
               "id_campo_tipo":1,
               "id_formulario":14,
               "id_campo":131,
               "tipo_campo":"texto",
               "limit": 100
            }
         ]
      }
    }

    return forms[mencion];
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

  getValueTablaRow(idc, row, col, preguntasTablaAnswer) {
    let _root = this;
    
    for(let item of preguntasTablaAnswer) {
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

  getTipoExperiencia(id) {
      let tipo = '';
      if(id == '1') {
        tipo = 'Individual';
      }
      else {
        tipo = 'Grupal';
      }

      return tipo;
  }

  getPreviewPostulacion(data:any = {}) {
    let _root = this;
    let _menciones = `
    <div class="mencion-content">
        <div style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
            <ol style="margin-bottom:0cm;list-style-type: upper-roman;">
                <li style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;font-size:9.0pt;color:#002060;'>${ data.mencionTitle }</span></li>
            </ol>
            <p style='margin:15px 0;font-size:15px;font-family:"Calibri",sans-serif;'><span style='display:block;margin:15px 0;font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ data.mencionDesc }</span></p>
        </div>
    `;

      for(let mencion of data.menciones) {
        if( mencion.descripcion != '' ) {
            _menciones += `
            <p>
                <small><span>${mencion.descripcion}</span></small>
            </p>
            `;
        }

        if( mencion.tipo_campo == 'texto' ) {
            if( mencion.sino !== undefined ) {
                if( (_root.getValueAnswer(mencion.value, 'sino') == 'si') ) {
                    _menciones += `
                    <label>SI</label>
                    <small><span>${ (mencion.titulo_campo != '') ? mencion.titulo_campo : '' }</span></small>
                    <small><span style="box-sizing: border-box;display:block;width: 100%;border: 1pt solid windowtext;background: rgb(242, 242, 242);padding: 20px;vertical-align: top;">${ _root.getValueAnswer(mencion.value) }</span></small>
                    `;
                }
            }
            else {
                _menciones += `
                <small><span>${ (mencion.titulo_campo != '') ? mencion.titulo_campo : '' }</span></small>
                <small><span style="box-sizing: border-box;display:block;width: 100%;border: 1pt solid windowtext;background: rgb(242, 242, 242);padding: 20px;vertical-align: top;">${ _root.getValueAnswer(mencion.value) }</span></small>
                `;
            }
        }
        else if( mencion.tipo_campo == 'tabla' ) {
            _menciones += `
            <table style="width:100%!important;border-collapse:collapse;border: none;">
                <thead>
            `;

            if( mencion.tabla.header_filas !== null ) {
                let _i = 0;
                for( let itemh of [].constructor((mencion.tabla.nro_columnas + 1))) {
                    _menciones += `
                    <th style="width: 168.7pt;border: 1pt solid windowtext;background: rgb(242, 242, 242);padding: 0cm 5.4pt;vertical-align: top;">
                        ${ (_i == 0) ? '<span></span>' : '' }
                        ${ (_i != 0) ? '<span>'+ mencion.tabla[('titulo_col_' + (_i))] +'</span>' : '' }
                    </th>
                    `;
                    _i++;
                }
            }
            else if( mencion.tabla.header_filas === null ) {
                let _i = 0;
                for( let itemh of [].constructor((mencion.tabla.nro_columnas))) {
                    _menciones += `
                    <th style="width: 168.7pt;border: 1pt solid windowtext;background: rgb(242, 242, 242);padding: 0cm 5.4pt;vertical-align: top;">
                        <span>${ mencion.tabla[('titulo_col_' + (_i + 1))] }</span>
                    </th>
                    `;
                    _i++;
                }
            }

            _menciones += `
            </thead>
            <tbody>
            `;

            if( mencion.tabla.header_filas !== null ) {
                let _i = 0;
                for( let itemr of [].constructor((mencion.tabla.nro_filas))) {
                    let _j = 0;
                    _menciones += `
                    <tr>
                    `;
                    for(let itemri of [].constructor((mencion.tabla.nro_columnas + 1))) {
                        if(_j == 0) {
                            _menciones += `
                            <td style="width: 168.7pt;border: 1pt solid windowtext;background: rgb(242, 242, 242);padding: 0cm 5.4pt;vertical-align: top;">
                                <p>${mencion.tabla[('titulo_fila_' + (_i + 1))]}</p>
                            </td>
                            `;
                        }
                        else if(_j != 0) {
                            _menciones += `
                            <td style="width: 168.7pt;border: 1pt solid windowtext;background: rgb(242, 242, 242);padding: 0cm 5.4pt;vertical-align: top;">
                                <p>${ (_root.getValueTablaRow( mencion.tabla.id_campo, (_i + 1), _j, data.preguntasTablaAnswer ) !== undefined) ? _root.getValueTablaRow( mencion.tabla.id_campo, (_i + 1), _j, data.preguntasTablaAnswer ) : '' }</p>
                            </td>
                            `;
                        }
                        _j++;
                    }
                    _menciones += `
                    </tr>
                    `;
                    _i++;
                }
            }

            else if( mencion.tabla.header_filas === null ) {
                let _i = 0;
                for( let itemr of [].constructor((mencion.tabla.nro_filas))) {
                    let _j = 0;
                    _menciones += `
                    <tr>
                    `;
                    for(let itemri of [].constructor((mencion.tabla.nro_columnas))) {
                        _menciones += `
                        <td style="width: 168.7pt;border: 1pt solid windowtext;background: rgb(242, 242, 242);padding: 0cm 5.4pt;vertical-align: top;">
                            <p>${ (_root.getValueTablaRow( mencion.tabla.id_campo, (_i + 1), (_j + 1), data.preguntasTablaAnswer ) !== undefined) ? _root.getValueTablaRow( mencion.tabla.id_campo, (_i + 1), (_j + 1), data.preguntasTablaAnswer ) : '' }</p>
                        </td>
                        `;
                        _j++;
                    }
                    _menciones += `
                    </tr>
                    `;
                    _i++;
                }
            }

            _menciones += `
            </tbody>
            </table>
            `;
        }

      }

      _menciones += `
      </div>
      `;

      let _html = `
        <button type="button" onclick="window.print();">Imprimir</button>
        <div>
            <img 
                width="300"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaEAAACBCAYAAABpcwVAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMxOTE0NkFERUJENjExRUE4OUYzRUIwMTVGM0U4QTdGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMxOTE0NkFFRUJENjExRUE4OUYzRUIwMTVGM0U4QTdGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzE5MTQ2QUJFQkQ2MTFFQTg5RjNFQjAxNUYzRThBN0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzE5MTQ2QUNFQkQ2MTFFQTg5RjNFQjAxNUYzRThBN0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6SeV3sAAA/n0lEQVR42uxdB3wU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"/>
            <img 
                width="150"
                src="data:image/png;base64,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" />
        </div>
        <!-- DATOS GENERALES -->
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:16px;font-family:"Arial",sans-serif;color:#002060;'>Ficha de Postulaci&oacute;n del Premio Nacional Ambiental Antonio Brack Egg</span></strong></p>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></strong></p>
        <table style="width:138.75pt;margin-left:70%;border-collapse:collapse;border: none;">
            <tbody>
                <tr>
                    <td style="width: 63.55pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 12.15pt;vertical-align: top;">
                        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Nro. Postulaci&oacute;n&nbsp;</span></p>
                    </td>
                    <td style="width: 75.2pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;height: 12.15pt;vertical-align: top;">
                        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.postulacion.id_postulacion !== null) ? data.postulacion.id_postulacion : '' }</span></p>
                    </td>
                </tr>
            </tbody>
        </table>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><strong><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></strong></p>
        <div style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
            <ol style="margin-bottom:0cm;list-style-type: upper-roman;">
                <li style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;font-size:9.0pt;color:#002060;'>DATOS GENERALES:</span></li>
            </ol>
        </div>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <div style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
            <ol style="margin-bottom:0cm;list-style-type: decimal;margin-left:8px;">
                <li style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;font-size:9.0pt;color:#002060;'>Persona que efect&uacute;a la postulaci&oacute;n</span></li>
            </ol>
        </div>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:18.0pt;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <div align="center" style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
            <table style="width:100%!important;border-collapse:collapse;border:none;">
                <tbody>
                    <tr>
                        <td style="width: 113.15pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:  "Arial",sans-serif;color:#002060;'>Tipo de Documento:</span></p>
                        </td>
                        <td style="width: 350.9pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.postulacion.desc_tipo_doc_persona !== null) ? data.postulacion.desc_tipo_doc_persona : '' }</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 113.15pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:  "Arial",sans-serif;color:#002060;'>Nombres completos</span></p>
                        </td>
                        <td style="width: 350.9pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.user.nombres !== null) ? data.user.nombres : '' }</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 113.15pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:  "Arial",sans-serif;color:#002060;'>N&uacute;mero de documento:</span></p>
                        </td>
                        <td style="width: 350.9pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.user.numero_documento !== null) ? data.user.numero_documento : '' }</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 113.15pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:  "Arial",sans-serif;color:#002060;'>Nacionalidad:</span></p>
                        </td>
                        <td style="width: 350.9pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.user.nacionalidad !== null) ? data.user.nacionalidad : '' }</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 113.15pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:  "Arial",sans-serif;color:#002060;'>Domicilio:</span></p>
                        </td>
                        <td style="width: 350.9pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.user.domicilio !== null) ? data.user.domicilio : '' }</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 113.15pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:  "Arial",sans-serif;color:#002060;'>Tel&eacute;fono:</span></p>
                        </td>
                        <td style="width: 350.9pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.user.telefono1 !== null) ? data.user.telefono1 : '' }</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 113.15pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:  "Arial",sans-serif;color:#002060;'>Correo electr&oacute;nico:</span></p>
                        </td>
                        <td style="width: 350.9pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.user.correo !== null) ? data.user.correo : '' }</span></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <div style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
            <ol style="margin-bottom:0cm;list-style-type: null;margin-left:8px;">
                <li style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;font-size:9.0pt;color:#002060;'>Categor&iacute;a y menci&oacute;n a la que pertenece la experiencia</span></li>
            </ol>
        </div>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <div align="center" style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
            <table style="width:100%!important;border-collapse:collapse;border:none;">
                <tbody>
                    <tr>
                        <td style="width: 113.15pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Categor&iacute;a:</span></p>
                        </td>
                        <td style="width: 350.9pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.postulacion.desc_categoria !== null) ? data.postulacion.desc_categoria : '' }</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 113.15pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Menci&oacute;n</span></p>
                        </td>
                        <td style="width: 350.9pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.postulacion.desc_mencion !== null) ? data.postulacion.desc_mencion : '' }</span></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <div style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
            <ol style="margin-bottom:0cm;list-style-type: null;margin-left:8px;">
                <li style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;font-size:9.0pt;color:#002060;'>T&iacute;tulo de la experiencia</span></li>
            </ol>
        </div>
        <div align="center" style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
            <table style="width:100%!important;border-collapse:collapse;border:none;">
                <tbody>
                    <tr>
                        <td style="width: 463.9pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 17.7pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:  "Arial",sans-serif;color:#002060;'>${ (data.postulacion.titulo_postulacion !== null) ? data.postulacion.titulo_postulacion : '' }</span></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:18.0pt;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <div style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
            <ol style="margin-bottom:0cm;list-style-type: null;margin-left:8px;">
                <li style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;font-size:9.0pt;color:#002060;'>Localizaci&oacute;n de la experiencia</span></li>
            </ol>
        </div>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <div align="center" style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
            <table style="width:100%!important;border-collapse:collapse;border:none;">
                <tbody>
                    <tr>
                        <td style="width: 113.15pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Regi&oacute;n:</span></p>
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                        </td>
                        <td style="width: 350.9pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.postulacion.desc_departamento !== null) ? data.postulacion.desc_departamento : '' }</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 113.15pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Provincia:</span></p>
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                        </td>
                        <td style="width: 350.9pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.postulacion.desc_provincia !== null) ? data.postulacion.desc_provincia : '' }</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 113.15pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Distrito:</span></p>
                        </td>
                        <td style="width: 350.9pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.postulacion.desc_distrito !== null) ? data.postulacion.desc_distrito : '' }</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 113.15pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Localidad/Direcci&oacute;n sede:</span></p>
                        </td>
                        <td style="width: 350.9pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.postulacion.localidad_postulacion !== null) ? data.postulacion.localidad_postulacion : '' }</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 113.15pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Mar peruano</span></p>
                        </td>
                        <td style="width: 350.9pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <div style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
            <ol style="margin-bottom:0cm;list-style-type: null;margin-left:8px;">
                <li style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;font-size:9.0pt;color:#002060;'>Identificaci&oacute;n del postulante</span></li>
            </ol>
        </div>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <div align="center" style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
            <table style="width:100%!important;border-collapse:collapse;border:none;">
                <tbody>
                    <tr>
                        <td colspan="2" style="width: 233.9pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Persona natural</span></p>
                        </td>
                        <td colspan="2" style="width: 229.7pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Persona jur&iacute;dica</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 113.15pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Tipo de experiencia:</span></p>
                        </td>
                        <td style="width: 120.75pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.postulacion.tipo_experiencia !== null) ? _root.getTipoExperiencia(data.postulacion.tipo_experiencia) : '' }</span></p>
                        </td>
                        <td style="width: 100.45pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Nombre entidad:</span></p>
                        </td>
                        <td style="width: 129.25pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 113.15pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Nombres y apellidos de quien lidera o coordina la experiencia:</span></p>
                        </td>
                        <td style="width: 120.75pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.postulacion.nombre_organizacion_natural !== null) ? data.postulacion.nombre_organizacion_natural : '' }</span></p>
                        </td>
                        <td style="width: 100.45pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>N&deg; de R.U.C.:</span></p>
                        </td>
                        <td style="width: 129.25pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.postulacion.numero_documento !== null) ? data.postulacion.numero_documento : '' }</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 113.15pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>N&deg; de documento:</span></p>
                        </td>
                        <td style="width: 120.75pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.postulacion.numero_documento !== null) ? data.postulacion.numero_documento : '' }</span></p>
                        </td>
                        <td style="width: 100.45pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Domicilio legal:</span></p>
                        </td>
                        <td style="width: 129.25pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.postulacion.domicilio_legal !== null) ? data.postulacion.domicilio_legal : '' }</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 113.15pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Cargo:</span></p>
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                        </td>
                        <td style="width: 120.75pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.postulacion.cargo_postulante !== null) ? data.postulacion.cargo_postulante : '' }</span></p>
                        </td>
                        <td style="width: 100.45pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Representante legal:</span></p>
                        </td>
                        <td style="width: 129.25pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.postulacion.representante_legal !== null) ? data.postulacion.representante_legal : '' }</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 113.15pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Tel&eacute;fono:</span></p>
                        </td>
                        <td style="width: 120.75pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.postulacion.telefono_postulante !== null) ? data.postulacion.telefono_postulante : '' }</span></p>
                        </td>
                        <td style="width: 100.45pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Tel&eacute;fono:</span></p>
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                        </td>
                        <td style="width: 129.25pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.postulacion.telefono_postulante !== null) ? data.postulacion.telefono_postulante : '' }</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 113.15pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Correo electr&oacute;nico:</span></p>
                        </td>
                        <td style="width: 120.75pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.postulacion.correo_postulante !== null) ? data.postulacion.correo_postulante : '' }</span></p>
                        </td>
                        <td style="width: 100.45pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Correo electr&oacute;nico:</span></p>
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                        </td>
                        <td style="width: 129.25pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.postulacion.correo_postulante !== null) ? data.postulacion.correo_postulante : '' }</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 113.15pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Redes sociales de la organizaci&oacute;n (opcional):</span></p>
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                        </td>
                        <td style="width: 120.75pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.postulacion.red_social_postulante !== null) ? data.postulacion.red_social_postulante : '' }</span></p>
                        </td>
                        <td style="width: 100.45pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Sitio Web de la organizaci&oacute;n (si tiene):</span></p>
                            <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                        </td>
                        <td style="width: 129.25pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.3pt;vertical-align: top;">
                            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.postulacion.sitio_web_postulante !== null) ? data.postulacion.sitio_web_postulante : '' }</span></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- EXPERIENCIA -->
        <div style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
        <ol style="margin-bottom:0cm;list-style-type: upper-roman;">
            <li style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;font-size:9.0pt;color:#002060;'>&nbsp;INFORMACI&Oacute;N GENERAL DE LA EXPERIENCIA</span></li>
        </ol>
        </div>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <div style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
        <ol style="margin-bottom:0cm;list-style-type: decimal;">
            <li style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;font-size:9.0pt;color:#002060;'>Relevancia de la experiencia</span></li>
        </ol>
        </div>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>a)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Contexto en el que se desarrolla la experiencia</span></p>
        <table style="width:100%!important;border-collapse:collapse;border:none;">
        <tbody>
            <tr>
                <td style="width: 439.4pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 17.7pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.contexto_experiencia !== null) ? data.experiencia.contexto_experiencia : '' }</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></strong></p>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>b)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Aporte a la soluci&oacute;n del problema ambiental identificado</span></p>
        <table style="width:100%!important;border-collapse:collapse;border:none;">
        <tbody>
            <tr>
                <td style="width: 439.4pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 17.7pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.aporte_solucion !== null) ? data.experiencia.aporte_solucion : '' }</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></strong></p>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>c)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Principales resultados</span></p>
        <table style="width:100%!important;border-collapse:collapse;border:none;">
        <tbody>
            <tr>
                <td style="width: 439.4pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 17.7pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.detalle_principales_resultados !== null) ? data.experiencia.detalle_principales_resultados : '' }</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></strong></p>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>d)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Cambios positivos de la experiencia</span></p>
        <table style="width:100%!important;border-collapse:collapse;border:none;">
        <tbody>
            <tr>
                <td style="width: 439.4pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 17.7pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.detalle_resumen_experiencia !== null) ? data.experiencia.detalle_resumen_experiencia : '' }</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></strong></p>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>e)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Caracter&iacute;sticas de la poblaci&oacute;n beneficiaria</span></p>
        <table style="width:100%!important;border-collapse:collapse;border:none;">
        <tbody>
            <tr>
                <td rowspan="2" style="width: 11cm;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 17.7pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.poblacion_beneficiada !== null) ? data.experiencia.poblacion_beneficiada : '' }</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
                <td style="width: 127.55pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;height: 17.7pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><span style='font-size:12px;font-family:  "Arial",sans-serif;color:#002060;'>N&deg; de personas beneficiadas directamente</span></p>
                </td>
            </tr>
            <tr>
                <td style="width: 127.55pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 17.7pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.nro_personas_benef !== null) ? data.experiencia.nro_personas_benef : '' }</span></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <div style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
        <ol style="margin-bottom:0cm;list-style-type: null;">
            <li style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;font-size:9.0pt;color:#002060;'>Sostenibilidad de la experiencia&nbsp;</span></li>
        </ol>
        </div>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:53.25pt;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>a)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Fuentes de financiamiento&nbsp;</span></p>
        <table style="width:100%!important;border-collapse:collapse;border:none;">
        <tbody>
            <tr>
                <td style="width: 439.4pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 17.7pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.fuentes_financiamiento !== null) ? data.experiencia.fuentes_financiamiento : '' }</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>b)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Documentos orientadores</span></p>
        <table style="width:100%!important;border-collapse:collapse;border:none;">
        <tbody>
            <tr>
                <td style="width: 439.4pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 17.7pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.documentos_orientadores !== null) ? ( (data.experiencia.documentos_orientadores).split('|') ).join(' - ') : '' }</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>c)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Recursos accesibles en el mercado</span></p>
        <table style="width:100%!important;border-collapse:collapse;border:none;">
        <tbody>
            <tr>
                <td style="width: 439.4pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 17.7pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.recursos_accesibles !== null) ? data.experiencia.recursos_accesibles : '' }</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>d)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Desarrollo de capacidades</span></p>
        <table style="width:100%!important;border-collapse:collapse;border:none;">
        <tbody>
            <tr>
                <td style="width: 439.4pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 17.7pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.desarrollo_capacidades !== null) ? data.experiencia.desarrollo_capacidades : '' }</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>e)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Incentivos econ&oacute;micos</span></p>
        <table style="width:100%!important;border-collapse:collapse;border:none;">
        <tbody>
            <tr>
                <td style="width: 439.4pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 17.7pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.incentvos_economicos !== null) ? data.experiencia.incentvos_economicos : '' }</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>f)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Apropiaci&oacute;n de la experiencia</span></p>
        <table style="width:100%!important;border-collapse:collapse;border:none;">
        <tbody>
            <tr>
                <td style="width: 439.4pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 17.7pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.detalle_apropiacion_exp !== null) ? data.experiencia.detalle_apropiacion_exp : '' }</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
        </table>

        <div style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
        <ol style="margin-bottom:0cm;list-style-type: decimal;">
            <li style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;font-size:9.0pt;color:#002060;'>Replicabilidad de la experiencia</span></li>
        </ol>
        </div>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <div style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
        <ol start="1" style="margin-bottom:0cm;list-style-type: lower-alpha;margin-left:60.650000000000006px;">
            <li style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;font-size:9.0pt;color:#002060;'>Cambios positivos</span></li>
        </ol>
        </div>
        <table style="width:100%!important;border-collapse:collapse;border: none;">
        <tbody>
            <tr>
                <td style="width: 467.8pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 17.7pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.cambios_positivos !== null) ? data.experiencia.cambios_positivos : '' }</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:70.65pt;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <div style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
        <ol start="2" style="margin-bottom:0cm;list-style-type: lower-alpha;margin-left:60.650000000000006px;">
            <li style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;font-size:9.0pt;color:#002060;'>Factores de riesgo</span></li>
        </ol>
        </div>
        <table style="width:100%!important;border-collapse:collapse;border: none;">
        <tbody>
            <tr>
                <td style="width: 467.8pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 17.7pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.factores_riesgo !== null) ? data.experiencia.factores_riesgo : '' }</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:70.65pt;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <div style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
        <ol start="3" style="margin-bottom:0cm;list-style-type: lower-alpha;margin-left:60.650000000000006px;">
            <li style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;font-size:9.0pt;color:#002060;'>Factores de &eacute;xito</span></li>
        </ol>
        </div>
        <table style="width:100%!important;border-collapse:collapse;border: none;">
        <tbody>
            <tr>
                <td style="width: 467.8pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 17.7pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.factores_exito !== null) ? data.experiencia.factores_exito : '' }</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:70.65pt;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <div style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
        <ol start="4" style="margin-bottom:0cm;list-style-type: lower-alpha;margin-left:60.650000000000006px;">
            <li style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;font-size:9.0pt;color:#002060;'>Condiciones para que la experiencia pueda ser reproducida</span></li>
        </ol>
        </div>
        <table style="width:100%!important;border-collapse:collapse;border: none;">
        <tbody>
            <tr>
                <td style="width: 467.8pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 17.7pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.condiciones_experiencia !== null) ? data.experiencia.condiciones_experiencia : '' }</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:70.65pt;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <div style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
        <ol start="5" style="margin-bottom:0cm;list-style-type: lower-alpha;margin-left:60.650000000000006px;">
            <li style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;font-size:9.0pt;color:#002060;'>Actividades necesarias&nbsp;</span></li>
        </ol>
        </div>
        <table style="width:100%!important;border-collapse:collapse;border: none;">
        <tbody>
            <tr>
                <td style="width: 467.8pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 17.7pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.actividades_necesarias !== null) ? data.experiencia.actividades_necesarias : '' }</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>f)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Datos de personas de contacto</span></p>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <table style="width:100%!important;border-collapse:collapse;border: none;">
        <tbody>
            <tr>
                <td style="width: 205.6pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><strong><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Nombre</span></strong></p>
                </td>
                <td style="width: 134.65pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><strong><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Tel&eacute;fono</span></strong></p>
                </td>
                <td style="width: 127.55pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Correo electr&oacute;nico</span></strong></p>
                </td>
            </tr>
            <tr>
                <td style="width: 205.6pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><strong><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.contacto_nombre1 !== null) ? data.experiencia.contacto_nombre1 : '' }</span></strong></p>
                </td>
                <td style="width: 134.65pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><strong><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.contacto_telefono1 !== null) ? data.experiencia.contacto_telefono1 : '' }</span></strong></p>
                </td>
                <td style="width: 127.55pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><strong><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.contacto_correo1 !== null) ? data.experiencia.contacto_correo1 : '' }</span></strong></p>
                </td>
            </tr>
            <tr>
                <td style="width: 205.6pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><strong><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.contacto_nombre2 !== null) ? data.experiencia.contacto_nombre2 : '' }</span></strong></p>
                </td>
                <td style="width: 134.65pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><strong><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.contacto_telefono2 !== null) ? data.experiencia.contacto_telefono2 : '' }</span></strong></p>
                </td>
                <td style="width: 127.55pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><strong><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.contacto_correo2 !== null) ? data.experiencia.contacto_correo2 : '' }</span></strong></p>
                </td>
            </tr>
            <tr>
                <td style="width: 205.6pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 11.6pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><strong><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.contacto_nombre3 !== null) ? data.experiencia.contacto_nombre3 : '' }</span></strong></p>
                </td>
                <td style="width: 134.65pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 11.6pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><strong><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.contacto_telefono3 !== null) ? data.experiencia.contacto_telefono3 : '' }</span></strong></p>
                </td>
                <td style="width: 127.55pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 11.6pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><strong><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.contacto_correo3 !== null) ? data.experiencia.contacto_correo3 : '' }</span></strong></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <div style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
        <ol style="margin-bottom:0cm;list-style-type: null;">
            <li style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;font-size:9.0pt;color:#002060;'>Enfoques transversales de g&eacute;nero e interculturalidad</span></li>
        </ol>
        </div>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <div style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
        <ol start="1" style="margin-bottom:0cm;list-style-type: lower-alpha;margin-left:60.650000000000006px;">
            <li style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;font-size:9.0pt;color:#002060;'>Sobre sensibilidad al g&eacute;nero</li>
        </ol>
        </div>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:70.65pt;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <table style="${ (data.experiencia.seccion4_cuenta1 != 'SI') ? 'display: none!important;' : '' }width:100%!important;border-collapse:collapse;border: none;">
        <tbody>
            <tr>
                <td style="width: 353.35pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Identificaci&oacute;n de diferentes roles, necesidades y brechas concernientes a hombres y mujeres.</span></p>
                </td>
                <td style="width: 54.75pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.seccion4_cuenta1 == 'SI') ? data.experiencia.seccion4_cuenta1 : '' }</span></p>
                </td>
                <td style="width: 59.7pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.seccion4_cuenta1 == 'NO') ? data.experiencia.seccion4_cuenta1 : '' }</span></p>
                </td>
            </tr>
            <tr>
                <td colspan="3" style="width: 467.8pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.seccion4_detalle1 !== null) ? data.experiencia.seccion4_detalle1 : '' }</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <table style="${ (data.experiencia.seccion4_cuenta2 != 'SI') ? 'display: none!important;' : '' }width:100%!important;border-collapse:collapse;border: none;">
        <tbody>
            <tr>
                <td style="width: 353.35pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Acciones espec&iacute;ficas desarrolladas para favorecer la participaci&oacute;n de la mujer</span></p>
                </td>
                <td style="width: 54.75pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.seccion4_cuenta2 == 'SI') ? data.experiencia.seccion4_cuenta2 : '' }</span></p>
                </td>
                <td style="width: 59.7pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.seccion4_cuenta2 == 'NO') ? data.experiencia.seccion4_cuenta2 : '' }</span></p>
                </td>
            </tr>
            <tr>
                <td colspan="3" style="width: 467.8pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.seccion4_detalle2 !== null) ? data.experiencia.seccion4_detalle2 : '' }</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <table style="${ (data.experiencia.seccion4_cuenta3 != 'SI') ? 'display: none!important;' : '' }width:100%!important;border-collapse:collapse;border: none;">
        <tbody>
            <tr>
                <td style="width: 353.35pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Consideraci&oacute;n de los diferentes niveles de informaci&oacute;n o conocimiento que tienen los hombres y las mujeres sobre el problema ambiental.&nbsp;</span></p>
                </td>
                <td style="width: 54.75pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.seccion4_cuenta3 == 'SI') ? data.experiencia.seccion4_cuenta3 : '' }</span></p>
                </td>
                <td style="width: 59.7pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.seccion4_cuenta3 == 'NO') ? data.experiencia.seccion4_cuenta3 : '' }</span></p>
                </td>
            </tr>
            <tr>
                <td colspan="3" style="width: 467.8pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><strong><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></strong></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><strong><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.seccion4_detalle3 !== null) ? data.experiencia.seccion4_detalle3 : '' }</span></strong></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><strong><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></strong></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <div style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
        <ol start="2" style="margin-bottom:0cm;list-style-type: lower-alpha;margin-left:60.650000000000006px;">
            <li style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;font-size:9.0pt;color:#002060;'>Reconocimiento de la diversidad cultural</li>
        </ol>
        </div>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <table style="${ (data.experiencia.seccion4_cuenta4 != 'SI') ? 'display: none!important;' : '' }width:100%!important;border-collapse:collapse;border: none;">
        <tbody>
            <tr>
                <td style="width: 353.35pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Acciones diferenciadas seg&uacute;n grupos &eacute;tnicos para atender necesidades espec&iacute;ficas y acortar brechas con referencia al problema ambiental</span></p>
                </td>
                <td style="width: 54.75pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.seccion4_cuenta4 == 'SI') ? data.experiencia.seccion4_cuenta4 : '' }</span></p>
                </td>
                <td style="width: 59.7pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.seccion4_cuenta4 == 'NO') ? data.experiencia.seccion4_cuenta4 : '' }</span></p>
                </td>
            </tr>
            <tr>
                <td colspan="3" style="width: 467.8pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.seccion4_detalle4 !== null) ? data.experiencia.seccion4_detalle4 : '' }</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <table style="${ (data.experiencia.seccion4_cuenta5 != 'SI') ? 'display: none!important;' : '' }width:100%!important;border-collapse:collapse;border: none;">
        <tbody>
            <tr>
                <td style="width: 353.35pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Participaci&oacute;n de representantes de organizaciones de los grupos &eacute;tnicos concernidos en la definici&oacute;n del problema ambiental o en el dise&ntilde;o de las soluciones</span></p>
                </td>
                <td style="width: 54.75pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.seccion4_cuenta5 == 'SI') ? data.experiencia.seccion4_cuenta5 : '' }</span></p>
                </td>
                <td style="width: 59.7pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.seccion4_cuenta5 == 'NO') ? data.experiencia.seccion4_cuenta5 : '' }</span></p>
                </td>
            </tr>
            <tr>
                <td colspan="3" style="width: 467.8pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.seccion4_detalle5 !== null) ? data.experiencia.seccion4_detalle5 : '' }</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <table style="${ (data.experiencia.seccion4_cuenta6 != 'SI') ? 'display: none!important;' : '' }width:100%!important;border-collapse:collapse;border: none;">
        <tbody>
            <tr>
                <td style="width: 353.35pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Recursos educativos y/o comunicacionales usados tomando en cuenta la diversidad ling&uuml;&iacute;stica y cultural, as&iacute; como caracter&iacute;sticas f&iacute;sicas y vestimenta de las poblaciones</span></p>
                </td>
                <td style="width: 54.75pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.seccion4_cuenta6 == 'SI') ? data.experiencia.seccion4_cuenta6 : '' }</span></p>
                </td>
                <td style="width: 59.7pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.seccion4_cuenta6 == 'NO') ? data.experiencia.seccion4_cuenta6 : '' }</span></p>
                </td>
            </tr>
            <tr>
                <td colspan="3" style="width: 467.8pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 12.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.experiencia.seccion4_detalle6 !== null) ? data.experiencia.seccion4_detalle6 : '' }</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
        </table>
        

        <!--MENCIONES-->
        ${_menciones}
        <!--FINALIZA MENCIONES-->

        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-indent:35.4pt;'><strong><span style='font-family:"Arial",sans-serif;'>&nbsp;</span></strong></p>
        <div style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
        <ol style="margin-bottom:0cm;list-style-type: null;">
            <li style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;font-size:9.0pt;color:#002060;'>ANEXOS DE SUSTENTO</span></li>
        </ol>
        </div>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <table style="width:100%!important;border-collapse:collapse;border:none;">
        <tbody>
            <tr>
                <td colspan="2" style="width: 467.35pt;border: 1pt solid black;padding: 0cm 5.4pt;height: 13.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Evidencias que den cuenta de los resultados obtenidos con la experiencia</span></p>
                </td>
            </tr>
            <tr>
                <td style="width: 72pt;border-right: 1pt solid black;border-bottom: 1pt solid black;border-left: 1pt solid black;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Anexo 1</span></p>
                </td>
                <td style="width: 395.35pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm 5.4pt;height: 13.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.anexos[0] !== undefined) ? data.anexos[0] : '' }</span></p>
                </td>
            </tr>
            <tr>
                <td style="width: 72pt;border-right: 1pt solid black;border-bottom: 1pt solid black;border-left: 1pt solid black;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Anexo 2</span></p>
                </td>
                <td style="width: 395.35pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm 5.4pt;height: 13.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.anexos[1] !== undefined) ? data.anexos[1] : '' }</span></p>
                </td>
            </tr>
            <tr>
                <td style="width: 72pt;border-right: 1pt solid black;border-bottom: 1pt solid black;border-left: 1pt solid black;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Anexo 3</span></p>
                </td>
                <td style="width: 395.35pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm 5.4pt;height: 13.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.anexos[2] !== undefined) ? data.anexos[2] : '' }</span></p>
                </td>
            </tr>
            <tr>
                <td style="width: 72pt;border-right: 1pt solid black;border-bottom: 1pt solid black;border-left: 1pt solid black;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Anexo 4</span></p>
                </td>
                <td style="width: 395.35pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm 5.4pt;height: 13.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.anexos[3] !== undefined) ? data.anexos[3] : '' }</span></p>
                </td>
            </tr>
            <tr>
                <td style="width: 72pt;border-right: 1pt solid black;border-bottom: 1pt solid black;border-left: 1pt solid black;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Anexo 5</span></p>
                </td>
                <td style="width: 395.35pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm 5.4pt;height: 13.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.anexos[4] !== undefined) ? data.anexos[4] : '' }</span></p>
                </td>
            </tr>
            <tr>
                <td colspan="2" style="width: 467.35pt;border-right: 1pt solid black;border-bottom: 1pt solid black;border-left: 1pt solid black;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Enlaces a p&aacute;ginas web o redes sociales: (SI)</span></p>
                </td>
            </tr>
            <tr>
                <td colspan="2" style="width: 467.35pt;border-right: 1pt solid black;border-bottom: 1pt solid black;border-left: 1pt solid black;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${( data.postulacion.link_video !== null ) ? data.postulacion.link_video : ''}</span></p>
                </td>
            </tr>
            <tr>
                <td colspan="2" style="width: 467.35pt;border-right: 1pt solid black;border-bottom: 1pt solid black;border-left: 1pt solid black;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${( data.postulacion.link_video1 !== null ) ? data.postulacion.link_video1 : ''}</span></p>
                </td>
            </tr>
            <tr>
                <td colspan="2" style="width: 467.35pt;border-right: 1pt solid black;border-bottom: 1pt solid black;border-left: 1pt solid black;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${( data.postulacion.link_video2 !== null ) ? data.postulacion.link_video2 : ''}</span></p>
                </td>
            </tr>
            <tr>
                <td colspan="2" style="width: 467.35pt;border-right: 1pt solid black;border-bottom: 1pt solid black;border-left: 1pt solid black;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${( data.postulacion.link_video3 !== null ) ? data.postulacion.link_video3 : ''}</span></p>
                </td>
            </tr>
            <tr>
                <td colspan="2" style="width: 467.35pt;border-right: 1pt solid black;border-bottom: 1pt solid black;border-left: 1pt solid black;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 13.65pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${( data.postulacion.link_video4 !== null ) ? data.postulacion.link_video4 : ''}</span></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <div style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
        <ol style="margin-bottom:0cm;list-style-type: undefined;">
            <li style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;font-size:9.0pt;color:#002060;'>&nbsp;DECLARACI&Oacute;N JURADA</span></li>
        </ol>
        </div>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <table style="width:100%!important;border-collapse:collapse;border: none;">
        <tbody>
            <tr>
                <td style="width: 467.8pt;border: 1pt solid black;padding: 0cm 5.4pt;height: 25.45pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Yo, (Nombre de la persona que efect&uacute;a la postulaci&oacute;n) &shy;&shy;&shy;&shy;&shy;${( data.postulacion.nombre_postulante_declara !== null ) ? data.postulacion.nombre_postulante_declara : ''}</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Identificado/a con (Tipo y n&uacute;mero de documento de identidad) ${( data.postulacion.tipo_number_doc_declara !== null ) ? data.postulacion.tipo_number_doc_declara : ''}</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Y con domicilio en (Indicar direcci&oacute;n exacta) ${( data.postulacion.direccion_postulante_declara !== null ) ? data.postulacion.direccion_postulante_declara : ''}</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;margin-left:35.4pt;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'><span style="border: solid 1px; padding: 2px 4px; margin: 5px;">X</span> Declaro bajo juramento que la informaci&oacute;n consignada en la presente Ficha de Postulaci&oacute;n es veraz. Cualquier inexactitud no compromete la responsabilidad de Sector Ambiental, del equipo t&eacute;cnico evaluador, del jurado, o de los organizadores, patrocinadores y auspiciadores del Premio</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
        </table>
        <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <div style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'>
        <ol style="margin-bottom:0cm;list-style-type: undefined;">
            <li style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;font-size:9.0pt;color:#002060;'>IMAGEN REPRESENTATIVA</span></li>
        </ol>
        </div>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>Fotograf&iacute;a m&aacute;s representativa de la experiencia:</span></p>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
        <table style="width:100%!important;border-collapse:collapse;border: none;">
        <tbody>
            <tr>
                <td style="width: 467.8pt;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 17.7pt;vertical-align: top;">
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>${ (data.imagenes).join(',') }</span></p>
                    <p style='margin:0cm;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#002060;'>&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
        </table>
    `;

    return _html;
  }

}
