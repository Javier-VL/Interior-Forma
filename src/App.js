import React from 'react';
import './index.css';

import "bootstrap/dist/css/bootstrap.min.css";

//Componentes
import NavbarBS from './components/NavbarBS'
import CarouselBS from './components/CarrouselBS'

import FooterBS from './components/FooterBS'
import AppRouter from './routers/AppRouter';


function App() {
  return (
    <div className="">
      <NavbarBS className ="container-sm"/>
      <CarouselBS/>


      <AppRouter/>

      <FooterBS/>

    </div>
  );
}

export default App;
