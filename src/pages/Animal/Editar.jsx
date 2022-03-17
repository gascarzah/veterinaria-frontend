import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AnimalForm from "../../components/Animal/Form";
import { getAnimal } from "../../redux/actions/Animal";


const EditarAnimal = () => {
  const state = useSelector((state) => state);
  const { animalReducer } = state;
  const { animal, loadingCrud } = animalReducer;

  const [editInitialValues, setEditInitialValues] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getAnimal(id));
  }, []);

  useEffect(() => {
    if (loadingCrud) {
      setEditInitialValues({
        idAnimal: animal.idAnimal,
        nombre: animal.nombre,
        descripcion: animal.descripcion,
      });
    }
  }, [animal]);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Editar Animal</h1>
      {editInitialValues && (
        <AnimalForm
          editar={true}
          dataForm={editInitialValues}
        />
      )}
    </div>
  );
};

export default EditarAnimal;
