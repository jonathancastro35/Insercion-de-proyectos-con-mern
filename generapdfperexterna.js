

import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"
import jsPDF from 'jspdf'

export default class generapdfperexterna extends Component {

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
       
        generatePDF = async() => {

            var doc = new jsPDF();
            
            const per = await axios.get('http://localhost:8000/api/personaExterna/');

            for(var i=0; i<(per).data.length; i++){
            if( (per).data[i]._id ===  this.props.match.params.id){

                doc.setTextColor(255,0,0);
                doc.text(20, 10, "Información Del La Persona Externa:"+(per).data[i].IDPersonaExterna+"") 

                doc.setTextColor(0,0,255);
                doc.text(20, 20, "Nombre De La Persona Externa:"+(per).data[i].Nombres+"") 

                doc.setTextColor(0,0,255);
                doc.text(20, 30, "Primer Apellido:"+(per).data[i].Primer_Apellido+"") 

                 doc.setTextColor(0,0,255);
                doc.text(20, 40, "Segundo Apellido:"+(per).data[i].Segundo_Apellido+"") 

                 doc.setTextColor(0,0,255);
                doc.text(20, 50, "Correo:"+(per).data[i].Email+"") 

                doc.save('PersonaExterna'.concat(''+(per).data[i].IDPersonaExterna+'').concat('.pdf'))
                
            }    
            }

            

        }

       

    render() {
        
        return (
 
            <form onSubmit={this.generatePDF}>
            <button type="submit" className="btn btn-primary">
            Download PDF
            </button>
            <div className="card">
            <div className="card-header d-flex justify-content-between"></div>
            <Link className="btn btn-secondary" to={"/RegistrarPersonaExterna"}>
                              Ir Registrar Persona Externa
                             </Link>
                             </div>
                             
            </form>  
             
             
         );
    }
}

