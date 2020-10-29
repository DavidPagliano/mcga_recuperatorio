import './style.css'
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Alumnos1 from '../Alumnos/Alumno.js'

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
            }],
            validations:[{
                name:'Ingrese nombre',
                last_name: 'Ingrese apellido',
                email:'Ingrese email',
                years:1
            }]
        };
    }

    
    validateAll = () => {
        

        const { name, last_name, email, years } = this.state.values
        const validations = { name: '', last_name:'',email: '', years: 1 }
        let isValid = true
        
        if (!name) {
          validations.name = 'Name is required'
          isValid = false
        }
        if (!last_name) {
            validations.last_name = 'Last name is required'
            isValid = false
          }
        
        if (!email) {
          validations.email = 'Email is required'
          isValid = false
        }
        
        if (!years) {
          validations.years = 'years is required'
          isValid = false
        }
        
        if (!isValid) {
          this.setState({ validations })
        }
        
        return isValid
      }
    

    addAlumno=(event)=>{
    
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
      
      handleInputChange =(event) =>{
        
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
    onSubmit(values){
        console.log('Submitting form', values);
    }
    validet(){
        const { name, last_name, email, years} = this.state.values
        const  { 
          name: nameVal,
          last_name: last_nameVal,
          email: emailVal, 
          years: yearVal 
        } = this.state.validations;
    }
    render() {
        
        return(
            <BrowserRouter>
                <Route exacth path="/alumno" component={form}>
                   <div className="alumno">
                        <div className="navegation-form">
                                <button onClick={this.addAlumno} className="buttons-form" className="material">Agregar</button>
                        </div>
                        <div className="alumnoBack">
                            <ul>
                                {
                                    this.state.Alumno.map((alumno1)=>{
                                        return(
                                            <Alumnos1
                                            onSubmit={this.onSubmit}
                                            render={alumno1}
                                            name={alumno1.name, this.state.Alumno.name, this.validet}
                                            last_name={alumno1.last_name, this.state.Alumno.last_name, this.validet}
                                            email={alumno1.email, this.state.Alumno.email, this.validet}
                                            years={alumno1.years, this.state.Alumno.years, this.validet}
                                            deleteAlumno1={this.deleteAlumno.bind(this, alumno1.id)}
                                            handleInputChange={this.handleInputChange.bind(this, alumno1.id)}
                                            >                                          
                                            </Alumnos1>
                                        )
                                    })
                                }
                                
                            </ul>
                           
                        </div>
                   </div>
                </Route>
            </BrowserRouter>
        )
    }
}



export default form;