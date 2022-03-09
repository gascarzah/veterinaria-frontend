import React from 'react';

import RazaForm from '../../components/Raza/Form';

const initialValues = {
    idRaza: '',
    nombre: '',
    descripcion: '',
    idAnimal: '',
}


const AgregarRaza = () => {
    return (
        <div>
            <h1>Agregar Raza</h1>
            <RazaForm dataForm= {initialValues} />
        </div>
    );
};

export default AgregarRaza