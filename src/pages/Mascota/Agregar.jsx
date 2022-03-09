import React from 'react';

import MascotaForm from '../../components/Mascota/Form';

const initialValues = {
    idMascota: '',
    nombre: '',
    peso: '',
    sexo: '',
    idAnimal: '',
    idRaza: '',
    idCliente: ''
}


const AgregarMascota = () => {
    return (
        <div>
            <h1>Agregar Mascota</h1>
            <MascotaForm dataForm= {initialValues} />
        </div>
    );
};

export default AgregarMascota