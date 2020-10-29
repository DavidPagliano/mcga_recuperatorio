import './style.css'
import React from 'react'
import {BrowserRouter,Route, Link, Switch} from 'react-router-dom'
import Alumno from '../Alumnos/index.js'
import Counter from '../Counters/index.js'


function Home(){
  return(
    <BrowserRouter>
    <ul className="navegation">
      <li className="button"><Link to="counter" className="link">counter</Link></li>
      <li className="button"><Link to="alumno" className="link">alumno</Link></li>
    </ul>
    <Switch>
      <Route path="/counter" component={Counter}/> 
      <Route path="/alumno" component={Alumno}/> 
    </Switch>
    
 </BrowserRouter>
   
  )
}
export default Home;