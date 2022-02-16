import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ServicioForm from '../../components/Servicio/form';
import { getServicio } from '../../redux/actions/Servicio';

const EditarServicio = () => {

    const state = useSelector((state) => state)
    const {servicioReducer} = state
    const {servicio, loadingGetServicio} = servicioReducer


    const[editInitialValues,setEditInitialValues] = useState(null)
    const {id} = useParams()
  
   

    useEffect(() => {
      dispatch(getServicio(id))
      
    }, [id]);


    useEffect(() => {
        console.log(loadingGetServicio)
        if(loadingGetServicio){
            console.log('entro')
        setEditInitialValues({
              idServicio: servicio.idServicio,
              nombre: servicio.nombre,
              
            })
          }
      }, [servicio])

    const dispatch = useDispatch()

    return (
        <>
            <h1>Editar Servicio</h1>
            
            {editInitialValues &&  (
       <ServicioForm editar={true} servicio={editInitialValues} />
       )}
           
        </>
    );
};

export default EditarServicio;