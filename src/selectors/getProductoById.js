import {productos} from "../data/productos";

export const getProductoById = (id) =>{

    return productos.find( producto => productos.id ===id  )

}