import React from 'react';
import AnimalForm from '../../components/Animal/Form';

const initialValues = {
  nombre: '',
  descripcion: ''
}

const AgregarAnimal = () => {
    return (
        <div>
        <h1>Agregar Animal</h1>
        <AnimalForm editar={false} dataForm={initialValues} />
      </div>
    );
};

export default AgregarAnimal; 