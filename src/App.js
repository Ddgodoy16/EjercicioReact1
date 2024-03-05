import './App.css';
import {Testimonio1, Testimonio2, Testimonio3, Testimonio4, Testimonio5} from './componentes/Testimonio'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen los estudiantes de CEUTEC:</h1>
        <Testimonio1
          imagen='testimonio-emma.png'
          nombre='Emma Bostian'
          pais='Suecia'
          cargo='Ingeniera de software'
          empresa='Spotify'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero la clase de programación web I fue donde aprendí. Estudiar JavaScript, así como estructuras de datos y algoritmos en la clase me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />
      
      <Testimonio2
          imagen='testimonio-sarah.png'
          nombre='Sarah'
          pais='Francia'
          cargo='Diseñadora gráfica'
          empresa='Ubisoft'
          testimonio='Siempre me enfrenté a desafíos al aprender diseño gráfico. A pesar de haber tomado numerosos cursos, fue durante mi pasantía en una agencia de diseño donde realmente comencé a desarrollar mis habilidades. Sumergirme en proyectos reales, aprender sobre teoría del color, tipografía y diseño de interfaces me brindó las habilidades y la confianza necesarias para asegurar mi posición como diseñadora gráfica en Ubisoft, donde ahora tengo la oportunidad de trabajar en proyectos emocionantes y creativos.' />
     
     <Testimonio3
          imagen='testimonio-shawn.png'
          nombre='Shawn'
          pais='Estados Unidos'
          cargo='Analista de datos'
          empresa='Google'
          testimonio='A lo largo de mi carrera, enfrenté dificultades al tratar de aprender análisis de datos. A pesar de haber completado múltiples cursos, fue durante mi participación en un proyecto de investigación en la universidad donde realmente comencé a dominar mis habilidades. Sumergirme en la recopilación y análisis de datos reales, así como aprender sobre estadísticas y herramientas de visualización, me brindó las habilidades y la confianza necesarias para asegurar mi posición como analista de datos en Google, donde ahora tengo la oportunidad de trabajar en proyectos innovadores y desafiantes.' />
     
     <Testimonio4
          imagen='Carlos-Ramírez.jpeg'
          nombre='Carlos Ramírez'
          pais='Colombia'
          cargo='Ingeniero de software'
          empresa='Amazon'
          testimonio='Durante mi formación, enfrenté desafíos al aprender desarrollo de software. En un proyecto de investigación en inteligencia artificial, perfeccioné habilidades clave como la programación de algoritmos de aprendizaje automático y el desarrollo de aplicaciones web escalables. Esto me llevó a mi posición actual como ingeniero de software en Amazon, donde contribuyo a proyectos innovadores con impacto global.' />

<Testimonio5
          imagen='Luis-Hernández.jpeg'
          nombre='Luis Hernández'
          pais='México'
          cargo='Científico de datos'
          empresa='Microsoft'
          testimonio='Mi trayectoria ha estado marcada por desafíos en análisis de datos y machine learning. Durante un hackathon de ciencia de datos, consolidé mis habilidades en exploración de conjuntos de datos y modelos de predicción. En Microsoft, trabajo en equipos interdisciplinarios, contribuyendo al desarrollo de productos y servicios inteligentes que transforman industrias enteras. Esta oportunidad me permite aplicar mi experiencia y conocimientos para impactar positivamente en el mundo tecnológico y empresarial.' />
      </div>
    </div>
  );
}

export default App;

