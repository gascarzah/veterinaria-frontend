import React from 'react';
import ListaPersona from '../../components/Persona/Tabla';

const entidad = {
    stakeholder: 1,
    negocio: 1,
    sistema: 1
  }

  const mantenimiento = {
    "codigo": 1,
    "nombre": 'empleado'
  }

const Empleado = () => {
    return (
        <>
             <h1>Mantenimiento Empleado</h1>
            <ListaPersona entidad={entidad} mantenimiento={mantenimiento} />
        </>
    );
};

export default Empleado;