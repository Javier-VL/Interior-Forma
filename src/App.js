import React from 'react';
import './index.css';

import "bootstrap/dist/css/bootstrap.min.css";

//Componentes

import FooterBS from './components/FooterBS'
import AppRouter from './routers/AppRouter';


function App() {
  return (
    <div className="">
      



      <AppRouter/>

      <FooterBS/>

    </div>
  );
}

export default App;
