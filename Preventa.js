
import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class Preventa extends Component {
    state = {

        preventa: [], 

        Preventa_nombres:'', 
        IDPreventa_preventa:'', 

        editing: false
        
    }

    async componentDidMount(){
      this.getPreventa();
      
      if(this.props.match.params.id){
        const res = await axios.get('http://localhost:8000/api/preventa/' + this.props.match.params.id);
        
        this.setState({

            Preventa_nombres: res.data.Preventa_nombres,
            IDPreventa_preventa: res.data.IDPreventa_preventa,
            
            editing: true,
            _id: this.props.match.params.id 
        })
    }
  }


  getPreventa = async () =>{
        const per = await axios.get('http://localhost:8000/api/preventa');
        this.setState({preventa: per.data});         
   }

    
    createPreventa = async a =>{

        a.preventDefault();

        const newDir = {

            Preventa_nombres: this.state.Preventa_nombres,
            IDPreventa_preventa: this.state.IDPreventa_preventa,
            
            editing: true,
            _id: this.props.match.params.id 
        
        };

        
        if(this.state.editing){
          
          await axios.put('http://localhost:8000/api/preventa/' + this.state._id, newDir);
          window.location.href = '/';  
          
         }

        else{

        await axios.post('http://localhost:8000/api/preventa/', newDir);
        
        window.location.href = '/ListarPreventas';  
          
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
              <h4 align="center">REGISTRO DE PREVENTAS</h4>
              <h4 bgcolor="black">REGISTRAR</h4>
                
              <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="NOMBRE DEL PREVENTA" 
                      name="Preventa_nombres"
                      onChange= {this.onInputChange}
                      value={this.state.Preventa_nombres}
                      required
                      />  
                    </div>

                    <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="IDENTIFICACIÓN DEL PREVENTA" 
                      name="IDPreventa_preventa"
                      onChange= {this.onInputChange}
                      value={this.state.IDPreventa_preventa}
                      required
                      />  
                    </div>

                    
              <form onSubmit={this.createPreventa}>
                        <button type="submit" className="btn btn-primary">
                         GUARDAR PREVENTA
                        </button>
                    </form>

                    </div>
            </div>
           
        )
    }
}


