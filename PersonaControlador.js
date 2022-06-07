
const DocumentoCtrl = {};

const p = require('../Modelos/Persona');

DocumentoCtrl.getPersonas =  async (req, res) => {
const ps = await p.find();    
res.json(ps)
}

DocumentoCtrl.registrarPersona = async (req, res) => {
    const { Nombre, Primer_Apellido, Segundo_Apellido, Funcion, Reunion } = req.body;
    const ps = new p({
        Nombre:Nombre, 
        Primer_Apellido:Primer_Apellido, 
        Segundo_Apellido:Segundo_Apellido, 
        Funcion:Funcion, 
        Reunion:Reunion
        
        
    });
    await ps.save();
    res.json({message: 'Persona Registrada'})
}



DocumentoCtrl.getPersona = async (req, res) => {
    const per = await p.findById(req.params.id)
    res.json(per)
}


DocumentoCtrl.actualizarPersona = async (req, res) => {
    const { Nombre, Primer_Apellido, Segundo_Apellido, Funcion, Reunion } = req.body;
        await p.findOneAndUpdate({_id:req.params.id}, {
            
             Nombre, 
             Primer_Apellido, 
             Segundo_Apellido, 
             Funcion, 
             Reunion          
 }
 
 ); 
              
res.json({message: 'Persona Actualizada'})
}


DocumentoCtrl.deletePersona = async (req, res) => {
await p.findByIdAndDelete(req.params.id);   
res.json({message: 'Persona Eliminada'})
}

module.exports = DocumentoCtrl;



