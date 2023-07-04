/* ----- Con componentes de Clase, Metodos y Estados----- */
import React from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logo from './imagenes/logo.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClics: 0
    };
    /* Sin esto no existiria el this para trabajar */
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  /* Metodos */
  /* 1° Opcion */
  manejarClic() {
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
  }

  reiniciarContador() {
    this.setState({ numClics: 0 });
  }

  render () {
    return (
      <div className='App'>
        <div className='contenedor-logo'>
          <img 
            className='logo'
            src={logo} 
            alt='Logo'/>
        </div>
        <div className='contenedor-contador'>
          <Contador 
            numClics={this.state.numClics} /> 
          <Boton
            texto='Clic'
            esBotonDeClic={true}
            manejarClic={this.manejarClic} />
          <Boton 
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={this.reiniciarContador} />
        </div>
      </div>
    );
  }
}

export default App;


/* ----- Con componentes Funcionales ----- */
/* import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logo from './imagenes/logo.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='contenedor-logo'>
        <img 
          className='logo'
          src={logo} 
          alt='Logo'/>
      </div>
      <div className='contenedor-contador'>
        <Contador 
          numClics={numClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App; */