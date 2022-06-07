





import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"

export default class ListarPersona extends Component {

    state= {
        contextualizacion: [], 
    
        
    }

    componentDidMount() {
     
        this.getcontextualizacion();   
    
       }


       getcontextualizacion = async () =>{
        const per = await axios.get('http://localhost:8000/api/contextualizacion/');
        this.setState({contextualizacion: per.data});    
        
        }
        
        deletecontextualizacion = async (id) => {
              
            await axios.delete('http://localhost:8000/api/contextualizacion/' + id);
            
            this.getcontextualizacion();     
            
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
                    this.state.contextualizacion.map(cor => (

                       
                        <div className="col-md-4 p-2" key={cor._id}>
                            
                        <div className="card">
                            
                        <div className="card-header d-flex justify-content-between">
                             <h5><b>Modificar Contextualización</b>: {"Nintex"} = {cor.Nintexc}  {cor.Fecha} </h5>
                           
                             <Link className="btn btn-secondary" to={"/EditarContextualización/" + cor._id}>
                                Editar Contextualización
                             </Link>
                             
                            </div>
                            
                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Contextualizacion De Nintex </b>: {cor.Nintexc}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Fecha</b>: {cor.Fecha}</h5>  
                            </div>

                            

                            <div className="card-footer">
                                <button className="btn btn-danger" onClick={() => this.deletecontextualizacion(cor._id)}>
                                    Eliminar Contextualizacion
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
