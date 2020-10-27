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
                        <form className="form">
                            <ul>
                                <li>
                                    <h1>Formulario Alumno</h1>
                                </li>
                                <li>
                                    <div>
                                        <div><Field className='inputField' name='name' component='input' disabled='disable' placeholder={props.name}/></div>
                                        <div><Field className='inputField' name='last_name' component='input' disabled='disable' placeholder={props.last_name}/></div>
                                        <div><Field className='inputField' name='email' component='input' disabled='disable' placeholder={props.email}/></div>
                                        <div><Field className='inputField' name='year' component='input' disabled='disable' placeholder={props.year}/></div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <Link className="link" to="/editForm">
                                            <button>Editar informarcion</button>
                                        </Link>
                                        <Link className="link" to="/addForm">
                                             <button>Agregar Alumno</button>
                                         </Link>
                                    </div>
                                </li> 
                            </ul>
                        </form>
                    </li>
                </ul> 
            </Route>
            <Route exact path="/editForm">
                <form className="form">
                   <h1>Formulario Alumno</h1>
                    <div className='textbox'>
                        <div><Field className='inputField' name='name' component='input' disabled='disable' placeholder={props.name}/></div>
                        <div><Field className='inputField' name='last_name' component='input' disabled='disable' placeholder={props.last_name}/></div>
                        <div><Field className='inputField' name='email' component='input' disabled='disable' placeholder={props.email}/></div>
                        <div><Field className='inputField' name='year' component='input' disabled='disable' placeholder={props.year}/></div>
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