import React from 'react';

import EmpleadoForm from '../../components/Empleado/Form';

const initialValues = {
    idEmpleado: '',
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


const AgregarEmpleado = () => {
    return (
        <div>
            <h1>Agregar Empleado</h1>
            <EmpleadoForm dataForm= {initialValues} />
        </div>
    );
};

export default AgregarEmpleado