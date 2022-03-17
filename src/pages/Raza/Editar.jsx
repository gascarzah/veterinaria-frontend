import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RazaForm from "../../components/Raza/Form";
import { getRaza } from "../../redux/actions/Raza";

const EditarRaza = () => {
  const state = useSelector((state) => state);
  const { razaReducer } = state;
  const { raza, loadingCrud } = razaReducer;

  const [editInitialValues, setEditInitialValues] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getRaza(id));
  }, []);

  useEffect(() => {
    if (loadingCrud) {
      setEditInitialValues({
        idRaza: raza.idRaza,
        nombre: raza.nombre,
        descripcion: raza.descripcion,
        idAnimal: raza.animal.idAnimal,
      });
    }
  }, [raza]);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Editar Raza</h1>
      {editInitialValues && (
        <RazaForm
          editar={true}
          dataForm={editInitialValues}
          
        />
      )}
    </div>
  );
};

export default EditarRaza;
