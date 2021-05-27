import React from 'react'
import FadeIn from 'react-fade-in'
import { Link } from 'react-router-dom'


import CardStyle from "./CardStyle.css"




export const ProductoCard = ({
    id, nombre, tipo,
}) => {
    return (
        <React.Fragment>

            <div className="col my-card ">
                <FadeIn>
                    <Link to={`./producto/${id}`}>
                        <img src={`./assets/productos/${id}.jpg`} className="img img-responsive" alt={nombre} />
                    </Link>
                    <div className="profile-name">{nombre}</div>
                </FadeIn>



            </div>
        </React.Fragment>
    )
}
