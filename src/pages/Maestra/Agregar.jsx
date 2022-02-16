import React from 'react';
import MaestraForm from '../../components/Maestra/Form';

const initialValues = {
    
    nombre: '',
    descripcion: ''
  };

const AgregarMaestra = () => {
    return (
        <div>
            <h1>Agregar Raza</h1>
            <MaestraForm dataForm={initialValues} />
        </div>
    );
};

export default AgregarMaestra;