import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MaestraForm from "../../components/Maestra/Form";
import { getMaestra } from "../../redux/actions/Maestra";

const mantenimiento = {
  codigo: 2,
  nombre: "animal",
};

const EditarAnimal = () => {
  const state = useSelector((state) => state);
  const { maestraReducer } = state;
  const { maestra, loadingCrud } = maestraReducer;

  const [editInitialValues, setEditInitialValues] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMaestra(id));
  }, [id]);

  useEffect(() => {
    if (loadingCrud) {
      setEditInitialValues({
        idMaestra: maestra.idMaestra,
        nombre: maestra.nombre,
        descripcion: maestra.descripcion,
      });
    }
  }, [maestra]);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Editar Animal</h1>
      {editInitialValues && (
        <MaestraForm
          editar={true}
          dataForm={editInitialValues}
          mantenimiento={mantenimiento}
        />
      )}
    </div>
  );
};

export default EditarAnimal;
