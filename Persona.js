


import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'



export default class Persona extends Component {
    state = {

        persona: [], 
        nintexvec: [],

        Nombre:'', 
        Primer_Apellido:'', 
        Segundo_Apellido:'', 
        Funcion:'', 
        Reunion:'',

        editing: false
        
    }

    async componentDidMount(){
      this.getPersona();
      //this.getcontextualizacion();
      this.estreu();
      

      if(this.props.match.params.id){
        const res = await axios.get('http://localhost:8000/api/persona/' + this.props.match.params.id);
        
        this.setState({

            Nombre: res.data.Nombre,
            Primer_Apellido: res.data.Primer_Apellido,
            Segundo_Apellido: res.data.Segundo_Apellido,
            Funcion: res.data.Funcion,
            Reunion:res.data.Reunion,
            
            editing: true,
            _id: this.props.match.params.id 
        })
    }
  }


    getPersona = async () =>{
        const per = await axios.get('http://localhost:8000/api/persona/');
        this.setState({persona: per.data});    
        
   }

 
  estreu = async () =>{
   
    const per = await axios.get('http://localhost:8000/api/contextualizacion/');
    this.setState({nintexvec: per.data,
      Reunion:per.data[0].Nintexc}); 
      
  }

 

    
    createPersona = async a =>{

        a.preventDefault();

        const newDir = {

            Nombre: this.state.Nombre,
            Primer_Apellido: this.state.Primer_Apellido,
            Segundo_Apellido: this.state.Segundo_Apellido,
            Funcion: this.state.Funcion,
            Reunion:this.state.Reunion,
  
            editing: true,
            _id: this.props.match.params.id 
        
        };

        
        if(this.state.editing){
          
          await axios.put('http://localhost:8000/api/persona/' + this.state._id, newDir);
          window.location.href = '/';  
          
      }

          else{

        await axios.post('http://localhost:8000/api/persona/', newDir);
        
        window.location.href = '/';  
          
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
              <h4 align="center">REGISTRO DE PERSONAS</h4>
              <h4 bgcolor="black">REGISTRAR</h4>
                
              <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="NOMBRES" 
                      name="Nombre"
                      onChange= {this.onInputChange}
                      value={this.state.Nombre}
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
                      required
                      />  
                    </div>

                    <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="FUNCION" 
                      name="Funcion"
                      onChange= {this.onInputChange}
                      value={this.state.Funcion}
                      required
                      />  
                    </div>

                    <div className="form-group">
                  <form onSubmit={this.onInputChange}>
                  <label>
                  <h5 align="left">REUNION</h5> 
                                
                 <select value={this.state.value} onChange={this.onInputChange} name="Reunion" >
                 
                                     {
                                
                              this.state.nintexvec.map(a =>
                                
                               <option key={a._id} value={a.Nintexc}>
                                 
                                   {a.Nintexc} - {a.Fecha}
                                   
                                 </option>
                                 
                                 )
                                 
                                                                   
                             }
                                           
                 </select>
                  
                              
                                
                  </label>
                  </form>
                  </div>

              <form onSubmit={this.createPersona}>
                        <button type="submit" className="btn btn-primary">
                         GUARDAR PERSONA
                        </button>
                    </form>

                    </div>
            </div>
           
        )
    }
}


