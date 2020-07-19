import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import { Switch,Route } from 'react-router-dom';

 const App = () => {
    return (
        
        <>
        <Navbar/>
        <Switch>
        <Route exact  path= '/' component={Home}/>
        <Route path= '/about' component={About}/>
        <Route path= '/services' component={Services}/>
        <Route path= '/contact' component={Contact}/>
        <Route path="*" component={()=><h2>404 Not Found</h2>}/>
           
            </Switch>
        </>
    )
}

export default  App;