
const DocumentoCtrl = {};

const p = require('../Modelos/Nintex');

DocumentoCtrl.getNintexs =  async (req, res) => {
const ps = await p.find();    
res.json(ps)
}

DocumentoCtrl.registrarNintex = async (req, res) => {
    const { Fecha_1er_Ingreso, Linea, Pais, Producto, Cliente, IDPreventa_o_G_Prod, Preventa_o_G_Prod, Alcance, Prioridad,
        Nintex, Estado, Analista_Asignado, Desarrollador, Arquitecto  } = req.body;
    const ps = new p({
        Fecha_1er_Ingreso:Fecha_1er_Ingreso, 
        Linea:Linea, 
        Pais:Pais, 
        Producto:Producto, 
        Cliente:Cliente, 
        IDPreventa_o_G_Prod:IDPreventa_o_G_Prod,
        Preventa_o_G_Prod:Preventa_o_G_Prod, 
        Alcance:Alcance, 
        Prioridad:Prioridad,
        Nintex:Nintex, 
        Estado:Estado, 
        Analista_Asignado:Analista_Asignado, 
        Desarrollador:Desarrollador, 
        Arquitecto:Arquitecto
        
    });
    await ps.save();
    res.json({message: 'Nintex Registrado'})
}



DocumentoCtrl.getNintex = async (req, res) => {
    const per = await p.findById(req.params.id)
    res.json(per)
}


DocumentoCtrl.actualizarNintex = async (req, res) => {
    const { Fecha_1er_Ingreso, Linea, Pais, Producto, Cliente, IDPreventa_o_G_Prod, Preventa_o_G_Prod, Alcance, Prioridad,
        Nintex, Estado, Analista_Asignado, Desarrollador, Arquitecto } = req.body;
        await p.findOneAndUpdate({_id:req.params.id}, {
            Fecha_1er_Ingreso,
             Linea, 
             Pais, 
             Producto, 
             Cliente, 
             IDPreventa_o_G_Prod,
             Preventa_o_G_Prod, 
             Alcance, 
             Prioridad,
             Nintex, 
             Estado, 
             Analista_Asignado, 
             Desarrollador, 
             Arquitecto
            
 }
 
 
 );
 
               
res.json({message: 'Nintex Actualizado'})
}


DocumentoCtrl.deleteNintex = async (req, res) => {
await p.findByIdAndDelete(req.params.id);   
res.json({message: 'Nintex Eliminado'})
}

module.exports = DocumentoCtrl;



