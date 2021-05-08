import { useState } from "react"
import React from 'react'

export default function JumbotronBS() {

    const [producto, setProducto] =useState("Nombre de la categoria");//retorna un arreglo de 2 valores



    return (
        <React.Fragment>
            <div className="jumbotron jumbotron-fluid ">
                <div className="container-sm">
                    <h1 className="display-4">{producto}</h1>
                    <p className="lead">Descubre nuestra nueva colección de  sillones,	con	tendencias  contemporáneas</p>
                </div>
            </div>
        </React.Fragment>
    )
}