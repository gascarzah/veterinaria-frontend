import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ServicioForm from "../../components/Servicio/Form";
import { getServicio } from "../../redux/actions/Servicio";

const EditarServicio = () => {
  const state = useSelector((state) => state);
  const { servicioReducer } = state;
  const { servicio, loadingCrud } = servicioReducer;

  const [editInitialValues, setEditInitialValues] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getServicio(id));
  }, []);

  useEffect(() => {
    if (loadingCrud) {
      setEditInitialValues({
        idServicio: servicio.idServicio,
        nombre: servicio.nombre,
        descripcion: servicio.descripcion,
      });
    }
  }, [servicio]);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Editar Servicio</h1>
      {editInitialValues && (
        <ServicioForm
          editar={true}
          dataForm={editInitialValues}
          
        />
      )}
    </div>
  );
};

export default EditarServicio;
