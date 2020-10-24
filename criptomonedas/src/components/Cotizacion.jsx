import React from 'react'

import styled from '@emotion/styled';

const ResutadoDiv = styled.div`
    font-family: 'Bebas neue', cursive;
    color: #FFF;
`;

const Info = styled.p`
    font-size: 18px;

    span {
        font-size: 20px;
        font-weight: bold;
        text-decoration: underline;
    }
`;

const Precio = styled.p`
    font-size: 30px;

    span {
        font-size: 32px;
        font-weight: bold;
        text-decoration: underline;
    }
`;

const Cotizacion = ({resultado}) => {

    // Si el objeto llega vacio no va a ajecutar nada.
    if(Object.keys(resultado).length === 0) return null;

    console.log(resultado);

    return (
        <ResutadoDiv>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <Info>El precio más bajo del día: <span>{resultado.LOWDAY}</span></Info>
            <Info>Variación las ultimas 24 hrs: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Ultima actialización: <span>{resultado.LASTUPDATE}</span></Info>
            <Info>El precio más alto del día: <span>{resultado.HIGHDAY}</span></Info>
        </ResutadoDiv>
    );
}
 
export default Cotizacion;