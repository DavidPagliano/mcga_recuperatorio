import './style.css'
import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { Form} from 'react-final-form';
import Alumnos1 from '../Alumnos/Alumno'
import Home from '../Home';

class form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Alumno:[{
                id: 0,
                name:'Ingrese nombre',
                last_name: 'Ingrese apellido',
                email:'Ingrese email',
                years:1
            }]
        };
    }

    handleInputChange=(event)=>{
        const alumno=Object.assign({}, this.state.Alumno);
        alumno.name=event.target("name").value;
        alumno.last_name=event.target("last_name").value;
        alumno.email=event.target("email").value;
        alumno.years=event.target("years").value;
        this.setState({Alumno: alumno});
    }
    
    deleteAlumno=(id, event)=>{
        const alumnos = Object.assign([], this.state.Alumnos);
        alumnos.splice(id, 1);
        this.setState({Alumno: alumnos});
        return;
    }
    addAlumno2=(event)=>{
        const alumno= Object.assign([], this.state.Alumno);
        alumno.push({
            id: this.state.Alumno.length,
            name:'Ingrese nombre',
            last_name: 'Ingrese apellido',
            email:'Ingrese email',
            years:1
        });
        this.setState({Alumno: alumno});
        return;
    }



    onSubmit(values){
        console.log('Submitting form', values);
    }

    render(){
        
        return(
            <BrowserRouter>
                <Route exacth path="/alumno" component={form}>
                   <div className="alumno">
                        <button onClick={this.addAlumno2} className="buttonAgregar">Agregar</button>
                        <button onClick={this.handleInputChange} className="buttonAgregar">Editar</button>
                        <button onClick={this.deleteAlumno} className="buttonAgregar">Eliminar</button>
                        <div className="alumnoBack">
                            <ul>
                                {
                                    this.state.Alumno.map((alumno1)=>{
                                        return(
                                            <Alumnos1
                                            onSubmit={this.onSubmit}
                                            render={alumno1}
                                            name={alumno1.name, this.state.Alumno.name}
                                            last_name={alumno1.last_name, this.state.Alumno.last_name}
                                            email={alumno1.email, this.state.Alumno.email}
                                            years={alumno1.years, this.state.Alumno.years}
                                            deleteAlumno={this.deleteAlumno.bind(this, alumno1.id)}
                                            handleInputChange={this.handleInputChange.bind(this, alumno1.id)}
                                            />
                                        )
                                    })
                                }
                            </ul>
                        </div>
                   </div>
                </Route>
                <Route exact path="/home" component={Home}></Route>
            </BrowserRouter>
        )
    }
}

export default form;