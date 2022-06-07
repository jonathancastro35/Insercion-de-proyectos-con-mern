
import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'



export default class Contextualizacion extends Component {
    state = {

        contextualizacion: [], 
        nintexvec:[],
       
        Nintexc:'', 
        Fecha:'',

        editing: false

    }

    async componentDidMount(){
      this.getnintex();
      this.getcontextualizacion();
      //this.estcliente();
      
      

      if(this.props.match.params.id){
        const res = await axios.get('http://localhost:8000/api/contextualizacion/' + this.props.match.params.id);
        
        this.setState({

            Nintexc: res.data.Nintexc,
            Fecha: res.data.Fecha,

            
            editing: true,
            _id: this.props.match.params.id 
        })
    }
  }


   

  getnintex = async () =>{
   
    const per = await axios.get('http://localhost:8000/api/nintex/');
    this.setState({nintexvec: per.data,
      Nintexc:per.data[0].Nintex
      
    }); 
}


getcontextualizacion = async () =>{
   
  const per = await axios.get('http://localhost:8000/api/contextualizacion/');
  this.setState({contextualizacion: per.data}); 
}


    
    createContextualizacion = async a =>{

        a.preventDefault();
          
        const newDir = {

          Nintexc: this.state.Nintexc,
          Fecha: this.state.Fecha,
          
            editing: true,
            _id: this.props.match.params.id 
        
        };

        
        if(this.state.editing){
          
          await axios.put('http://localhost:8000/api/contextualizacion/' + this.state._id, newDir);
          window.location.href = '/';  
          
      }

          else{

        await axios.post('http://localhost:8000/api/contextualizacion/', newDir);
        
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
              <h4 align="center">REGISTRO DE CONTEXTUALIZACIONES</h4>
              <h4 bgcolor="black">ESCOGER EL NINTEX</h4>


              <div className="form-group">
                  <form onSubmit={this.onInputChange}>
                  <label>
                  <h5 align="left">NINTEX</h5> 
                  
                 <select value={this.state.value} onChange={this.onInputChange} name="Nintexc" >
                 
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

              

              <form onSubmit={this.createContextualizacion}>
                        <button type="submit" className="btn btn-primary">
                         GUARDAR CITA DE CONTEXTUALIZACION
                        </button>
                    </form>

                    </div>
            </div>
           
        )
    }
}


