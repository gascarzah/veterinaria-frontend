import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MascotaForm from "../../components/Mascota/form";
import { getMascota } from "../../redux/actions/Mascota";



const EditarMascota = () => {
  const state = useSelector((state) => state)
  const {mascotaReducer} = state
  const {mascota, loadingGetMascota} = mascotaReducer
const[editInitialValues,setEditInitialValues] = useState(null)
  const {id} = useParams()
  
  useEffect(() => {
    dispatch(getMascota(id))
    
  }, [id]);
  

  useEffect(() => {
    if(loadingGetMascota){
    setEditInitialValues({
          idMascota: mascotaReducer.mascota.idMascota,
          nombre: mascotaReducer.mascota.nombre,
          peso: mascotaReducer.mascota.peso,
          sexo: mascotaReducer.mascota.sexo,
          idTipoMascota: mascotaReducer.mascota.tipoRaza.tipoMascota.idTipoMascota,
          idTipoRaza: mascotaReducer.mascota.tipoRaza.idTipoRaza,
          // tipoMascota: mascotaReducer.mascota.tipoRaza.tipoMascota
        })
      }
  }, [mascotaReducer.mascota])
  

 console.log(editInitialValues)
  
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Editar</h1>
      {/* <MascotaForm editar={true}  /> */}
     {editInitialValues &&  (
       <MascotaForm editar={true} mascota={editInitialValues} />
       )}
    </div>
  );
};

export default EditarMascota;
