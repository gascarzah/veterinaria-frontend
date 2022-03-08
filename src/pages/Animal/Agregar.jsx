import React from 'react';
import MaestraForm from '../../components/Maestra/Form';

const initialValues = {
  nombre: '',
  descripcion: ''
}
const mantenimiento = {
  "codigo": 2,
  "nombre": 'animal'
}
const AgregarAnimal = () => {
    return (
        <div>
        <h1>Agregar Animal</h1>
        <MaestraForm editar={false} dataForm={initialValues} mantenimiento={mantenimiento}/>
      </div>
    );
};

export default AgregarAnimal; 