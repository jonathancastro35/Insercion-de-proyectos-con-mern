




import React, { Component } from 'react'
import axios from 'axios'
//import {ingresar} from './ingresar'
//import {format} from 'timeago.js'
//import {Link} from "react-router-dom"

export default class Listavacia extends Component {

    state= {
        lista: [],
    }
    
    componentDidMount() {
     
        this.getLista();    
       }

       async getLista(){
        const res= await axios.get('http://localhost:5000/api/ataquescarvajal/')  
        this.setState({lista: res.data})    
        }
    
    
    render() {
       
        return (
            
                <div align="center"><b>LA IDENTIFICACION YA ESTA REGISTRADA</b></div>   
        )
    }
}