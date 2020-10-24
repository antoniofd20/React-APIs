import React, { useState, useEffect } from 'react';

import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spiner from './components/Spiner';

import axios from 'axios';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 922px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const MiNombre = styled.p`
  font-family: 'Bebas neue', cursive;
  color: #FFF;
  font-size: 15px;
  text-align: right;
`;

function App() {

  const [ moneda, guardarMoneda ] = useState('');
  const [ cryptomoneda, guardarCryptomoneda ] = useState('');
  const [ resultado, guardarResultado ] = useState({});
  const [ cargando, guardarCargando ] = useState(false);

  useEffect(() => {

    const cotizarCryptomoneda = async () => {
      // Evitamos la ejecucion la primera vez
      if(moneda === '') return;

      // Consultar la api para obtener la cotización
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${moneda}`;

      const resultado = await axios.get(url);

      // Animacion del spiner
      guardarCargando(true);
      // Ocultar el spiner 
      setTimeout(() => {

        //Cambiar el estado de cargando
        guardarCargando(false);
        // Guardar resultados
        guardarResultado(resultado.data.DISPLAY[cryptomoneda][moneda]);
      }, 2000);
    }
    cotizarCryptomoneda();

  }, [moneda, cryptomoneda]);

  // Mostrar spiner o resultado
  const componente = (cargando) ? <Spiner /> :         <Cotizacion resultado = {resultado} />
  return (
    <Contenedor>
      <div>
        <Imagen
          src = {imagen}
          alt = "imagen cryptomonedas"
        />
      </div>
      <div>
        <Heading>Cotiza cryptomonedas al instante</Heading>
        <Formulario
          guardarMoneda = {guardarMoneda}
          guardarCryptomoneda = {guardarCryptomoneda}
        />

        {componente}

        <MiNombre>
          Raymundo Antonio Flores Díaz &#174;
        </MiNombre>
      </div>
    </Contenedor>
  );
}

export default App;

// Video 16 minuto 2:23
