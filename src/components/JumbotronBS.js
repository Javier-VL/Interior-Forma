import { useState, useEffect } from "react"
import React from 'react'
import { motion} from "framer-motion"
import FadeIn from "react-fade-in"


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
        }else if(categoria === "Menu"){
            guardarDescripcion("Apartados");
        }else if(categoria === "Interior Forma"){
            guardarDescripcion("Muebles de nuestro catalogo");
        }else{
            guardarDescripcion("Muebles de nuestro catalogo");
        }

    },[categoria])

    return (
        <React.Fragment>
            <div className="jumbotron jumbotron-fluid ">
                <FadeIn transitionDuration>
                <div className="container-sm">
                    <motion.h1 animate={{fontSize: '50px',x:100}} className="categoria">{categoria}</motion.h1>
                    <h4 className="lead">{descripcion}</h4>
                    
                </div>
                </FadeIn>
            </div>
        </React.Fragment>
    )
}