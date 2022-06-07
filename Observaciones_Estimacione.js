



const { Schema, model } = require('mongoose');

const carvajaSchema = new Schema({
    
    Nintexob: {
        type: Number,  
        trim: true   
    },
    
    Fecha: {
        type: Date,
    },   

    Observacion: {
        type: Date,
        type: String 
    }, 

},



{
timestamps: true
},

);

module.exports = model('Observacione', carvajaSchema);

