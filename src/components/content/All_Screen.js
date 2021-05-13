import React from 'react'
import { ProductoList } from './Cards/ProductoList'

export default function All_Screen() {


    return (
        <div>
            <h1>TODOS LOS ARTICULOS</h1>
            <hr></hr>
            <ProductoList tipo="sofa"/>
            <ProductoList tipo="silla"/>
            <ProductoList tipo="guardado"/>
            <ProductoList tipo="mesa"/>
            
         
            
        </div>
    )
}
