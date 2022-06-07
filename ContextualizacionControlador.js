
const DocumentoCtrl = {};

const p = require('../Modelos/Contextualizacion');

DocumentoCtrl.getContextualizaciones =  async (req, res) => {
const ps = await p.find();    
res.json(ps)
}

DocumentoCtrl.registrarContextualizacion = async (req, res) => {
    const { Nintexc, Fecha } = req.body;
    const ps = new p({
        Nintexc:Nintexc,  
        Fecha:Fecha, 
        
    });
    await ps.save();
    res.json({message: 'Contextualizacion Registrada'})
}



DocumentoCtrl.getContextualizacion = async (req, res) => {
    const per = await p.findById(req.params.id)
    res.json(per)
}


DocumentoCtrl.actualizarContextualizacion = async (req, res) => {
    const { Nintexc, Fecha } = req.body;
        await p.findOneAndUpdate({_id:req.params.id}, {
            Nintexc,
            Fecha, 
                       
 }
 );
             
res.json({message: 'Contextualizacion Actualizada'})
}


DocumentoCtrl.deleteContextualizacion = async (req, res) => {
await p.findByIdAndDelete(req.params.id);   
res.json({message: 'Contextualizacion Eliminada'})
}

module.exports = DocumentoCtrl;




