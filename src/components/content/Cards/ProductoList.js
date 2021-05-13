import React from 'react'
import { getProductoByType } from '../../../selectors/getProductoByType'
import { ProductoCard } from './ProductoCard';

export const ProductoList = ({tipo}) => {
    
    const productos = getProductoByType(tipo);

    return (
        <div>
            <div  className="row row-cols-1 row-cols-md-3 g-1">
                {
                    productos.map( producto => (
                        <ProductoCard key = {producto.id}{...producto} />

                        /*
                        <li key={ producto.id }>
                            {producto.nombre}
                        </li>*/
                    ))
                }
            </div>
            
        </div>
    )
}
