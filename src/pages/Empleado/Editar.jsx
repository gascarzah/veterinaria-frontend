import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PersonaForm from "../../components/Persona/Form";
import { getPersona } from "../../redux/actions/Persona";

const mantenimiento = {
  codigo: 2,
  nombre: "Empleado",
};

const EditarEmpleado = () => {
  const state = useSelector((state) => state);
  const { personaReducer } = state;
  const { persona, loadingCrud } = personaReducer;

  const [editInitialValues, setEditInitialValues] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPersona(id));
  }, [id]);

  useEffect(() => {
    if (loadingCrud) {
      setEditInitialValues({
        idPersona: persona.idPersona,
        nombre: persona.nombre,
        descripcion: persona.descripcion,
      });
    }
  }, [persona]);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Editar Empleado</h1>
      {editInitialValues && (
        <PersonaForm
          editar={true}
          dataForm={editInitialValues}
          mantenimiento={mantenimiento}
        />
      )}
    </div>
  );
};

export default EditarEmpleado;
