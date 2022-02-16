import React from 'react';
import MascotaForm from '../../components/Mascota/form';

const initialValues = {
  idMascota: null,
  nombre: '',
  peso: '',
  sexo: '',
  idTipoMascota: '',
  idTipoRaza: '',
};

const AgregarMascota = () => {
    return (
        <div>
        <h1>Agregar</h1>
        <MascotaForm editar={false} mascota={initialValues}/>
      </div>
    );
};

export default AgregarMascota;