import React, { Fragment } from 'react'

const Cancion = ({letra}) => {

    if(letra.length === 0) return (
        <Fragment>
            <p className="alert alert-danger text-center p-2">
                    No hemos encontrado resultados, revisa que tus entradas sean correctas
            </p>
        </Fragment>
    );
    //if(Object.keys(letra).length === 0) return null;
    
    
    return (
        <Fragment>
            <h2>Letra Canción</h2>
            <p className="letra">{letra}</p>
        </Fragment>
    );
}
 
export default Cancion;