


import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"
import jsPDF from 'jspdf'

export default class generapdf extends Component {

    state= {
        nintex: [], 
        observacionv: [],
        buscar:''
        
    }

    componentDidMount() {
     
        this.getnintex();    
       
       }


       getnintex = async () =>{
        const per = await axios.get('http://localhost:8000/api/nintex/');
        this.setState({nintex: per.data});    
        
        }
       
        generatePDF = async() => {

            var doc = new jsPDF();
            
            const per = await axios.get('http://localhost:8000/api/nintex/');

            for(var i=0; i<(per).data.length; i++){
            if( (per).data[i]._id ===  this.props.match.params.id){

                doc.setTextColor(255,0,0);
                doc.text(20, 10, "Información Del Nintex o Proyecto:"+(per).data[i].Nintex+"") 

                doc.setTextColor(0,0,255);
                doc.text(20, 20, "Fecha Del Primer Ingreso:"+(per).data[i].Fecha_1er_Ingreso+"") 

                doc.setTextColor(0,0,255);
                doc.text(20, 30, "Linea:"+(per).data[i].Linea+"") 

                 doc.setTextColor(0,0,255);
                doc.text(20, 40, "País:"+(per).data[i].Pais+"") 

                 doc.setTextColor(0,0,255);
                doc.text(20, 50, "Producto:"+(per).data[i].Producto+"") 

                 doc.setTextColor(0,0,255);
                doc.text(20, 60, "Cliente:"+(per).data[i].Cliente+"") 

                 doc.setTextColor(0,0,255);
                doc.text(20, 70, "Nombres Del Preventa:"+(per).data[i].Preventa_o_G_Prod+"") 

                 doc.setTextColor(0,0,255);
                doc.text(20, 80, "Identificación Del Preventa:"+(per).data[i].IDPreventa_o_G_Prod+"") 

                 doc.setTextColor(0,0,255);
                doc.text(20, 90, "Alcance:"+(per).data[i].Alcance+"") 

                 doc.setTextColor(0,0,255);
                doc.text(20, 100, "Prioridad:"+(per).data[i].Prioridad+"") 

                 doc.setTextColor(0,0,255);
                doc.text(20, 110, "Estado:"+(per).data[i].Estado+"")
                
                 doc.setTextColor(0,0,255);
                doc.text(20, 120, "Analista Asignado:"+(per).data[i].Analista_Asignado+"") 

                 doc.setTextColor(0,0,255);
                doc.text(20, 130, "Desarrollador:"+(per).data[i].Desarrollador+"") 

                 doc.setTextColor(0,0,255);
                doc.text(20, 140, "Arquitecto:"+(per).data[i].Arquitecto+"") 


                
                doc.save('demo.pdf')
                
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
            <Link className="btn btn-secondary" to={"/"}>
                              Ir a Inicio
                             </Link>
                             </div>
                             
            </form>  
             
             
         );
    }
}

