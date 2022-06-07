


import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"

export default class ListarNintex extends Component {

    state= {
        nintex: [], 
        observacionv: [],
        buscar:''
        
    }

    componentDidMount() {
     
        this.getnintex();    
        this.getObservacion();
       }


       getnintex = async () =>{
        const per = await axios.get('http://localhost:8000/api/nintex/');
        this.setState({nintex: per.data});    
        
        }
        getObservacion = async () =>{
            const per = await axios.get('http://localhost:8000/api/observacion/');
            this.setState({observacionv: per.data});    
            
        }

        deletenintex = async (id) => {
              
            
            const res33 = await axios.get('http://localhost:8000/api/nintex/' + id);

            this.setState({
              
                buscar:res33.data.Nintex,
                
              })

              const res34 = await axios.get('http://localhost:8000/api/observacion/');

              if(((await res34).data.length)>0){
                for(var i=0; i<(await res34).data.length; i++){

                    if( (await res34).data[i].Nintexob ===  this.state.buscar) {
                    await axios.delete('http://localhost:8000/api/observacion/' + (await res34).data[i]._id);    
                    }  
                }  
                await axios.delete('http://localhost:8000/api/nintex/' + id);
              }

              
              if( ((await res34).data.length) === 0 ){
                await axios.delete('http://localhost:8000/api/nintex/' + id); 
              }
            
            
            this.getnintex();     
            
        }

      /*
      <div className="card-footer">
                                <button className="btn btn-danger" onClick={() => this.deletenintex(cor._id)}>
                                    Eliminar Nintex
                                </button>
                            </div> 
      */

    render() {
        
        return (
            <div className="row">
                {
                    this.state.nintex.map(cor => (
                        
                        <div className="col-md-4 p-2" key={cor._id}>
                            
                        <div className="card">
                            
                        <div className="card-header d-flex justify-content-between">
                             <h5><b>Modificar Nintex</b>: {cor.Nintex}</h5>
                           
                             <Link className="btn btn-secondary" to={"/EditarNintex/" + cor._id}>
                                Editar Nintex
                             </Link>
                             
                            </div>
                            
                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Fecha_1er_Ingreso</b>: {cor.Fecha_1er_Ingreso}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Linea</b>: {cor.Linea}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Pais</b>: {cor.Pais}</h5>  
                            </div>
                            

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Producto</b>: {cor.Producto}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Cliente</b>: {cor.Cliente}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Preventa_o_G_Prod</b>: {cor.Preventa_o_G_Prod}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>ID Preventa</b>: {cor.IDPreventa_o_G_Prod}</h5>  
                            </div>
                           
                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Alcance</b>: {cor.Alcance}</h5>  
                            </div>
                            
                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Prioridad</b>: {cor.Prioridad}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Nintex</b>: {cor.Nintex}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Estado</b>: {cor.Estado}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Analista_Asignado</b>: {cor.Analista_Asignado}</h5>  
                            </div>
                            
                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Desarrollador</b>: {cor.Desarrollador}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Arquitecto</b>: {cor.Arquitecto}</h5>  
                            </div>

                            <div className="card-footer">
                                <button className="btn btn-danger" onClick={() => this.deletenintex(cor._id)}>
                                    Eliminar Nintex
                                </button>
                            </div> 

                            <div className="card-header d-flex justify-content-between">
                             
                             <Link className="btn btn-secondary" to={"/GenerarPdfNintex/" + cor._id}>
                                Generar Pdf Del Nintex
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
