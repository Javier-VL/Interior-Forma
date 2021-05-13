import React from 'react'

import image from "../../../img/SOFAS/sofa-shell.png" 
import CardStyle from "./CardStyle.css"


export const ProductoCard = ({
    id,nombre,tipo, 
}) => {
    return (
        <React.Fragment>
        <div className="col my-card">
        <img src={`./assets/productos/${id}.png`} className="img img-responsive" alt={nombre}/>
        <div className="profile-name">{nombre}</div>
        

        </div>
        </React.Fragment>
    )
}