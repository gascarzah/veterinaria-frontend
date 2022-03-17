import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MascotaForm from "../../components/Mascota/Form";
import { getMascota } from "../../redux/actions/Mascota";

const EditarMascota = () => {
  const state = useSelector((state) => state);
  const { mascotaReducer } = state;
  const { mascota, loadingCrud } = mascotaReducer;

  const [editInitialValues, setEditInitialValues] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMascota(id));
  }, []);

  useEffect(() => {
    if (loadingCrud) {
      setEditInitialValues({
        idMascota: mascota.idMascota,
        nombre: mascota.nombre,
        peso: mascota.peso,
        sexo: mascota.sexo,
        idAnimal: mascota.raza.animal.idAnimal,
        idRaza: mascota.raza.idRaza,
        idCliente: mascota.cliente.idCliente
      });
    }
  }, [mascota]);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Editar Mascota</h1>
      {editInitialValues && (
        <MascotaForm
          editar={true}
          dataForm={editInitialValues}
          
        />
      )}
    </div>
  );
};

export default EditarMascota;
