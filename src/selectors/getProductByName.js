import { Producto_Screen } from "../components/content/Producto_Screen";
import {productos} from "../data/productos";

export const getProductByName = (nombre) =>{

    const producto = productos.find( productos => productos.nombre === nombre  )

    if (producto == null){
        return
    }
    console.log(producto.nombre)

    return producto.id

}