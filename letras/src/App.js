import React, { Fragment, useState, useEffect } from 'react';

import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
//import Info from './components/Info';

import axios from 'axios';

function App() {

  // Definir el state
  const [busquedaletra, guardarBusquedaLetra ] = useState({});
  const [ letra, guardarLetra ] = useState('');
  //const [ info, guardarInfo ] = useState({});

  useEffect(() => {
    if(Object.keys(busquedaletra).length === 0) return;

    const consultarApiLetra = async () => {

      const { artista, cancion } = busquedaletra;

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      //const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      /*const [ letra, informacion ] = await Promise.all([
        axios(url),
        axios(url2)
      ]);*/

      const letra = await axios(url);
      //const informacion = await axios(url2);

      guardarLetra(letra.data.lyrics);
      //guardarInfo(informacion.data.artists[0]);
    }

    consultarApiLetra();
  }, [busquedaletra]);

  return (
    <Fragment>
      <Formulario
        guardarBusquedaLetra={guardarBusquedaLetra}
      />

      <div className="cantainer mt-5">
        <div className="row">
          <div className="col-md-4">
          </div>
          <div className="col-md-4">
            <Cancion
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
