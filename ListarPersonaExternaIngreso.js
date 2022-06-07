

import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"

export default class ListarPersonaExternaIngreso extends Component {

    state= {
        personaexterna: [], 
        
    }

    componentDidMount() {
     
        this.getpersonaexterna();    
       }


       getpersonaexterna = async () =>{
        const per = await axios.get('http://localhost:8000/api/personaExterna/');
        this.setState({personaexterna: per.data});    
        
        }
      

        
                                                

    render() {
        
        return (
            <div className="row">
                {
                    this.state.personaexterna.filter(x=> x.IDPersonaExterna === this.props.match.params.IDPersonaExterna).map(cor => (
                        
                        <div className="col-md-4 p-2" key={cor._id}>
                            
                        <div className="card">

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Modificar Persona Externa</b>: {cor.IDPersonaExterna} </h5>
                           
                             <Link className="btn btn-secondary" to={"/EditarPersonaExterna/" + cor._id}>
                                Editar Persona Externa 
                             </Link>
                             
                            </div>
                            
                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Nombres</b>: {cor.Nombres}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Primer Apellido</b>: {cor.Primer_Apellido}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Segundo Apellido</b>: {cor.Segundo_Apellido}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Correo</b>: {cor.Email}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Contraseña</b>: {cor.Contraseña}</h5>  
                            </div>

                            
  
                        </div>

                        

                        <div className="card">
                        <div className="card-header d-flex justify-content-between"></div>
                        <Link className="btn btn-secondary" to={"/RegistrarPersonaExterna"}>
                        Registrar Personas Externas
                        </Link>
                        </div>

                        

                            <div className="card-header d-flex justify-content-between">
                
                             <Link className="btn btn-primary" to={"/GenerarPdfPersonaExterna/" + cor._id}>
                                Generar Pdf Persona Externa
                             </Link>
                             
                            </div> 


                        </div>



                    ))
                }

                            <div className="col-md-25 offset-md-1" align="center">
                            <div className="card card-body" align="center">
                            <button type="submit" className="btn btn-success">

                            <Link className="btn btn-success" to={"/RegistrarPersonaExterna"}>
                                VOLVER
                             </Link>
                            </button>
                    
                            </div>
                            </div>
               
            </div>
        )
    }
}
