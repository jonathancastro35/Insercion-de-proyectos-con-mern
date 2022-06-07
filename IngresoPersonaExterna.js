
import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
import {Link} from "react-router-dom"
import 'react-datepicker/dist/react-datepicker.css'

export default class IngresoPersonaExterna extends Component {
    state = {

        Email:'',
        Contraseña:'',
    
        editing: false
        
    }

    async componentDidMount(){
      
      if(this.props.match.params.id){
        const res = await axios.get('http://localhost:8000/api/personaExterna' + this.props.match.params.id);
        
        this.setState({

            Email:res.data.Email,
            Contraseña:res.data.Contraseña,
            editing: true,
            _id: this.props.match.params.id 
        })
    }
  }


 

    
  ingresopersonaexterna = async a =>{

        a.preventDefault();
        
        var cont1=0;
        var cont2=0;
        var cont3=0;
        var cc="";

        const resx=axios.get('http://localhost:8000/api/personaExterna') 

        for(var ee1=0; ee1<(await resx).data.length; ee1++){
            
            if( (await resx).data[ee1].Email === this.state.Email ){
            if( (await resx).data[ee1].Contraseña !== this.state.Contraseña ){
                cont1=cont1+1;
              }
            }

            if( (await resx).data[ee1].Email !== this.state.Email ){
            if( (await resx).data[ee1].Contraseña === this.state.Contraseña ){
                    cont1=cont1+1;
                  }
                }

                if( (await resx).data[ee1].Email !== this.state.Email ){
                    if( (await resx).data[ee1].Contraseña !== this.state.Contraseña ){
                            cont3=cont3+1;
                          }
                        }

            if( (await resx).data[ee1].Email === this.state.Email ){
            if( (await resx).data[ee1].Contraseña === this.state.Contraseña ){
                            cont2=cont2+1;
                            cc= (await resx).data[ee1].IDPersonaExterna;
                          }
                        }
            }

            if(cont1 > 0 || cont3 > 0 ){
                window.location.href  = '/ErrorIngresoPersonaExterna'; 
                
                }

                if(cont2 > 0){
                    window.location.href  = "/ListarPersonaExternaIngreso/"+cc; 
                    
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
              <h4 align="center">INGRESO PERSONA EXTERNA</h4>
              
              <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="CORREO" 
                      name="Email"
                      onChange= {this.onInputChange}
                      value={this.state.Email}
                      required
                      />  
                    </div>

                    <div className="form-group">
                      <h5 align="left">CONTRASEÑA</h5> 
                      
                      <input 
                      type="password" 
                      className="form-control" 
                      placeholder="CONTRASEÑA" 
                      name="Contraseña"
                      onChange= {this.onInputChange}
                      value={this.state.Contraseña}
                      required
                      />  
                    </div> 
                
                    
              <form onSubmit={this.ingresopersonaexterna}>
                        <button type="submit" className="btn btn-primary">
                         INGRESAR
                        </button>
                    </form>

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


