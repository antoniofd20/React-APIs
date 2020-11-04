import React, { useContext, useState } from 'react'

import { ModalContext } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 0;
    const left = 0;
    const right =10;

    return {
        top: `${top}%`,
        left: `${left}%`,
        right: `${right}%`,
        tansform: `translate(-${top}%, -${left}%), -${right}%`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 350,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({receta}) => {

    // Configuracon del modal de material-ui
    const [ modalStyle ] = useState(getModalStyle);
    const [ open, setOpen ] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    // extraer los valores del context
    const { informacion, guardarIdReceta, guardarReceta } = useContext(ModalContext);

    //Muestra y formatea los ingredientes
    const mostrarIngredientes = informacion => {
        let ingredientes = [];
        for(let i = 1; i < 16; i++){
            if( informacion[`strIngredient${i}`]){
                ingredientes.push(
                    <li className="texto">
                        {informacion[`strIngredient${i}`] } {informacion[`strMeasure${i}`] }
                    </li>
                )
            }
        }
        console.log(ingredientes);
        return ingredientes;
    }

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>

                <img src={receta.strDrinkThumb} className="card-img-top" alt={`Imagen de ${receta.strDrink}`}/>

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            guardarIdReceta(receta.idDrink)
                            handleOpen();
                        }}
                    >Ver Receta</button>

                    <Modal
                        open={open}
                        onClose={() => {
                            guardarIdReceta(null);
                            guardarReceta({});
                            handleClose();
                        }}
                    >
                        <div
                            style={modalStyle}
                            className={classes.paper}
                        >
                            <h4>{informacion.strDrink}</h4>
                            <h5 className="text-primary">Instrucciones</h5>
                            <p className="text-justify texto">{informacion.strInstructions}</p>

                            <img src={informacion.strDrinkThumb} className="card-img-top" alt=""/>

                            <h5>Ingredientes y Cantidades</h5>
                            <ul>
                                {mostrarIngredientes(informacion)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}
 
export default Receta;