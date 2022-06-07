




import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"


export default class ListarPersona extends Component {
    
    state= {
        persona: [], 
        
        
    }

    componentDidMount() {
     
        this.getpersona();    
    
       }


       getpersona = async () =>{
        const per = await axios.get('http://localhost:8000/api/persona/');
        this.setState({persona: per.data});    
        
        }

        deletepersona = async (id) => {
              
            await axios.delete('http://localhost:8000/api/persona/' + id);
            
            this.getpersona();     
            
        }
/*
<div className="card-footer">
                                <button className="btn btn-danger" onClick={() => this.deleteobservacion(cor._id)}>
                                    Eliminar Observacion
                                </button>
                            </div> 
*/
      

    render() {
        
        return (
            <div className="row">
                {
                    this.state.persona.map(cor => (

                       
                        <div className="col-md-4 p-2" key={cor._id}>
                            
                        <div className="card">
                            
                        <div className="card-header d-flex justify-content-between">
                             <h5><b>Modificar Persona</b>: {cor.Nombre}  {cor.Primer_Apellido} {cor.Segundo_Apellido}</h5>
                           
                             <Link className="btn btn-secondary" to={"/EditarPersona/" + cor._id}>
                                Editar Persona
                             </Link>
                             
                            </div>
                            
                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Nombre</b>: {cor.Nombre}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Primer Apellido</b>: {cor.Primer_Apellido}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Segundo Apellido</b>: {cor.Segundo_Apellido}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Función</b>: {cor.Funcion}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Reunion Para Asistir</b>: {cor.Reunion}</h5>  
                            </div>

                            <div className="card-footer">
                                <button className="btn btn-danger" onClick={() => this.deletepersona(cor._id)}>
                                    Eliminar Persona
                                </button>
                            </div> 

                            <div className="card-header d-flex justify-content-between">
                             
                             <Link className="btn btn-secondary" to={"/"}>
                              Ir a Inicio
                             </Link>
                             
                            </div>
                            
                        </div>
                        </div>

                    ))
                }
               
            </div>
        )
    }
}
