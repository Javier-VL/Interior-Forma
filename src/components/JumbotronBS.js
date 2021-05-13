import { useState, useEffect } from "react"
import React from 'react'

export default function JumbotronBS({categoria}) {

    const [descripcion, guardarDescripcion] = useState('')

    useEffect(() => {
        if(categoria === "Sofas"){
            guardarDescripcion("Descubre nuestra nueva collección de sillones, con tendencias contemporáneas");
        }else if(categoria === "Sillas"){
            guardarDescripcion("Descubre nuestra nueva collección de sillas, con tendencias mordernas");
        }else if(categoria ==="Guardado"){
            guardarDescripcion("Diseños atevidos, divertidos, originales e inspiradores. Decora, acomoda, guarda e imagina nuestra línea de muebles");
        }else if(categoria === "Mesas"){
            guardarDescripcion("Nuevos modelos de mesas con cubiertas de mármol, vidrio y madera de nogal");
        }else if(categoria === "Todo"){
            guardarDescripcion("Todos nuestros productos");
        }
    },[categoria])

    return (
        <React.Fragment>
            <div className="jumbotron jumbotron-fluid ">
                <div className="container-sm">
                    <h1 className="categoria">{categoria}</h1>
                    <p className="lead">{descripcion}</p>
                </div>
            </div>
        </React.Fragment>
    )
}