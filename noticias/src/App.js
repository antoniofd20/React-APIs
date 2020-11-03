import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Formulario from './components/Formulario';
import Noticias from './components/ListadoNoticias';

function App() {

  //Definir la categoria
  const [ categoria, guardarCategoria ] = useState('');
  const [ noticias, guardarNoticias ] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=5fd97d20cec2473c996a3228773b9cf5`;

      //const respuesta = await fetch(url);
      //const noticias = await respuesta.json();
      const noticias = await axios.get(url);

      //console.log(noticias.data.articles);
      guardarNoticias(noticias.data.articles);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header
        titulo = 'Noticias'
      />
      <p>
      Flores Díaz Rymundo Antonio &#174;
      </p>

      <div className = "container white">
        <Formulario
          guardarCategoria = {guardarCategoria}
        />
        <Noticias
          noticias = {noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
