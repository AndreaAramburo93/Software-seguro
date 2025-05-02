import React, { useEffect, useState } from 'react';
import { getFuncionarios, deleteFuncionario } from '../api/funcionarios';

const FuncionarioList = ({ onEdit }) => {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    const fetchFuncionarios = async () => {
      const data = await getFuncionarios();
      setFuncionarios(data);
    };
    fetchFuncionarios();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este funcionario?')) {
      await deleteFuncionario(id);
      setFuncionarios(funcionarios.filter((func) => func._id !== id));
    }
  };

  return (
    <div>
      <h2>Lista de Funcionarios</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Tipo ID</th>
            <th>Número ID</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map((func) => (
            <tr key={func._id}>
              <td>{func.tipoIdentificacion}</td>
              <td>{func.numeroIdentificacion}</td>
              <td>{func.nombres}</td>
              <td>{func.apellidos}</td>
              <td>
                <button onClick={() => onEdit(func)}>Editar</button>
                <button onClick={() => handleDelete(func._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FuncionarioList;