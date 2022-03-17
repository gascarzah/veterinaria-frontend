import React from 'react';

import ClienteForm from '../../components/Cliente/Form';

const initialValues = {
    idCliente: '',
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    tipoDocumento: '',
    numeroDocumento: '',
    sexo: '',
    telefono: '',
    // celular: '',
    // ruc: '',
    // razonSocial: '',
    direccion: '',
    // observacion: '',
    correo: '',
}


const AgregarCliente = () => {
    return (
        <div>
            <h1>Agregar Cliente</h1>
            <ClienteForm dataForm= {initialValues} />
        </div>
    );
};

export default AgregarCliente