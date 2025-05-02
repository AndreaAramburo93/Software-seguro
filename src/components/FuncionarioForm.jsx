import React, { useState, useEffect } from 'react';
import { createFuncionario, updateFuncionario } from '../api/funcionarios';

const FuncionarioForm = ({ funcionarioToEdit, onSave }) => {
  const [funcionario, setFuncionario] = useState({
    tipoIdentificacion: '',
    numeroIdentificacion: '',
    nombres: '',
    apellidos: '',
    estadoCivil: '',
    sexo: '',
    direccion: '',
    telefono: '',
    fechaNacimiento: '',
  });

  useEffect(() => {
    if (funcionarioToEdit) {
      setFuncionario(funcionarioToEdit);
    }
  }, [funcionarioToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFuncionario({ ...funcionario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (funcionario._id) {
      await updateFuncionario(funcionario._id, funcionario);
    } else {
      await createFuncionario(funcionario);
    }
    onSave();
    setFuncionario({
      tipoIdentificacion: '',
      numeroIdentificacion: '',
      nombres: '',
      apellidos: '',
      estadoCivil: '',
      sexo: '',
      direccion: '',
      telefono: '',
      fechaNacimiento: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{funcionario._id ? 'Editar Funcionario' : 'Agregar Funcionario'}</h2>
      <input
        type="text"
        name="tipoIdentificacion"
        placeholder="Tipo Identificación"
        value={funcionario.tipoIdentificacion}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="numeroIdentificacion"
        placeholder="Número Identificación"
        value={funcionario.numeroIdentificacion}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="nombres"
        placeholder="Nombres"
        value={funcionario.nombres}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="apellidos"
        placeholder="Apellidos"
        value={funcionario.apellidos}
        onChange={handleChange}
        required
      />
      <button type="submit">{funcionario._id ? 'Guardar Cambios' : 'Agregar'}</button>
    </form>
  );
};

export default FuncionarioForm;