/* ----- Con componentes de Clase */
import React from 'react';
import '../stylesheets/Contador.css';

class Contador extends React.Component {
  render() {
    return (
      <div className='contador'>
        {this.props.numClics}
      </div>
    );
  }
}

export default Contador;


/* ----- Con componentes Funcionales ----- */
/* import React from 'react';
import '../stylesheets/Contador.css';

function Contador({ numClics }) {
  return (
    <div className='contador'>
      {numClics}
    </div>
  );
}

export default Contador; */