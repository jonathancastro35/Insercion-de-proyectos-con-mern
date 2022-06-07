
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navegacion extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/Nintex">
                    NINTEX CARVAJAL
                    </Link>


                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">

                            
                        <li className="nav-item active">
                                <Link className="nav-link" to="/"><b>NINTEX</b></Link>
                        </li>
                             
                            <li className="nav-item">
                            <Link className="nav-link" to="/nintex"><b>REGISTRAR NINTEX</b></Link>
                            </li>

                            <li className="nav-item">
                            <Link className="nav-link" to="/observacion"><b>REGISTRA OBSERVACIONES</b></Link>
                            </li>
                            
                            <li className="nav-item">
                            <Link className="nav-link" to="/ListarObservaciones"><b>LISTAR OBSERVACIONES</b></Link>
                            </li>
                            
                            <li className="nav-item">
                            <Link className="nav-link" to="/RegistrarPersona"><b>REGISTRAR PERSONAS</b></Link>
                            </li>
                            
                            <li className="nav-item">
                            <Link className="nav-link" to="/ListarPersonas"><b>LISTAR PERSONAS</b></Link>
                            </li>

                            <li className="nav-item">
                            <Link className="nav-link" to="/RegistrarContextualizacion"><b>REGISTRAR CONTEXTUALIZACION</b></Link>
                            </li>

                            <li className="nav-item">
                            <Link className="nav-link" to="/ListarContextualizacion"><b>LISTAR CONTEXTUALIZACION</b></Link>
                            </li>

                            <li className="nav-item">
                            <Link className="nav-link" to="/ListarPreventas"><b>LISTAR PREVENTAS</b></Link>
                            </li>

                            <li className="nav-item">
                            <Link className="nav-link" to="/RegistrarPreventa"><b>REGISTRAR PREVENTA</b></Link>
                            </li>

                            <li className="nav-item">
                            <Link className="nav-link" to="/RegistrarPersonaExterna"><b>REGISTRAR PERSONA EXTERNA</b></Link>
                            </li>
                            
                          
                            
                            
                        </ul>
                    </div>
                </div>


            </nav>
        )
    }
}
