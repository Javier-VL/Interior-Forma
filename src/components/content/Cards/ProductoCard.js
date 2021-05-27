import React from 'react'
import { Link } from 'react-router-dom'

import image from "../../../img/SOFAS/sofa-shell.png" 
import CardStyle from "./CardStyle.css"




export const ProductoCard = ({
    id,nombre,tipo, 
}) => {
    return (
        <React.Fragment>
        <div className="col my-card ">
        <Link to={`./producto/${id}`}>
            <img src={`./assets/productos/${id}.png`} className="img img-responsive" alt={nombre}/>
        </Link>
        <div className="profile-name">{nombre}</div>
    
        

        </div>
        </React.Fragment>
    )
}
