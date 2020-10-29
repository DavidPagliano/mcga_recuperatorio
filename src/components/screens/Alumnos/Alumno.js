import './style.css';
import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';


const alumno=(props)=>{
   
    return(
        <BrowserRouter>
            <Route exact path="/Alumno">
            <div className="warpper">
                <ul className="form-style">
                    <li>
                        <form>
                            <ul className="inputs-form">
                                <li>
                                    <label>Nombre: </label>
                                    <input 
                                    placeholder={props.name}
                                    name="name"
                                    type="text"
                                ></input></li>
                                <li>
                                    <label>Apellido: </label>
                                    <input 
                                   placeholder={props.last_name}
                                    name="last_name"
                                    type="text"></input></li>
                                <li>
                                    <label>Email: </label>
                                    <input 
                                    placeholder={props.email}
                                    name="email"
                                    type="email"></input></li>
                                <li>
                                    <label>Edad: </label>
                                    <input 
                                    placeholder={props.years}
                                    name="years"
                                    type="number" min="1" max="99" ></input>
                                    </li>
                                    <Link>
                                        <button onClick={props.handleInputChange} type="submit" className="buttons-form" className="material" >Guardar</button>
                                    </Link>
                                
                                <Link to="/editAlumno">
                                    <button onClick={props.editAlumno} className="buttons-form" className="material">Editar</button>
                                </Link>
                            </ul>      
                        </form>
                    </li>
                </ul>
            </div>
            </Route>
            <Route exact path="/editAlumno">
            <div className="warpper">
                <ul className="form-style">
                    <li>
                        <form>
                            <ul className="inputs-form">
                                <li>
                                    <label>Nombre: </label>
                                    <input 
                                    placeholder={props.name}
                                    disabled="disable"
                                    name="name"
                                    type="text"
                                ></input></li>
                                <li>
                                    <label>Apellido: </label>
                                    
                                    <input 
                                    placeholder={props.last_name}
                                    disabled="disable"
                                    name="last_name"
                                    type="text"></input></li>
                                <li>
                                    <label>Email: </label>
                                    <input 
                                    placeholder={props.email}
                                    disabled="disable"
                                    name="email"
                                    type="email"></input></li>
                                <li>
                                    <label>Edad: </label>
                                    <input 
                                    placeholder={props.years}
                                    disabled="disable"
                                    name="years"
                                    type="number" min="1" max="99"></input>
                                </li>
                                    <Link to="/Alumno">
                                        <button onClick={props.handleInputChange} type="submit" className="buttons-form" className="material" >Guardar</button>
                                    </Link>
                                    
                                    <button onClick={props.deleteAlumno} className="buttons-form" className="material">Eliminar</button>
                            </ul>      
                        </form>
                    </li>
                </ul>
            </div>
            </Route>
        </BrowserRouter>
    )
}


export default alumno;