import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ClienteForm from "../../components/Cliente/Form";
import { getCliente } from "../../redux/actions/Cliente";



const EditarCliente = () => {
  const state = useSelector((state) => state);
  const { clienteReducer } = state;
  const { cliente, loadingCrud } = clienteReducer;

  const [editInitialValues, setEditInitialValues] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCliente(id));
  }, []);

  useEffect(() => {
    if (loadingCrud) {
      setEditInitialValues({
        idCliente: cliente.idCliente,
        nombre: cliente.nombre,
        descripcion: cliente.descripcion,
      });
    }
  }, [cliente]);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Editar Cliente</h1>
      {editInitialValues && (
        <ClienteForm
          editar={true}
          dataForm={editInitialValues}
        />
      )}
    </div>
  );
};

export default EditarCliente;
