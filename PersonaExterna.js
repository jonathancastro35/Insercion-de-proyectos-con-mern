

import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
import {Link} from "react-router-dom"
import 'react-datepicker/dist/react-datepicker.css'

export default class PersonaExterna extends Component {
    state = {

        personaexterna: [], 

        IDPersonaExterna:'', 
        Nombres:'', 
        Primer_Apellido:'',
        Segundo_Apellido:'',
        Email:'',
        Contraseña:'',
        

        editing: false
        
    }

    async componentDidMount(){
      this.getPersonsExterna();
      
      if(this.props.match.params.id){  
        const res = await axios.get('http://localhost:8000/api/personaExterna/' + this.props.match.params.id);
        
        this.setState({

            IDPersonaExterna: res.data.IDPersonaExterna,
            Nombres: res.data.Nombres,
            Primer_Apellido: res.data.Primer_Apellido,
            Segundo_Apellido: res.data.Segundo_Apellido,
            Email:res.data.Email,      
            Contraseña: res.data.Contraseña,

            editing: true,
            _id: this.props.match.params.id 
        })
    }
  }


  getPersonsExterna = async () =>{
        const per = await axios.get('http://localhost:8000/api/personaExterna');
        this.setState({personaexterna: per.data});         
   }

    
    createPersonsExterna = async a =>{

        a.preventDefault();

        var cont1=0;
        var cont2=0;
        var cont3=0;
        var cont4=0;
        var cont5=0;
        var cont6=0;
        var cont7=0;
        var cont8=0;

        const resx=axios.get('http://localhost:8000/api/personaExterna') 

        for(var ee1=0; ee1<(await resx).data.length; ee1++){
            
            if( (await resx).data[ee1].IDPersonaExterna === this.state.IDPersonaExterna ){
                //verifico id persona externa no se repita
                cont1=cont1+1;
              }
            }

        const resx2=axios.get('http://localhost:8000/api/preventa') 

        for(var ee2=0; ee2<(await resx2).data.length; ee2++){
            
            if( (await resx2).data[ee2].IDPreventa_preventa === this.state.IDPersonaExterna ){
                //verifico id persona externa no se repita con algún preventa
                cont2=cont2+1;
              }
            }

        if( this.state.IDPersonaExterna.length === 0 ){
                //verifico id persona externa no sea vacio en adelante
              cont3=cont3+1;
              
                }

        if( this.state.Nombres.length === 0  ){
                    //verifico Nombres no esten vacios
              cont4=cont4+1;
                  
                }

        if( this.state.Primer_Apellido.length === 0  ){
                    //verifico Primer_Apellido no este vacio
              cont5=cont5+1;
                  
                }

        const resx3=axios.get('http://localhost:8000/api/personaExterna') 

        for(var ee3=0; ee3<(await resx3).data.length; ee3++){
            
            if( (await resx3).data[ee3].Email === this.state.Email ){
                //verifico Email persona externa no se repita
                cont6=cont6+1;
              }
            }

            if( this.state.Email.length === 0 ){
                //verifico Email persona externa no sea vacio
              cont7=cont7+1;
              
                }

                if( this.state.Contraseña.length < 8 ){
                    //verifico que la contraseña tenga minimo 8 caracres
                  cont8=cont8+1;
                  
                    }
                


    const newDir = {

        IDPersonaExterna: this.state.IDPersonaExterna,
        Nombres: this.state.Nombres,
        Primer_Apellido: this.state.Primer_Apellido,
        Segundo_Apellido: this.state.Segundo_Apellido,
        Email:this.state.Email,
        Contraseña: this.state.Contraseña,
        
        editing: true,
        _id: this.props.match.params.id 
    
    };

    //editing

    if(this.state.editing){

      var cont1a=0;
      var cont2a=0;
      var cont3a=0;
      var cont4a=0;
      var cont5a=0;
      var cont6a=0;
      var cont7a=0;
      var cont8a=0;

      const resxa=axios.get('http://localhost:8000/api/personaExterna') 

      for(var ee1a=0; ee1a<(await resxa).data.length; ee1a++){
          
          if( (await resxa).data[ee1a].IDPersonaExterna === this.state.IDPersonaExterna && (await resxa).data[ee1a]._id !== this.state._id){
            cont1a=cont1a+1;
            }

          }

          const resx2a=axios.get('http://localhost:8000/api/preventa') 

          for(var ee2a=0; ee2a<(await resx2a).data.length; ee2a++){
              
              if( (await resx2a).data[ee2a].IDPreventa_preventa === this.state.IDPersonaExterna ){
                cont2a = cont2a+1; 
                }
              }

              if( this.state.IDPersonaExterna.length === 0 ){
                //verifico id persona externa no sea vacio en adelante
              cont3a=cont3a+1;
              
                }

        if( this.state.Nombres.length === 0  ){
                    //verifico Nombres no esten vacios
              cont4a=cont4a+1;
                  
                }

        if( this.state.Primer_Apellido.length === 0  ){
                    //verifico Primer_Apellido no este vacio
              cont5a=cont5a+1;
                  
                }

        const resx3a=axios.get('http://localhost:8000/api/personaExterna') 

        for(var ee3a=0; ee3a<(await resx3a).data.length; ee3a++){
            
            if( (await resx3a).data[ee3a].Email === this.state.Email && (await resx3a).data[ee3a]._id !== this.state._id ){
                cont6a=cont6a+1;
              }
            }

            if( this.state.Email.length === 0 ){
                //verifico Email persona externa no sea vacio
              cont7a=cont7a+1;
              
                }

                if( this.state.Contraseña.length < 8 ){
                    //verifico que la contraseña tenga minimo 8 caracres
                  cont8a=cont8a+1;
                  
                    }
        
                    if(cont1a === 0 && cont2a === 0 && cont3a === 0 && cont4a === 0 && cont5a === 0 && cont6a === 0 && cont7a === 0 && cont8a === 0){             
      
      await axios.put('http://localhost:8000/api/personaExterna/' + this.state._id, newDir);
      window.location.href = '/ListarPersonasExternas';  
                    }

if(cont1a > 0 || cont2a > 0 || cont3a > 0 || cont4a > 0 || cont5a > 0 || cont6a > 0 || cont7a > 0 || cont8a > 0){
  window.location.href  = '/ErrorPersonaExterna'; 
} 
      
}

        //fin editing

        if(this.state.editing === false){

          if(cont1 === 0 && cont2 === 0 && cont3 === 0 && cont4 === 0 && cont5 === 0 && cont6 === 0 && cont7 === 0 && cont8 === 0){
     
       
            await axios.post('http://localhost:8000/api/personaExterna', newDir);
            window.location.href = '/ListarPersonasExternas' 
           
        }

        else{
    
          window.location.href  = '/ErrorPersonaExterna'; 
          }

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
              <h4 align="center">REGISTRO DE PESONAS EXTERNAS</h4>
              <h4 bgcolor="black">REGISTRAR</h4>

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
                
              <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="NOMBRE DE LA PERSONA EXTERNA" 
                      name="Nombres"
                      onChange= {this.onInputChange}
                      value={this.state.Nombres}
                      required
                      />  
                    </div>

                    <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="PRIMER APELLIDO" 
                      name="Primer_Apellido"
                      onChange= {this.onInputChange}
                      value={this.state.Primer_Apellido}
                      required
                      />  
                    </div>

                    <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="SEGUNDO APELLIDO" 
                      name="Segundo_Apellido"
                      onChange= {this.onInputChange}
                      value={this.state.Segundo_Apellido}
                      />  
                    </div>

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
                    
              <form onSubmit={this.createPersonsExterna}>
                        <button type="submit" className="btn btn-primary">
                         REGISTRAR PERSONA EXTERNA
                        </button>
                    </form>

                    </div>

                            <div className="col-md-25 offset-md-1" align="center">
                            <div className="card card-body" align="center">
                            <button type="submit" className="btn btn-success">

                            <Link className="btn btn-warning" to={"/IngresoPersonaExterna"}>
                                INGRESAR PERSONA EXTERNA
                             </Link>
                            </button>
                    
                            </div>
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
                            <button type="submit" className="btn btn-success">
                            <Link className="btn btn-warning" to={"/BuscarPersonaExterna"}>
                                BUSCAR PERSONA EXTERNA
                             </Link>
                            </button>
                            

                            </div>
                            </div>
            </div>


           
        )
    }
}


