import React,{useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Componentes
import NavsBS from '../components/NavsBS'
import All_Screen from '../components/content/All_Screen'
import Sofas_Screen from '../components/content/Sofas_Screen'
//import NavsBS2 from '../components/NavsBS2'
import Guardado_Screen from '../components/content/Guardado_Screen';
import Mesas_Screen from '../components/content/Mesas_Screen';
import Sillas_Screen from '../components/content/Sillas_Screen';
import {Producto_Screen} from '../components/content/Producto_Screen';
import InteriorForma_Screen from '../components/content/InteriorForma_Screen';

import JumbotronBS from '../components/JumbotronBS';
import NavbarBS from '../components/NavbarBS';
import CarouselBS from '../components/CarrouselBS';
import Info from '../components/Info';
import Ubicacion from '../components/ubicacion';




export default function AppRouter() {
    const [categoria, guardarCategoria] = useState('');
    console.log(categoria);

    return (
       <Router>
            <NavbarBS className ="container-sm"/>
            <CarouselBS/>
           <div className="container">


                <JumbotronBS
                    categoria = {categoria}
                />
           

               <NavsBS
                    guardarCategoria = {guardarCategoria}
               />

                

                <Switch>
                    <Route exact path="/interior-forma" component={All_Screen}/>
                    <Route exact path="/sofas" component={Sofas_Screen}/>
                    <Route exact path="/guardado" component={Guardado_Screen}/>
                    <Route exact path="/mesas" component={Mesas_Screen}/>
                    <Route exact path="/sillas" component={Sillas_Screen}/>
                    <Route exact path="/producto/:id" component={Producto_Screen}/>
                    <Route exact path="/informacion" component={Info}/>
                    <Route exact path="/ubicacion" component={Ubicacion}/>
                    <Route exact path="/" component={InteriorForma_Screen}/>
                </Switch>

           </div>

       </Router>
    )
}
