import './style.css'
import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import { Form} from 'react-final-form';
import Alumnos from '../Alumnos'

class form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Users:{
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

    onSubmit(values){
        console.log('Submitting form', values);
    }

    render(){
        return(
            <BrowserRouter>
                <Redirect to="/recuperatorio1"/>
                <Route extac path="/recuperatorio1" component={Home}>
                    <div className="formContainer">
                        <Form
                            onSubmit={this.onSubmit}
                            render={Alumnos}
                            name={this.state.Users.name}
                            last_name={this.state.Users.last_name}
                            email={this.state.Users.email}
                            years={this.state.Users.years}
                        />
                    </div>
                </Route>
            </BrowserRouter>
        )
    }
}

export default form;