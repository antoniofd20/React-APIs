import React from 'react';
import PropTypes from 'prop-types';

import Noticia from './Noticia';

const Noticias = ({noticias}) => {
    return (
        <div className="row">
            {noticias.map(noticia => (
                <Noticia
                    key = {noticia.url}
                    noticia = {noticia}
                />
            ))}
        </div>
    );
}

Noticias.propTypes = {
    noticias: PropTypes.array.isRequired
}
 
export default Noticias;