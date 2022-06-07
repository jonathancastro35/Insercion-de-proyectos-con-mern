


import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
import {Link} from "react-router-dom"
import 'react-datepicker/dist/react-datepicker.css'

export default class BuscarPersonaExterna extends Component {
    state = {

        IDPersonaExterna:'', 
    
        editing: false
        
    }

    async componentDidMount(){
      
      if(this.props.match.params.id){
        const res = await axios.get('http://localhost:8000/api/personaExterna' + this.props.match.params.id);
        
        this.setState({

            IDPersonaExterna: res.data.IDPersonaExterna,
            editing: true,
            _id: this.props.match.params.id 
        })
    }
  }


 

    
    buscarpersonaexterna = async a =>{

        a.preventDefault();
        
        var cont1=0;

        const resx=axios.get('http://localhost:8000/api/personaExterna') 

        for(var ee1=0; ee1<(await resx).data.length; ee1++){
            
            if( (await resx).data[ee1].IDPersonaExterna === this.state.IDPersonaExterna ){
                //verifico id persona externa no se repita
                cont1=cont1+1;
              }
            }

            if(cont1===0){
                window.location.href  = '/ErrorBusquedaPersonaExterna'; 
                
                }

                else{
                    window.location.href  = "/ListarPersonaExterna/"+this.state.IDPersonaExterna; 
                }

    
    
    }

    

    onInputChange = e =>{
        
        this.setState({
          [e.target.name]: e.target.value  
        })
    }

    onInputChange2 = e =>{
        
      this.setState({
        [e.target.name]: e.target.value  
      })
  }


    onChangeFechanac = e => {
      this.setState({e})
    }

    

    render() {

        return (

          <div className="col-md-25 offset-md-1">
          <div className="card card-body">
              <h4 align="center">BUSCAR LA PERSONA EXTERNA</h4>
              
              <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="IDENTIFICACIÓN DE LA PERSONA EXTERNA" 
                      name="IDPersonaExterna"
                      onChange= {this.onInputChange}
                      value={this.state.IDPersonaExterna}
                      required
                      />  
                    </div>
                
                    
              <form onSubmit={this.buscarpersonaexterna}>
                        <button type="submit" className="btn btn-primary">
                         BUSCAR
                        </button>
                    </form>

                    </div>

                  

                            <div className="col-md-25 offset-md-1" align="center">
                            <div className="card card-body" align="center">
                            <button type="submit" className="btn btn-success">

                            <Link className="btn btn-warning" to={"/ListarPersonasExternas"}>
                                LISTAR PERSONAS EXTERNAS
                             </Link>
                            </button>
                    
                            </div>
                            </div>

                            <div className="col-md-25 offset-md-1" align="center">
                            <div className="card card-body" align="center">
                            <button type="submit" className="btn btn-warning">

                            <Link className="btn btn-primary" to={"/RegistrarPersonaExterna"}>
                                VOLVER REGISTRAR PERSONAS EXTERNAS
                             </Link>
                            </button>
                    
                            </div>
                            </div>

                            
            </div>


           
        )
    }
}


