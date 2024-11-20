import React from 'react'; // React construye los componentes de una página web para luego ser reutilizados
import ReactDOM from 'react-dom/client';  // ReactDom pone los componentes que React creó en el sitio correcto para poder verlos
import { BrowserRouter as Router } from 'react-router-dom'; // Asegúrate de envolver la app en Router
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // ReactDOM.createRoot define la raiz dónde todo el contenido de la aplicación será renderizado o mostrado y document.getElementById('root) selecciona el elemento del HTML en este caso el elemento con el id 'root' que generalmente está ubicado en el index.html

root.render( 
   
  <Router> 

    <App />

  </Router>
);
