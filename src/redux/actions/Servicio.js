
import axiosClient from "../../config/axios";



export const getServicios = (page, size) => {
  return async (dispatch) => {
    dispatch({ type: "GET_SERVICIOS_START" });
    try {
      
      const response = await axiosClient.get(`api/servicios/pageable?page=${page}&size=${size}`);
      dispatch({
        type: "GET_SERVICIOS_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_SERVICIOS_FAIL",
        error: true,
        message: "Ocurrio un error al botener la servicio",
      
      });
    } finally {
      dispatch({
        type: "GET_SERVICIOS_FINISH",
      });
    }
  };
};


export const getServicio = (id) => {
  return async (dispatch) => {

    dispatch({ type: "GET_SERVICIO_START" });
    try {
      
      const response = await axiosClient.get(
        `api/servicios/${id}`);
      dispatch({
        type: "GET_SERVICIO_SUCCESS",
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "GET_SERVICIO_FAIL",
        error: true,
        message: "Ocurrio un error al botener la servicio",
       
      });
    } finally {
      dispatch({
        type: "GET_SERVICIO_FINISH",
      });
    }
  };
};

// export const deleteServicio = (idServicio)
export const eliminarServicio = (id, page, size) => {
  return async (dispatch) => {
    dispatch({ type: "DELETE_SERVICIO_START" });
    try {
      
       await axiosClient.delete(`api/servicios/${id}`);
       const response = await axiosClient.get(`api/servicios/pageable?page=${page}&size=${size}`);
      //  const response = arrayList.filter((obj) => obj.idServicio !== id)
      
      
      dispatch({
        type: 'DELETE_SERVICIO_SUCCESS',
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "DELETE_SERVICIO_FAIL",
        
          error: true,
          message: 'Error al eliminar tipo raza'
      
      })
    }finally{
      dispatch({ type: "DELETE_SERVICIO_FINISH" })
    }
  }
}

export const crearServicio = (dataForm, resetForm, navigate) => {
  return async (dispatch) => {

    dispatch({ type: "ADD_SERVICIO_START" });
    try {

      await axiosClient.post('api/servicios', dataForm);

    dispatch({
      type: "ADD_SERVICIO_SUCCESS",
      data: true,
    })

    
    setTimeout(() => {
      dispatch({
        type: 'CLEAR_MESSAGE_NOTIFICATION',
      });
      resetForm();
      // if (errors) {
        navigate('/list-servicio');
      // }
    }, 1500);

    } catch (error) {
      console.log(error)
      dispatch({
        type: "ADD_SERVICIO_FAIL",
        
          error: true,
          message: 'Error al agregar servicio'
      
      })
    }finally{
      dispatch({ type: "ADD_SERVICIO_FINISH" })
    }
  }
}

export const actualizarServicio = (dataForm, resetForm, navigate) => {
  return async (dispatch) => {
    
    dispatch({ type: "EDIT_SERVICIO_START" });
    try {

      await axiosClient.put('api/servicios', dataForm);
      //  const response = await axiosClient.get(`api/servicios/pageable?page=${page}&size=${size}`);

    dispatch({
      type: "EDIT_SERVICIO_SUCCESS",
      data: true
    })

    setTimeout(() => {
      dispatch({
        type: 'CLEAR_MESSAGE_NOTIFICATION',
      });
      resetForm();
      // if (errors) {
        navigate('/list-servicio');
      // }
    }, 1500);

    } catch (error) {
      dispatch({
        type: "EDIT_SERVICIO_FAIL",
  
          error: true,
          message: 'Error al agregar servicio'
   
      })
    }finally{
      dispatch({ type: "EDIT_SERVICIO_FINISH" })
    }
  }
}