
const DocumentoCtrl = {};

const p = require('../Modelos/Observaciones_Estimacione');

DocumentoCtrl.getObservaciones =  async (req, res) => {
const ps = await p.find();    
res.json(ps)
}

DocumentoCtrl.registrarObservacion = async (req, res) => {
    const { Nintexob, Fecha, Observacion   } = req.body;
    const ps = new p({
        Nintexob:Nintexob,
        Fecha:Fecha, 
        Observacion:Observacion, 
        
    });
    await ps.save();
    res.json({message: 'Observacion Registrada'})
}



DocumentoCtrl.getObservacion = async (req, res) => {
    const per = await p.findById(req.params.id)
    res.json(per)
}


DocumentoCtrl.actualizarObservacion = async (req, res) => {
    const { Nintexob, Fecha, Observacion } = req.body;
        await p.findOneAndUpdate({_id:req.params.id}, {
            Nintexob,
            Fecha, 
            Observacion, 
            
 });
               
res.json({message: 'Observacion Actualizada'})
}


DocumentoCtrl.deleteObservacion = async (req, res) => {
await p.findByIdAndDelete(req.params.id);   
res.json({message: 'Observacion Eliminada'})
}

module.exports = DocumentoCtrl;


 
 
 
 