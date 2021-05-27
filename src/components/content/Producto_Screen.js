import React from 'react'
import { Redirect, useParams } from 'react-router'
import { getProductoById } from '../../selectors/getProductoById';
import {productos} from '../../data/productos'
import FadeIn from 'react-fade-in';





export const Producto_Screen = () => {

    const {id} = useParams();//hook extrae los parametros que llegan por elurl

    console.log(id);
    const producto = getProductoById(id)
    console.log(producto)
   
    if(!producto){
        return <Redirect to="/"/>
    }

    const{
        tipo,
        nombre,
        descripcion,
        material,
        acabado,
    } = producto;

    return (
        <React.Fragment>
        <FadeIn>
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/productos/${producto.id}.jpg`} className="img-fluid" ></img>               

            </div>
            <div className="col-8">
                <h3></h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-tiem"><b>{nombre}</b></li>
                    <li className="list-group-tiem"><b>{descripcion}</b></li>
                    <li className="list-group-tiem"><b>{material}</b></li>
                    <li className="list-group-tiem"><b>{acabado}</b></li>

                </ul>

            </div>

        </div>
        </FadeIn>
        </React.Fragment>
    )
}
