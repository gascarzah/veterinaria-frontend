import React from 'react';

import PersonaForm from '../../components/Persona/Form';

const initialValues = {
    idPersona: '',
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

const mantenimiento = {
    "codigo": 1,
    "nombre": 'empleado'
  }
  const entidad = {
    stakeholder: 1,
    negocio: 1,
    sistema: 1
  }
const Agregar = () => {
    return (
        <div>
            <h1>Agregar Empleado</h1>
            <PersonaForm dataForm= {initialValues} entidad={entidad} mantenimiento={mantenimiento}/>
        </div>
    );
};

export default Agregar