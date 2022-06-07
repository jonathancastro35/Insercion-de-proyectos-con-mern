
  const DocumentoCtrl = {};

  const p = require('../Modelos/PersonaExterna');
  
  DocumentoCtrl.getPersonasExternas =  async (req, res) => {
  const ps = await p.find();    
  res.json(ps)
  }
  
  DocumentoCtrl.registrarPersonasExternas = async (req, res) => {
      const { IDPersonaExterna, Nombres, Primer_Apellido, Segundo_Apellido, Email, Contraseña  } = req.body;
      const ps = new p({
        IDPersonaExterna:IDPersonaExterna, 
        Nombres:Nombres,
        Primer_Apellido:Primer_Apellido,
        Segundo_Apellido:Segundo_Apellido,
        Email: Email,
        Contraseña:Contraseña, 
      });
      await ps.save();
      res.json({message: 'Persona Externa Registrada'})
  }
  
  
  
  DocumentoCtrl.getPersonaExterna = async (req, res) => {
      const per = await p.findById(req.params.id)
      res.json(per)
  }

  
  DocumentoCtrl.getPersonaExterna2 = async (req, res) => {
    const per = await p.findById(req.params.IDPersonaExterna)
    res.json(per)
}

  

  DocumentoCtrl.actualizarPersonaExterna = async (req, res) => {
      const { IDPersonaExterna, Nombres, Primer_Apellido, Segundo_Apellido, Email, Contraseña  } = req.body;
          await p.findOneAndUpdate({_id:req.params.id}, {
              IDPersonaExterna,
              Nombres,
              Primer_Apellido,
              Segundo_Apellido,
              Email,   
              Contraseña
                      
   }
   );
               
  res.json({message: 'Persona Externa Actualizada'})
  }
  
  
  DocumentoCtrl.deletePersonaExterna = async (req, res) => {
  await p.findByIdAndDelete(req.params.id );  
  res.json({message: 'Persona Externa Eliminada'})
  }
  
  module.exports = DocumentoCtrl;
  
  
  

  