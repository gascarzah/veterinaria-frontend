import React from 'react';
import ServicioForm from '../../components/Servicio/form';

const initialValues = {
    nombre: ''
}

const AgregarServicio = () => {
    return (
        <>
        <h1>Agregar Servicio</h1>
            <ServicioForm editar={false} servicio={initialValues}/>
        </>
    );
};

export default AgregarServicio;