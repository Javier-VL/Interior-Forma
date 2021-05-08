import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Componentes
import NavsBS from '../components/NavsBS'
import All_Screen from '../components/content/All_Screen'
import Sofas_Screen from '../components/content/Sofas_Screen'
import NavsBS2 from '../components/NavsBS2'



export default function AppRouter() {
    return (
       <Router>
           <div>
               <NavsBS/>
               
                <Switch>
                    <Route exact path="/" component={All_Screen}/>
                    <Route exact path="/sofas" component={Sofas_Screen}/>
                </Switch>

           </div>

       </Router>
    )
}
