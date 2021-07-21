import React from 'react';
import {Navbar} from './components/Navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import { AboutPage } from './components/pages/AboutPage';
import { TodoPage } from './components/pages/TodoPage';


const App:React.FC=()=> {

  return (
    <BrowserRouter>
          <Navbar/>
         <div className="container">
           <Switch>
             <Route component={TodoPage} path="/" exact />
             <Route  component={AboutPage} path="/about"/>
           </Switch>
           </div>
    </BrowserRouter>
        );
}

export default App;
