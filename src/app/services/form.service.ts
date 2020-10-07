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
        tabLabel: 'V. Declaración jurada',
        isComplete: false,
        formType: 'static',
        tabName: 'dec_jur',
        form: []
      },
      {
        id: 6,
        tabLabel: 'VI. Imagen representativa',
        tabDescription: 'Suba la fotografía más representante de su experiencia. Se recomienda que el tamaño sea de 1024x768 pixeles, con un peso entre 300KB y 1MB (como máximo)',
        isComplete: false,
        formType: 'static',
        tabName: 'img_repre',
        form: []
      },
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

}
