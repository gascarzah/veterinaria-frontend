import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EmpleadoForm from "../../components/Empleado/Form";
import { getEmpleado } from "../../redux/actions/Empleado";

const EditarEmpleado = () => {
  const state = useSelector((state) => state);
  const { empleadoReducer } = state;
  const { empleado, loadingCrud } = empleadoReducer;

  const [editInitialValues, setEditInitialValues] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getEmpleado(id));
  }, [id]);

  useEffect(() => {
    if (loadingCrud) {
      setEditInitialValues({
        idEmpleado: empleado.idEmpleado,
        nombre: empleado.nombre,
        descripcion: empleado.descripcion,
      });
    }
  }, [empleado]);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Editar Empleado</h1>
      {editInitialValues && (
        <EmpleadoForm
          editar={true}
          dataForm={editInitialValues}
          
        />
      )}
    </div>
  );
};

export default EditarEmpleado;
