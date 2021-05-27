import {productos} from "../data/productos";

export const getProductoById = (id) =>{

    return productos.find( productos => productos.id ===id  )

}