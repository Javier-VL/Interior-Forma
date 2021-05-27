import {productos} from "../data/productos";

export const getProductByName = (nombre) =>{

    const producto = productos.find( productos => productos.nombre === nombre  )

    if (producto == null){
        return
    }

    return producto.id

}