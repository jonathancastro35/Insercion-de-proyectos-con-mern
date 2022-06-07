



import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"

export default class ListarObservacion extends Component {

    state= {
        observacion: [], 
        
        
    }

    componentDidMount() {
     
        this.getobservacion();    
    
       }


       getobservacion = async () =>{
        const per = await axios.get('http://localhost:8000/api/observacion/');
        this.setState({observacion: per.data});    
        
        }

        deleteobservacion = async (id) => {
              
            await axios.delete('http://localhost:8000/api/observacion/' + id);
            
            this.getobservacion();     
            
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
                    this.state.observacion.map(cor => (
                        
                        <div className="col-md-4 p-2" key={cor._id}>
                            
                        <div className="card">
                            
                        <div className="card-header d-flex justify-content-between">
                             <h5><b>Modificar Observacion en Nintex</b>: {cor.Nintexob}</h5>
                           
                             <Link className="btn btn-secondary" to={"/EditarObservacion/" + cor._id}>
                                Editar Observacion
                             </Link>
                             
                            </div>
                            
                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Nintex</b>: {cor.Nintexob}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Fecha</b>: {cor.Fecha}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Observacion</b>: {cor.Observacion}</h5>  
                            </div>

                            <div className="card-footer">
                                <button className="btn btn-danger" onClick={() => this.deleteobservacion(cor._id)}>
                                    Eliminar Observacion
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
