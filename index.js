const express = require('express');
const mongoose = require('mongoose');
const Funcionario = require('./models/Funcionario');

const app = express();
const PORT = 3000;

// Middleware para JSON
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost/funcionariosDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Conectado a MongoDB')).catch(err => console.log(err));

// Ruta para Crear un funcionario
app.post('/funcionarios', async (req, res) => {
  try {
    const funcionario = new Funcionario(req.body);
    await funcionario.save();
    res.status(201).send(funcionario);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Ruta para Leer todos los funcionarios
app.get('/funcionarios', async (req, res) => {
  try {
    const funcionarios = await Funcionario.find();
    res.status(200).send(funcionarios);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Ruta para Actualizar un funcionario
app.put('/funcionarios/:id', async (req, res) => {
  try {
    const funcionario = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(funcionario);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Ruta para Eliminar un funcionario
app.delete('/funcionarios/:id', async (req, res) => {
  try {
    await Funcionario.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});