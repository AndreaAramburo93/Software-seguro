import React, { useState } from 'react';
import FuncionarioList from './components/FuncionarioList';
import FuncionarioForm from './components/FuncionarioForm';

const App = () => {
  const [funcionarioToEdit, setFuncionarioToEdit] = useState(null);

  const handleEdit = (funcionario) => {
    setFuncionarioToEdit(funcionario);
  };

  const handleSave = () => {
    setFuncionarioToEdit(null);
  };

  return (
    <div>
      <h1>Gestión de Funcionarios</h1>
      <FuncionarioForm funcionarioToEdit={funcionarioToEdit} onSave={handleSave} />
      <FuncionarioList onEdit={handleEdit} />
    </div>
  );
};

export default App;