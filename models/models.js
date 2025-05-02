const mongoose = require('mongoose');

// Esquema para grupo familiar
const GrupoFamiliarSchema = new mongoose.Schema({
    miembroNombre: { type: String, required: true },
    miembroApellido: { type: String, required: true },
    rol: { type: String, required: true },
    fechaNacimiento: { type: Date },
    parentesco: { type: String }
});

// Esquema para funcionarios
const FuncionarioSchema = new mongoose.Schema({
    tipoIdentificacion: { type: String, required: true },
    numeroIdentificacion: { type: String, required: true, unique: true },
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    estadoCivil: { type: String },
    sexo: { type: String },
    direccion: { type: String },
    telefono: { type: String },
    fechaNacimiento: { type: Date },
    grupoFamiliar: [GrupoFamiliarSchema] // Relación embebida
});

const Funcionario = mongoose.model('Funcionario', FuncionarioSchema);
module.exports = Funcionario;