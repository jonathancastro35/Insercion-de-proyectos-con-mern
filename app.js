
const express = require('express');
const cors = require('cors');
const app = express();

//settiings
app.set('port', process.env.PORT || 8000);

//middlewares
app.use(cors());
app.use(express.json());

//rutas

app.use('/api/nintex', require('./Rutas/Nintex'));
app.use('/api/observacion', require('./Rutas/Observacion'));
app.use('/api/persona', require('./Rutas/Persona'));
app.use('/api/contextualizacion', require('./Rutas/Contextualizacion'));
app.use('/api/preventa', require('./Rutas/Preventa'));
app.use('/api/personaExterna', require('./Rutas/PersonaExterna'));

module.exports = app;

