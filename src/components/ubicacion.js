import React from 'react';

import {Image} from 'react-bootstrap';
import Ubicacion from '../img/ubicacion.png';



const ubicacion = () => {
    return ( 
        <div>
            <h1>Ubicación</h1>
            <p>Nos puede encontrar en: </p>
            <p>Ingnacio Ramirez #264 Colonia Villa Señor</p>
            <Image src={Ubicacion}/>;

        </div>
    );
}
 

export default ubicacion;