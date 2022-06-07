


const DocumentoCtrl = {};

const p = require('../Modelos/Preventa');

DocumentoCtrl.getPreventas =  async (req, res) => {
const ps = await p.find();    
res.json(ps)
}

DocumentoCtrl.registrarPreventa = async (req, res) => {
    const { Preventa_nombres, IDPreventa_preventa  } = req.body;
    const ps = new p({
        Preventa_nombres:Preventa_nombres, 
        IDPreventa_preventa:IDPreventa_preventa 
    });
    await ps.save();
    res.json({message: 'Preventa Registrado'})
}



DocumentoCtrl.getPreventa = async (req, res) => {
    const per = await p.findById(req.params.id)
    res.json(per)
}

DocumentoCtrl.getPreventa2 = async (req, res) => {
    const per = await p.findById(req.params.IDPreventa_preventa)
    res.json(per)
}


DocumentoCtrl.actualizarPreventa = async (req, res) => {
    const { Preventa_nombres, IDPreventa_preventa  } = req.body;
        await p.findOneAndUpdate({_id:req.params.id}, {
            Preventa_nombres,
            IDPreventa_preventa,           
 }
 );
             
res.json({message: 'Preventa Actualizado'})
}


DocumentoCtrl.deletePreventa = async (req, res) => {
await p.findByIdAndDelete(req.params.id);   
res.json({message: 'Preventa Eliminado'})
}

module.exports = DocumentoCtrl;





