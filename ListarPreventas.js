

import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"


export default class ListarPreventas extends Component {
    
    state= {
        preventa: [], 
        
    }

    componentDidMount() {
     
        this.getPreventa();    
    
       }


       getPreventa = async () =>{
        const per = await axios.get('http://localhost:8000/api/preventa/');
        this.setState({preventa: per.data});    
      }

      deletePreventa = async (id) => {
              
        await axios.delete('http://localhost:8000/api/preventa/' + id);
        
        this.getPreventa();     
        
    }

       
render() {
        
    return (
        <div className="row">
            {
                this.state.preventa.map(cor => (
                    
                    <div className="col-md-4 p-2" key={cor._id}>
                        
                    <div className="card">

                    <div className="card-header d-flex justify-content-between">
                             <h5><b>Modificar Preventa</b>: {cor.IDPreventa_preventa}</h5>
                           
                             <Link className="btn btn-secondary" to={"/EditarPreventa/" + cor._id}>
                             Editar Preventa
                             </Link>
                             
                            </div>


                    <div className="card-header d-flex justify-content-between">
                             <h5><b>Conocer Los Nintex Del Preventa</b></h5>
                             
                             <Link className="btn btn-secondary" to={"/ListarNintexPreventa/" + cor.IDPreventa_preventa}>
                                Conocer Los Nintex Del Preventa
                             </Link>
                             
                    </div>    
                        
                    <div className="card-header d-flex justify-content-between">
                         
                    
                        <div className="card-header d-flex justify-content-between">
                            
                        <h5><b>Preventa</b>: {cor.Preventa_nombres} - {cor.IDPreventa_preventa}</h5>  
                        </div>

                        </div>

                        <div className="card-footer">
                                <button className="btn btn-danger" onClick={() => this.deletePreventa(cor._id)}>
                                    Eliminar Preventa
                                </button>
                            </div> 

                    </div>
                    </div>

                ))
            }
           
        </div>
    )
}
}
