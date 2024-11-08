import React from 'react'; // React construye los componentes de una página web para luego ser reutilizados
import ReactDOM from 'react-dom/client';  // ReactDom pone los componentes que React creó en el sitio correcto para poder verlos
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // ReactDOM.createRoot define la raiz dónde todo el contenido de la aplicación será renderizado o mostrado y document.getElementById('root) selecciona el elemento del HTML en este caso el elemento con el id 'root' que generalmente está ubicado en el index.html

root.render( // root es el objeto que se creó previamente y render le está indicando que queremos que dibuje ahí 
   
  //React.StrictMode realiza comprobaciones adicionales en el código para identificar posibles problemas o advierte si se están utilizando practicas inseguras
  <React.StrictMode> 

    <App />

  </React.StrictMode>
);
