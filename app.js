import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';


// Componente de la página de inicio
const Home = () => (
  <div>
    <h2>Inicio</h2>
    <p>Bienvenido a Opalo Shoes</p>
  </div>
);

// Componente de la página "Acerca de"
const About = () => (
  <div>
    <h2>Sobre nosotros</h2>
    <p>Somos fabricantes de calzado de cuero, industria uruguaya.</p>
  </div>
);

// Componente de la página "Contacto"
const Contact = () => (
  <div>
    <h2>Contacto</h2>
    <p>Esta es la página de contacto.</p>
  </div>
);

// Componente principal que contiene la navegación y las rutas
const App = () => (
  <Router>
    <div>
    <Route exact path="/" component={ItemListContainer} />
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;
