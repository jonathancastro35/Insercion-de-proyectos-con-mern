


import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'



export default class Observacion extends Component {
    state = {

        Observacionv: [], 
        nintexvec: [], 
        
        
        Nintexob:'', 
        

        Fecha:'',
        Observacion:'',

        editing: false

    }

    async componentDidMount(){
      this.getObservacion();
      this.getnintex();
      //this.createnintex();

      if(this.props.match.params.id){
        const res = await axios.get('http://localhost:8000/api/observacion/' + this.props.match.params.id);
        
        this.setState({

            Nintexob: res.data.Nintexob,
            Fecha: res.data.Fecha,
            Observacion: res.data.Observacion,

            
            editing: true,
            _id: this.props.match.params.id 
        })
    }
  }


    getObservacion = async () =>{
        const per = await axios.get('http://localhost:8000/api/observacion/');
        this.setState({Observacionv: per.data});    
        
   }

   getnintex = async () =>{
   
      const per = await axios.get('http://localhost:8000/api/nintex/');
      this.setState({nintexvec: per.data,
        Nintexob :per.data[0].Nintex}); 
    
}

    
    createObservacion = async a =>{

        a.preventDefault();

        const newDir = {

          Nintexob: this.state.Nintexob,
          Fecha: this.state.Fecha,
          Observacion: this.state.Observacion,
            
            
            editing: true,
            _id: this.props.match.params.id 
        
        };

        
        if(this.state.editing){
          
          await axios.put('http://localhost:8000/api/observacion/' + this.state._id, newDir);
          window.location.href = '/';  
          
      }

          else{

        await axios.post('http://localhost:8000/api/observacion/', newDir);
        
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
              <h4 align="center">REGISTRO DE OBSERVACIONES</h4>
              <h4 bgcolor="black">ESCOGER EL NINTEX</h4>


              <div className="form-group">
                  <form onSubmit={this.onInputChange}>
                  <label>
                  <h5 align="left">NINTEX</h5> 
                                
                 <select value={this.state.value} onChange={this.onInputChange} name="Nintexob" >
                 
                                     {
                                
                              this.state.nintexvec.map(a =>
                                
                               <option key={a._id} value={a.Nintex}>
                                 
                                   {a.Nintex} - {a.Cliente}
                                   
                                 </option>
                                 
                                 )
                                 
                                                                   
                             }
                                           
                 </select>
                  
                              
                                
                  </label>
                  </form>
                  </div>
              
                
                    <div className="form-group">
                      <input 
                      type="date" 
                      className="form-control" 
                      placeholder="FECHA" 
                      name="Fecha"
                      onChange= {this.onInputChange}
                      value={this.state.Fecha}
                      required
                      />  
                    </div>

                
              <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="OBSERVACION" 
                      name="Observacion"
                      onChange= {this.onInputChange}
                      value={this.state.Observacion}
                      required
                      />  
                    </div>
              

              <form onSubmit={this.createObservacion}>
                        <button type="submit" className="btn btn-primary">
                         GUARDAR OBSERVACION
                        </button>
                    </form>

                    </div>
            </div>
           
        )
    }
}


