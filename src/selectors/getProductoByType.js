import {productos} from "../data/productos";

export const getProductoByType = (tipo) =>{

    const validTypes = ["silla","sofa","mesa","guardado"];

    if(!validTypes.includes(tipo)){
        throw new Error(`Tipo: "${tipo}" no es correcto`)
    }

    return productos.filter( producto => producto.tipo ===tipo  )

}

