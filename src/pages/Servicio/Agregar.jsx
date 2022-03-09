import React from 'react';

import ServicioForm from '../../components/Servicio/Form';

const initialValues = {
    idServicio: '',
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    tipoDocumento: '',
    numeroDocumento: '',
    sexo: '',
    telefono: '',
    celular: '',
    ruc: '',
    razonSocial: '',
    direccion: '',
    observacion: '',
    correo: '',
}


const AgregarServicio = () => {
    return (
        <div>
            <h1>Agregar Servicio</h1>
            <ServicioForm dataForm= {initialValues} />
        </div>
    );
};

export default AgregarServicio