import './style.css'
import React from 'react';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';
import Alumnos from '../Alumnos/index'
import Counter from '../Counters/index'

class Home extends React.Component{
 constructor(props){
     super(props);
     this.state={

     }
 }

 render(){
    return(
        <BrowserRouter>
            <Switch>
                <Redirect to="/recuperatorioI">
                    <Route exact path="/recuperatorioI" component={Home}>
                        <Link className="Link" to="/Alumno">
                            <button className="buttons">Listado de alumnos</button>
                        </Link>
                        <Link className="Link" to="/Counter"> 
                            <button className="buttons">Listado de contadores</button>
                        </Link>
                    </Route>
                </Redirect>
                <Route exact path="/Alumno" component={Alumnos}/>
                <Route exact path="/Counter" component={Counter}/>
            </Switch>
        </BrowserRouter>
    )
 }
}

export default Home;
