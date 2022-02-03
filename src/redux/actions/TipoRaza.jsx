import axiosClient from "../../config/axios";

export const getTiposRaza = (page, size) => {
  return async (dispatch) => {
    dispatch({ type: "GET_TIPO_RAZA_START" });
    try {
      const response = await axiosClient.get(`api/tipo-razas/pageable?page=${page}&size=${size}`);
      dispatch({
        type: "GET_TIPO_RAZA_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_TIPO_RAZA_FAIL",
        error: {
          error: true,
          message: "Ocurrio un error al botener la categoria insumo",
        },
      });
    } finally {
      dispatch({
        type: "GET_TIPO_RAZA_FINISH",
      });
    }
  };
};


export const getTipoRaza = (id) => {
  return async (dispatch) => {
    dispatch({ type: "GET_TIPO_RAZA_START" });
    try {
      const response = await axiosClient.get(
        `api/tipo-razas/${id}`
      );
      dispatch({
        type: "GET_TIPO_RAZA_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_TIPO_RAZA_FAIL",
        error: {
          error: true,
          message: "Ocurrio un error al botener la categoria insumo",
        },
      });
    } finally {
      dispatch({
        type: "GET_TIPO_RAZA_FINISH",
      });
    }
  };
};

// export const deleteTipoRaza = (idTipoRaza)
export const eliminarTipoRaza = (id, page, size) => {
  return async (dispatch) => {

    dispatch({ type: "DELETE_TIPO_RAZA_START" });
    try {
       await axiosClient.delete(`api/tipo-razas/${id}`)
       
      //  const response = arrayList.filter((obj) => obj.idTipoRaza !== id)
      const response = await axiosClient.get(`api/tipo-razas/pageable?page=${page}&size=${size}`);
      
      dispatch({
        type: 'DELETE_TIPO_RAZA_SUCCESS',
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "DELETE_TIPO_RAZA_FAIL",
        error: {
          error: true,
          message: 'Error al eliminar tipo raza'
        }
      })
    }finally{
      dispatch({ type: "DELETE_TIPO_RAZA_FINISH" })
    }
  }
}

export const crearTipoRaza = (dataForm, page, size) => {
  return async (dispatch) => {
    dispatch({ type: "ADD_TIPO_RAZA_START" });
    try {
      // console.log('crearTipoRaza')
      // console.log(dataForm)

       await axiosClient.post('api/tipo-razas', dataForm)
       const response = await axiosClient.get(`api/tipo-razas/pageable?page=${page}&size=${size}`);

    dispatch({
      type: "ADD_TIPO_RAZA_SUCCESS",
      data: response.data,
    })
    } catch (error) {
      dispatch({
        type: "ADD_TIPO_RAZA_FAIL",
        error: {
          error: true,
          message: 'Error al agregar categoria insumo'
        }
      })
    }finally{
      dispatch({ type: "ADD_TIPO_RAZA_FINISH" })
    }
  }
}

export const actualizarTipoRaza = (dataForm, page, size) => {
  return async (dispatch) => {
    dispatch({ type: "EDIT_TIPO_RAZA_START" });
    try {
      // console.log('actualizarTipoRaza')
      // console.log(dataForm)
       await axiosClient.put('api/tipo-razas', dataForm)
       const response = await axiosClient.get(`api/tipo-razas/pageable?page=${page}&size=${size}`);

    dispatch({
      type: "EDIT_TIPO_RAZA_SUCCESS",
      data: response.data
    })
    } catch (error) {
      dispatch({
        type: "EDIT_TIPO_RAZA_FAIL",
        error: {
          error: true,
          message: 'Error al agregar categoria insumo'
        }
      })
    }finally{
      dispatch({ type: "EDIT_TIPO_RAZA_FINISH" })
    }
  }
}