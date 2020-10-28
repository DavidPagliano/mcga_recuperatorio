import './style.css';
import React from 'react';
import { Field} from 'react-final-form';
import {BrowserRouter, Link, Route } from 'react-router-dom';
import Home from '../Home'

function Alumno(props){

    
    return(
        <BrowserRouter>
            <Route exact path="/Alumno">
                <ul>
                    <li>
                        <h1>Formulario Alumno</h1>
                    </li>
                    <li>
                        <form>
                            <input type="text" name="name" value="Nombre"/>
                            <input type="text" name="last_name" value="Apellido"/>
                            <input type="text" name="email" value="Email"/>
                            <input type="text" name="Edad" value="Edad"/>
                        </form>
                    </li>
                </ul> 
            </Route>
            <Route exact path="/editForm">
                <form className="form">
                   <h1>Formulario Alumno</h1>
                    <div className='textbox'>
                        
                    </div>
                    <div className='buttons'>
                        <Link className="link" to="/editForm">
                            <button>Editar informarcion</button>
                        </Link>
                        <Link className="link" to="/addForm">
                            <button>Agregar Alumno</button>
                        </Link>
                        <Link className="link" to="/home">
                            <button>volver</button>
                        </Link>
                    </div>
                </form>
            </Route>
            <Route exact path="/home" component={Home}/>
        </BrowserRouter>
    );
}

export default Alumno;