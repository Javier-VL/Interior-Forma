import React from 'react'
import { Redirect, useParams } from 'react-router'
import { getProductoById } from '../../selectors/getProductoById';
import {productos} from '../../data/productos'





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
    } = producto;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/productos/${producto.id}.png`} ></img>
                
                

            </div>
        </div>
    )
}
