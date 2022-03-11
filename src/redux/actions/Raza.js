
import axiosClient from "../../config/axios";

export const getRazas = ( page, size) => {
  return async (dispatch) => {
    dispatch({ type: "GET_RAZAS_START" });
    try {
    
      const response = await axiosClient.get(`api/razas/pageable?page=${page}&size=${size}`);
      dispatch({
        type: "GET_RAZAS_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_RAZAS_FAIL",
        error: true,
        message: "Ocurrio un error al botener la raza",
      
      });
    } finally {
      dispatch({
        type: "GET_RAZAS_FINISH",
      });
    }
  };
};


export const getRaza = (id) => {
  return async (dispatch) => {

    dispatch({ type: "GET_RAZA_START" });
    try {
      
      const response = await axiosClient.get(`api/razas/${id}`);
      dispatch({
        type: "GET_RAZA_SUCCESS",
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "GET_RAZA_FAIL",
        error: true,
        message: "Ocurrio un error al botener la raza",
       
      });
    } finally {
      dispatch({
        type: "GET_RAZA_FINISH",
      });
    }
  };
};

// export const deleteRaza = (idRaza)
export const eliminarRaza = (id, page, size) => {
  return async (dispatch) => {
    dispatch({ type: "DELETE_RAZA_START" });
    try {
      
       await axiosClient.delete(`api/razas/${id}`);
       const response = await axiosClient.get(`api/razas/pageable?page=${page}&size=${size}`);
      //  const response = arrayList.filter((obj) => obj.idRaza !== id)
      
      
      dispatch({
        type: 'DELETE_RAZA_SUCCESS',
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "DELETE_RAZA_FAIL",
        
          error: true,
          message: 'Error al eliminar tipo raza'
      
      })
    }finally{
      dispatch({ type: "DELETE_RAZA_FINISH" })
    }
  }
}

export const crearRaza = (dataForm, resetForm, navigate) => {
  return async (dispatch) => {
    
    dispatch({ type: "ADD_RAZA_START" });
    try {
     
      await axiosClient.post('api/razas', dataForm);
    dispatch({
      type: "ADD_RAZA_SUCCESS",
      data: true,
    })

    
    setTimeout(() => {
      dispatch({
        type: 'CLEAR_MESSAGE_NOTIFICATION',
      });
      resetForm();
      // if (errors) {
        navigate('/list-raza');
      // }
    }, 1500);

    } catch (error) {
      console.log(error)
      dispatch({
        type: "ADD_RAZA_FAIL",
        
          error: true,
          message: 'Error al agregar raza'
      
      })
    }finally{
      dispatch({ type: "ADD_RAZA_FINISH" })
    }
  }
}

export const actualizarRaza = (dataForm, resetForm, navigate) => {
  return async (dispatch) => {
    
    dispatch({ type: "EDIT_RAZA_START" });
    try {
     
      await axiosClient.put('api/razas', dataForm);
     
    dispatch({
      type: "EDIT_RAZA_SUCCESS",
      data: true
    })


    setTimeout(() => {
      dispatch({
        type: 'CLEAR_MESSAGE_NOTIFICATION',
      });
      resetForm();
      // if (errors) {
        navigate('/list-raza');
      // }
    }, 1500);

    } catch (error) {
      dispatch({
        type: "EDIT_RAZA_FAIL",
  
          error: true,
          message: 'Error al agregar raza'
   
      })
    }finally{
      dispatch({ type: "EDIT_RAZA_FINISH" })
    }
  }
}

export const getRazaPorAnimal = (idAnimal) => {
  return async (dispatch) => {
    dispatch({ type: "GET_RAZA_POR_ANIMAL_START" });
    try {
      
      const response = await axiosClient.get(`api/razas/getByIdAnimal/${idAnimal}`);
      
      dispatch({
        type: "GET_RAZA_POR_ANIMAL_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_RAZA_POR_ANIMAL_FAIL",
        
          error: true,
          message: "Ocurrio un error al botener la lista de raza por animal",
        
      });
    } finally {
      dispatch({
        type: "GET_RAZA_POR_ANIMAL_FINISH",
      });
    }
  };
};