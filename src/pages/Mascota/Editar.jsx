import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MascotaForm from "../../components/Mascota/form";
import { getMascota } from "../../redux/actions/Mascota";



const EditarMascota = () => {
  const state = useSelector((state) => state)
  const {mascotaReducer} = state
  const {list} = mascotaReducer
  const {loadingmascota} = list 
  const {id} = useParams()
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    
    
    dispatch(getMascota(id))

  }, [id]);
  
  useEffect(() => {
    if (!loadingmascota && list.data) {
      console.log('entro 12222')
      console.log(list.data)
     setInitialValues(list.data)
    }
  }, [loadingmascota]);

  // console.log(state)
  // console.log('initialValues dentro del editar')
  
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Editar</h1>
     {initialValues &&  (
       <MascotaForm editar={true} mascota={initialValues} />
       )}
    </div>
  );
};

export default EditarMascota;
