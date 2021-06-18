import React,  { useState } from 'react'
import { Redirect, useParams } from 'react-router'
import { getProductoById } from '../../selectors/getProductoById';
import { productos } from '../../data/productos'
import FadeIn from 'react-fade-in';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'







export const Producto_Screen = ({ history }) => {

    let imageSwap = false;

    const { id } = useParams();//hook extrae los parametros que llegan por elurl

    console.log(id);
    const producto = getProductoById(id)
    console.log(producto)

    const [Cambio,GuardarCambio] = useState("")

    if (!producto) {
        return <Redirect to="/" />
    }

    const {
        tipo,
        nombre,
        descripcion,
        medidas,
        cod_inlab,
        material,
        acabado,
        sistema,
    } = producto;

    const handleReturn = () => {
        history.goBack();
    }

    function productoSistema(producto) {
        return <p className="fw-bold">sistema: <p className="fw-normal">{producto.sistema}</p> </p>
    }


    function switchCambio(){
        if (Cambio == ""){
            GuardarCambio("2")
            return
        }else{
            GuardarCambio("")
            return
        }
    }

    let imagesPath = {
        minus: `../assets/productos/${producto.id}.jpg`,
        plus: `../assets/productos/${producto.id}2.jpg`
    }
    

    const Shirts = () =>{
        const [selected, setSelected] = useState(imagesPath.minus)};

    function changeImage(e) {
        imageSwap = !imageSwap;
        if (producto.tipo === "interiorForma" && imageSwap == true) {

            e.target.setAttribute('src', `../assets/productos/${producto.id}2.jpg`);
        } else if (producto.tipo === "interiorForma" && imageSwap == false) {
            e.target.setAttribute('src', `../assets/productos/${producto.id}.jpg`);
        }

    }



    return (
        <React.Fragment>
            <FadeIn>
            
                <div className="row gx-4 gx-lg-5 align-items-center ">

                    <img  id="mueble" className="my-card-2" onClick={changeImage} src={`../assets/productos/${producto.id}${Cambio}.jpg`}  ></img>
                                        
                    <div className="col-md-6">

                        <BootstrapSwitchButton   
                            
                            checked={true}  
                            onstyle="dark" 
                            offstyle="secondary" 
                            onlabel=">" 
                            offlabel="<" 
                            onChange = {() => switchCambio()}
                        />

                        <h1 className="display-5 fw-bolder">{producto.nombre}</h1>
                        <div className="fs-5 mb-1">
                            <span>{producto.descripcion}</span>
                        </div>
                        <p className="fw-bold">{producto.medidas}</p>
                        <p className="fw-bold">{producto.material}</p>
                        <p className="fw-bold">{producto.acabado}</p>
                        <p className="fw-normal">{producto.sistema}</p>
                        <div className="d-flex">

                            <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={handleReturn}>
                                <i className="bi-cart-fill me-1"></i>
                                Volver
                            </button>
                        </div>
                        <div className="mt-4 col-md-12"></div>

                    </div>




                </div>
            </FadeIn>
        </React.Fragment>
    )
}
