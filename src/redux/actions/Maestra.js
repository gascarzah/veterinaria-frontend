
import axiosClient from "../../config/axios";

export const getMaestras = (page, size) => {
  return async (dispatch) => {
    dispatch({ type: "GET_MAESTRAS_START" });
    try {
      const response = await axiosClient.get(`api/maestras/pageable?page=${page}&size=${size}`);
      dispatch({
        type: "GET_MAESTRAS_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_MAESTRAS_FAIL",
        error: true,
        message: "Ocurrio un error al botener la maestra",
      
      });
    } finally {
      dispatch({
        type: "GET_MAESTRAS_FINISH",
      });
    }
  };
};


export const getMaestra = (id) => {
  return async (dispatch) => {

    dispatch({ type: "GET_MAESTRA_START" });
    try {
      const response = await axiosClient.get(
        `api/maestras/${id}`
      );
      dispatch({
        type: "GET_MAESTRA_SUCCESS",
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "GET_MAESTRA_FAIL",
        error: true,
        message: "Ocurrio un error al botener la maestra",
       
      });
    } finally {
      dispatch({
        type: "GET_MAESTRA_FINISH",
      });
    }
  };
};

// export const deleteMaestra = (idMaestra)
export const eliminarMaestra = (id, page, size) => {
  return async (dispatch) => {
    dispatch({ type: "DELETE_MAESTRA_START" });
    try {
       await axiosClient.delete(`api/maestras/${id}`)
       const response = await axiosClient.get(`api/maestras/pageable?page=${page}&size=${size}`);
      //  const response = arrayList.filter((obj) => obj.idMaestra !== id)
      
      
      dispatch({
        type: 'DELETE_MAESTRA_SUCCESS',
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "DELETE_MAESTRA_FAIL",
        
          error: true,
          message: 'Error al eliminar tipo raza'
      
      })
    }finally{
      dispatch({ type: "DELETE_MAESTRA_FINISH" })
    }
  }
}

export const crearMaestra = (dataForm) => {
  return async (dispatch) => {
    
    dispatch({ type: "ADD_MAESTRA_START" });
    try {


      await axiosClient.post('api/maestras', dataForm)
    dispatch({
      type: "ADD_MAESTRA_SUCCESS",
      data: true,
    })

    
    // setTimeout(() => {
      // dispatch({
      //   type: 'CLEAR_MESSAGE_NOTIFICATION',
      // });
      // resetForm();
      // if (errors) {
        // navigate('/list-maestras');
      // }
    // }, 1500);

    } catch (error) {
      console.log(error)
      dispatch({
        type: "ADD_MAESTRA_FAIL",
        
          error: true,
          message: 'Error al agregar maestra'
      
      })
    }finally{
      dispatch({ type: "ADD_MAESTRA_FINISH" })
    }
  }
}

export const actualizarMaestra = (dataForm, page, size) => {
  return async (dispatch) => {
    // console.log('5')
    dispatch({ type: "EDIT_MAESTRA_START" });
    try {
      // console.log('actualizarMaestra')
      // console.log(dataForm)
      await axiosClient.put('api/maestras', dataForm)
      //  const response = await axiosClient.get(`api/maestras/pageable?page=${page}&size=${size}`);

    dispatch({
      type: "EDIT_MAESTRA_SUCCESS",
      data: true
    })
    } catch (error) {
      dispatch({
        type: "EDIT_MAESTRA_FAIL",
  
          error: true,
          message: 'Error al agregar maestra'
   
      })
    }finally{
      dispatch({ type: "EDIT_MAESTRA_FINISH" })
    }
  }
}