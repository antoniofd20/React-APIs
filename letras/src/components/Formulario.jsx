import React, { useState } from 'react'

const Formulario = ({guardarBusquedaLetra}) => {

    // State
    const [ busqueda, guardarBusqueda ] = useState({
        artista: '',
        cancion: ''
    });

    const [ error, guardarError ] = useState(false);

    const { artista, cancion } = busqueda;

    // Funcion a cada input para leer su contenido
    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : [e.target.value]
        })
    }

    // Consultar las APIS
    const buscarInformacion = e => {
        e.preventDefault();

        if(artista === '' || cancion === ''){
            guardarError(true);
            return;
        }
        guardarError(false);

        // Todo bien, pasar al componente principal
        guardarBusquedaLetra(busqueda);
    }

    return (
        <div className="bg-info">
            { error ? 
                <p className="alert alert-danger text-center p-2">
                    Todos los campos son obligatorios
                </p> : null}
            <div className="container">
                <div className="row ml-5">
                    <form 
                        onSubmit={buscarInformacion}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2 "
                    >
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Artista</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="artista"
                                        placeholder="Nombre artista"
                                        onChange={actualizarState}
                                        value={artista}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label>Canción</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="cancion"
                                        placeholder="Nombre de la canción"
                                        onChange={actualizarState}
                                        value={cancion}
                                    />
                                </div>
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary float-right mt-4"
                            >Buscar Letra</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Formulario;