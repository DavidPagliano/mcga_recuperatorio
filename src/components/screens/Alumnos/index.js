import './style.css'
import React from 'react';
import {BrowserRouter, Route, Redirect, Link} from 'react-router-dom';
import { Form} from 'react-final-form';
import Alumnos from '../Alumnos'
import Home from '../Home';

class form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Users:{
                id: 0,
                name:'Ingrese nombre',
                last_name: 'Ingrese apellido',
                email:'Ingrese email',
                years:1
            }
        }
    }

    handleInputChange=(event)=>{
        const Users=Object.assign({}, this.state.Users);
        Users.name=event.target("name").value;
        Users.last_name=event.target("last_name").value;
        Users.email=event.target("email").value;
        Users.years=event.target("years").value;
        this.setState({Users: Users});
    }
    
    deleteAlumno=(id, event)=>{
        const Users = Object.assign([], this.state.Users);
        Users.splice(id, 1);
        this.setState({Users: Users});
        return;
    }
    addAlumno2=(event)=>{
        const Users= Object.assign([], this.state.Users);
        Users.push({
            id: this.state.Users.length,
            name:'Ingrese nombre',
            last_name: 'Ingrese apellido',
            email:'Ingrese email',
            years:1
        });
        this.setState({Users: Users});
        return;
    }

    editState = (isValid) =>{
        if(isValid) {
            let edit = this.state.edit;
            this.setState({edit: !edit});
        }
    }

    validateInput = () =>{
        let isValid = true;

        if(!/^[a-zA-Z\s]*$/g.test(this.userInput.value)){
            this.userInput,value = '';
            this.userInput.placeholder = 'Solo letras';
            isValid = false;
        }

        if(!/^[0-9]*$/g.test(this.yearsInput.value)) {
            this.yearsInput.value = 0;
            this.yearsInput.placeholder = 'solo numeros';
            isValid = false;
        }

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/g.test(this.emailInput.value)) {
            this.emailInput.value = '';
            this.emailInput.value = 'La dirección de email es incorrecta';
        }

        this.editState(isValid);
    }

    onSubmit(values){
        console.log('Submitting form', values);
    }

    render(){
        let edit = this.state.edit;
        return(
            <BrowserRouter>
                <Redirect to="/recuperatorio1"/>
                <Route extac path="/recuperatorio1" component={Home}>
                    <div className="formContainer">
                        <button onClick={this.addAlumno2} className="buttonAlumno">+ Alumno</button>
                        <div className="alumnoBack">
                            <ul>
                                {
                                    this.state.Users.map((Users)=>{
                                        return(
                                            <Alumnos>
                                                <Form
                                                    onSubmit={this.onSubmit}
                                                    render={Alumnos}
                                                    name={this.state.Users.name}
                                                    last_name={this.state.Users.last_name}
                                                    email={this.state.Users.email}
                                                    years={this.state.Users.years}
                                                    deleteAlumno={this.deleteAlumno.bind(this, Users.id)}
                                                />
                                            </Alumnos>
                                        )
                                    })
                                }
                            </ul>
                            <Link to="/recuperatorio1" className="link">
                                <button className="buttonAlumno">Volver</button>
                            </Link>
                        </div>
                    </div>
                </Route>
                <Route exact path="/recuperatorio1" component={Home}></Route>
            </BrowserRouter>
        )
    }
}

export default form;