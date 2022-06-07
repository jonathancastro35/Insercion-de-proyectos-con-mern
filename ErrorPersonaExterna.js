
import React, { Component } from 'react'
//import axios from 'axios'
//import {ingresar} from './ingresar'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"

export default class Errorrector extends Component {

    state= {
        institucion:"",
    }

    componentDidMount() {
          
       }

     

    
    
    render() {
       
        return (
            <div className="col-md-8 p-1" align="center">
                            
                        <div className="card">
                        <h5>POR FAVOR REVISAR LO SIGUIENTE, PARA REGISTRAR PERSONA EXTERNA</h5> 
                        <h5>(1) La identificacion persona externa no se repita</h5> 
                        <h5>(2) La identificacion persona externa no sea vacía</h5> 
                        <h5>(3) El Nombre no puede ser vacio </h5> 
                        <h5>(4) El primer Apellido No puede ser vacio</h5> 
                        <h5>(5) El Correo No se puede repetir</h5> 
                        <h5>(6) El Correo de la persona externa no sea vacía</h5> 
                        <h5>(7) La Contraseña no puede tener menos de 8 Caracteres </h5>     
                        </div>

                        <div className="card">
                        <div className="card-header d-flex justify-content-between"></div>
                        <Link className="btn btn-secondary" to={"/RegistrarPersonaExterna"}>
                         Intentar De Nuevo
                        </Link>
                        </div>
            </div>

            
            
                 
        )
    }
}