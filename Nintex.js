

import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class Nintex extends Component {
    state = {

        Nintexv: [], 
        observacionv: [], 
        contextualizacionv:[],
        persona: [],
        preventa: [], 
        preventa2: [],
        
        
        Fecha_1er_Ingreso:'',
        Linea:'FE',
        Pais:'PERÚ', 
        Producto:'', 
        Cliente:'', 
        IDPreventa_o_G_Prod:'',
        Preventa_o_G_Prod:'', 
        
        Alcance:'', 
        Prioridad:'1',
        Nintex:'', 
        Estado:'', 
        Analista_Asignado:'', 
        Desarrollador:'', 
        Arquitecto:'',
        numa:'',
        Preventa_nombres:'',

        Nintexob:'',
        Fecha:'',
        Observacion:'',

        Nintexc:'', 
       // Fecha:'',

        Nombre:'', 
        Primer_Apellido:'', 
        Segundo_Apellido:'', 
        Funcion:'', 
        Reunion:'',
       
        editing: false

    }
    
    async componentDidMount(){
      this.getNintex();
      this.getObservacion();
      this.getContextualizacion();
      this.getPersona();
      this.getPreventa();
      this.getPreventa2();
      
      
      
              
            
            

      if(this.props.match.params.id){
        const res = await axios.get('http://localhost:8000/api/nintex/' + this.props.match.params.id);
        
        this.setState({

            Fecha_1er_Ingreso: res.data.Fecha_1er_Ingreso,

            Linea: res.data.Linea,
            Pais: res.data.Pais,
            Producto: res.data.Producto,
            Cliente: res.data.Cliente,
            IDPreventa_o_G_Prod:res.data.IDPreventa_o_G_Prod,
            Preventa_o_G_Prod:res.data.Preventa_o_G_Prod,
            Alcance: res.data.Alcance,
            Prioridad: res.data.Prioridad,
            Nintex: res.data.Nintex,
            Estado: res.data.Estado,
            Analista_Asignado: res.data.Analista_Asignado,
            Desarrollador: res.data.Desarrollador,
            Arquitecto: res.data.Arquitecto,
            numa: res.data.Nintex,

            editing: true,
            _id: this.props.match.params.id 
        })
        
    }
  }
    

    getNintex = async () =>{
        const per = await axios.get('http://localhost:8000/api/nintex/');
        this.setState({Nintexv: per.data});    
        
   }

   getObservacion = async () =>{
    const per = await axios.get('http://localhost:8000/api/observacion/');
    this.setState({observacionv: per.data});    
    
}

getContextualizacion = async () =>{
  const per = await axios.get('http://localhost:8000/api/contextualizacion/');
  this.setState({contextualizacionv: per.data});    
  
}

getPersona = async () =>{
  const per = await axios.get('http://localhost:8000/api/persona/');
  this.setState({persona: per.data});    
  
}

getPreventa = async () =>{
  const per = await axios.get('http://localhost:8000/api/preventa/');
  this.setState({preventa: per.data});    
}


getPreventa2 = async () =>{
  const per = await axios.get('http://localhost:8000/api/preventa/');
  this.setState({preventa2: per.data,
  //Preventa_o_G_Prod: per.data[0].Preventa_nombres,
  }); 
   
}


    createnintex = async a =>{

        a.preventDefault();

       // console.log("revisarrrrr"+this.state.IDPreventa_o_G_Prod);  
        //console.log("revisarrrrrsqqqqqq"+this.state.Preventa_o_G_Prod);  

        const busquedanom = await axios.get('http://localhost:8000/api/preventa/');

        for(var jn=0; jn<(await busquedanom).data.length; jn++){
        if( (await busquedanom).data[jn].IDPreventa_preventa === this.state.IDPreventa_o_G_Prod){

          this.setState({

            Preventa_o_G_Prod: (await busquedanom).data[jn].Preventa_nombres
          })
        }  
        }

        const newDir = {

            Fecha_1er_Ingreso: this.state.Fecha_1er_Ingreso,
            Linea: this.state.Linea,
            Pais: this.state.Pais,
            Producto: this.state.Producto,
            Cliente: this.state.Cliente,
            IDPreventa_o_G_Prod: this.state.IDPreventa_o_G_Prod,
            Preventa_o_G_Prod: this.state.Preventa_o_G_Prod,
            Alcance: this.state.Alcance,
            Prioridad: this.state.Prioridad,
            Nintex: this.state.Nintex,
            Estado: this.state.Estado,
            Analista_Asignado: this.state.Analista_Asignado,
            Desarrollador: this.state.Desarrollador,
            Arquitecto: this.state.Arquitecto,
            
            editing: true,
            _id: this.props.match.params.id 
        
        };

        
        if(this.state.editing){

          var qq=this.state.observacionv.length;
          var qq2 = this.state.contextualizacionv.length;
          var qq3 = this.state.persona.length;

          var numviejo=this.state.numa;
          var numnuevo = this.state.Nintex;

          await axios.put('http://localhost:8000/api/nintex/' + this.state._id, newDir);

          if(qq>0){
            for(var j=0;j<(qq);j++){
              

              if( (this.state.observacionv[j].Nintexob) === (numviejo) ){
                
                const zx= this.state.observacionv[j]._id;
                
                const res2 = await axios.get('http://localhost:8000/api/observacion/' +zx);
            
            this.setState({
              
              Nintexob:res2.data.Nintexob,
              Fecha:res2.data.Fecha,
              Observacion:res2.data.Observacion,

            })
            
            const newDir2 = {
              Nintexob: numnuevo,
              Fecha: this.state.Fecha,
              Observacion:this.state.Observacion
             
            }
  
          await axios.put('http://localhost:8000/api/observacion/' + zx, newDir2)
              }
              }
              //-----------
          }
         
          
          if(qq2>0){
            for(var j2=0;j2<(qq2);j2++){
              

              if( (this.state.contextualizacionv[j2].Nintexc) === (numviejo) ){
                
                const zx2= this.state.contextualizacionv[j2]._id;
                
                const res22 = await axios.get('http://localhost:8000/api/contextualizacion/' +zx2);
            
            this.setState({

              Nintexc:res22.data.Nintexc,
              Fecha:res22.data.Fecha
              

            })
            
            const newDir22 = {
              Nintexc: numnuevo,
              Fecha: this.state.Fecha
            }
  
          await axios.put('http://localhost:8000/api/contextualizacion/' + zx2, newDir22)
              }
              }
              //-----------
          }

          if(qq3>0){
            for(var j22=0;j22<(qq3);j22++){
              

              if( (this.state.persona[j22].Reunion) === (numviejo) ){
                
                const zx22= this.state.persona[j22]._id;
                
                const res222 = await axios.get('http://localhost:8000/api/persona/' +zx22);
            
            this.setState({

              Nombre:res222.data.Nombre, 
              Primer_Apellido:res222.data.Primer_Apellido, 
              Segundo_Apellido:res222.data.Segundo_Apellido, 
              Funcion:res222.data.Segundo_Apellido, 
              Reunion:res222.data.Reunion,
              
            })
            
            const newDir222 = {
              
              Nombre:this.state.Nombre, 
              Primer_Apellido:this.state.Primer_Apellido, 
              Segundo_Apellido:this.state.Segundo_Apellido, 
              Funcion:this.state.Segundo_Apellido, 
              Reunion:numnuevo,
            }
  
          await axios.put('http://localhost:8000/api/persona/' + zx22, newDir222)
              }
              }
              //-----------
          }
 
          window.location.href = '/';  
          
          }

       
          else{

          const res3= await axios.get('http://localhost:8000/api/nintex/')
          var cont = 0;
          for(var i=0; i<res3.data.length; i++){
            if(res3.data[i].Nintex === this.state.Nintex){
              cont = cont + 1; 
            }
            }
            
          if(cont === 0){
            await axios.post('http://localhost:8000/api/nintex/', newDir);
        } 
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
              <h4 align="center">REGISTRO DE NINTEX</h4>
              <h4 bgcolor="black">FECHA 1ER INGRESO</h4>

              
                
                    <div className="form-group">
                      <input 
                      type="date" 
                      className="form-control" 
                      placeholder="FECHA 1ER INGRESO" 
                      name="Fecha_1er_Ingreso"
                      onChange= {this.onInputChange}
                      value={this.state.Fecha_1er_Ingreso}
                      required
                      />  
                    </div>



              
              <div className="form-group">
                  <form onSubmit={this.onInputChange}>
                  <label>
                  
                  <h5 align="left">LINEA</h5>     
                     
                 <select value={this.state.value} onChange={this.onInputChange2} name="Linea">
                   
                 <option value=""></option>
                   <option value="FE">FE</option>
                   <option value="EDI">EDI</option>
                   
                 </select>
                  </label>
                  </form>
                  </div>
              
              <div className="form-group">
                  <form onSubmit={this.onInputChange}>
                  <label>
                  
                  <h5 align="left">PAIS</h5>     
                     
                 <select value={this.state.value} onChange={this.onInputChange} name="Pais">
                   
                   <option value=""></option>
                   <option value="PERU">PERU</option>
                   <option value="COLOMBIA">COLOMBIA</option>
                   <option value="MEXICO">MEXICO</option>
                   <option value="CHILE">CHILE</option>
                   <option value="ECUADOR">ECUADOR</option>
                   <option value="ARGENTINA">ARGENTINA</option>
                   
                 </select>
                  </label>
                  </form>
                  </div>
              
              <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="PRODUCTO" 
                      name="Producto"
                      onChange= {this.onInputChange}
                      value={this.state.Producto}
                      required
                      />  
                    </div>
              
              <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="CLIENTE" 
                      name="Cliente"
                      onChange= {this.onInputChange}
                      value={this.state.Cliente}
                      required
                      />  
                    </div>
              
                  <div className="form-group">
                  <form onSubmit={this.onInputChange}>
                  <label>
                  <h5 align="left">ID PREVENTA</h5> 
                  
    
    
                 <select value={this.state.value} onChange={this.onInputChange} name="IDPreventa_o_G_Prod" >
                 
                                     {
                              
                              this.state.preventa.map(infaa => 
                               
                               <option key={infaa._id} value={infaa.IDPreventa_preventa}>
                                   
                                   {infaa.IDPreventa_preventa}
                                   
                                 </option>
                                 )
                                                                   
                             }
                                           
                 </select>
                  </label>
                  </form>
                  </div>


<div className="form-group">

<form onSubmit={this.onInputChange}>
<label>
<h5 align="left">NOMBRE DEL PREVENTA</h5> 

<select value={this.state.value} onChange={this.onInputChange} name="Preventa_o_G_Prod">

          {

this.state.preventa2.filter(x=> x.IDPreventa_preventa===this.state.IDPreventa_o_G_Prod).map(infa2 =>  

        <option key={infa2._id} value={infa2.Preventa_nombres} >
                 
                  {infa2.Preventa_nombres} 
                 
                  </option>
              
                 )

                 
                                                        
             }
                    
</select>


</label>
</form>

</div>


                  
                    
              <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="ALCANCE" 
                      name="Alcance"
                      onChange= {this.onInputChange}
                      value={this.state.Alcance}
                      required
                      />  
                    </div>
                    
                    <div className="form-group">
                  <form onSubmit={this.onInputChange}>
                  <label>
                  
                  <h5 align="left">PRIORIDAD</h5>     
                     
                 <select value={this.state.value} onChange={this.onInputChange} name="Prioridad">
                   
                   <option value=""></option>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   
                 </select>
                  </label>
                  </form>
                  </div>
              

              <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="NINTEX" 
                      name="Nintex"
                      onChange= {this.onInputChange}
                      value={this.state.Nintex}
                      />  
                    </div>
              
              <div className="form-group">
                  <form onSubmit={this.onInputChange}>
                  <label>
                  
                  <h5 align="left">ESTADO</h5>     
                     
                 <select value={this.state.value} onChange={this.onInputChange} name="Estado">
                 <option value=""></option>
                   <option value="En ejecucion">En ejecución</option>
                   <option value="Pendiente">Pendiente</option>
                   
                   
                 </select>
                  </label>
                  </form>
                  </div>
              
              <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="ANALISTA" 
                      name="Analista_Asignado"
                      onChange= {this.onInputChange}
                      value={this.state.Analista_Asignado}
                      />  
                    </div>
              
              <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="DESARROLLADOR" 
                      name="Desarrollador"
                      onChange= {this.onInputChange}
                      value={this.state.Desarrollador}
                      />  
                    </div>
              
              <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="ARQUITECTO" 
                      name="Arquitecto"
                      onChange= {this.onInputChange}
                      value={this.state.Arquitecto}
                      />  
                    </div>
              

              <form onSubmit={this.createnintex}>
                        <button type="submit" className="btn btn-primary">
                         GUARDAR NINTEX
                        </button>
                    </form>

                    </div>
            </div>
           
        )
    }
}


