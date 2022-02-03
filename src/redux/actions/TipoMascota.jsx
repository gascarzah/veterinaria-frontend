import axiosClient from "../../config/axios";

export const getTodoTiposMascota = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_TIPO_MASCOTA_START" });
    try {
      const response = await axiosClient.get(`api/tipo-mascotas`);

      dispatch({
        type: "GET_TIPO_MASCOTA_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_TIPO_MASCOTA_FAIL",
        error: {
          error: true,
          message: "Ocurrio un error al botener la categoria insumo",
        },
      });
    } finally {
      dispatch({
        type: "GET_TIPO_MASCOTA_FINISH",
      });
    }
  };
};


export const getTiposMascota = (page, size) => {
  return async (dispatch) => {
    dispatch({ type: "GET_TIPO_MASCOTA_START" });
    try {
      const response = await axiosClient.get(`api/tipo-mascotas/pageable?page=${page}&size=${size}`);
      dispatch({
        type: "GET_TIPO_MASCOTA_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_TIPO_MASCOTA_FAIL",
        error: {
          error: true,
          message: "Ocurrio un error al botener la categoria insumo",
        },
      });
    } finally {
      dispatch({
        type: "GET_TIPO_MASCOTA_FINISH",
      });
    }
  };
};


export const getTipoMascota = (id) => {
  return async (dispatch) => {
    dispatch({ type: "GET_TIPO_MASCOTA_START" });
    try {
      const response = await axiosClient.get(
        `api/tipo-mascotas/${id}`
      );
      dispatch({
        type: "GET_TIPO_MASCOTA_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_TIPO_MASCOTA_FAIL",
        error: {
          error: true,
          message: "Ocurrio un error al obtener el tipo mascota",
        },
      });
    } finally {
      dispatch({
        type: "GET_TIPO_MASCOTA_FINISH",
      });
    }
  };
};

// export const deleteTipoMascota = (idTipoMascota)
export const eliminarTipoMascota = (id, page, size) => {
  return async (dispatch) => {

    dispatch({ type: "DELETE_TIPO_MASCOTA_START" });
    try {
       await axiosClient.delete(`api/tipo-mascotas/${id}`)
       
      //  const response = arrayList.filter((obj) => obj.idTipoMascota !== id)
      const response = await axiosClient.get(`api/tipo-mascotas/pageable?page=${page}&size=${size}`);
      
      dispatch({
        type: 'DELETE_TIPO_MASCOTA_SUCCESS',
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "DELETE_TIPO_MASCOTA_FAIL",
        error: {
          error: true,
          message: 'Error al eliminar tipo raza'
        }
      })
    }finally{
      dispatch({ type: "DELETE_TIPO_MASCOTA_FINISH" })
    }
  }
}

export const crearTipoMascota = (dataForm, page, size) => {
  return async (dispatch) => {
    dispatch({ type: "ADD_TIPO_MASCOTA_START" });
    try {
      // console.log('crearTipoMascota')
      // console.log(dataForm)
       await axiosClient.post('api/tipo-mascotas', dataForm)
       const response = await axiosClient.get(`api/tipo-mascotas/pageable?page=${page}&size=${size}`);

    dispatch({
      type: "ADD_TIPO_MASCOTA_SUCCESS",
      data: response.data,
    })
    } catch (error) {
      dispatch({
        type: "ADD_TIPO_MASCOTA_FAIL",
        error: {
          error: true,
          message: 'Error al agregar categoria insumo'
        }
      })
    }finally{
      dispatch({ type: "ADD_TIPO_MASCOTA_FINISH" })
    }
  }
}

export const actualizarTipoMascota = (dataForm, page, size) => {
  return async (dispatch) => {
    dispatch({ type: "EDIT_TIPO_MASCOTA_START" });
    try {
    
       await axiosClient.put('api/tipo-mascotas', dataForm)
       const response = await axiosClient.get(`api/tipo-mascotas/pageable?page=${page}&size=${size}`);

    dispatch({
      type: "EDIT_TIPO_MASCOTA_SUCCESS",
      data: response.data
    })
    } catch (error) {
      dispatch({
        type: "EDIT_TIPO_MASCOTA_FAIL",
        error: {
          error: true,
          message: 'Error al agregar tipo mascota'
        }
      })
    }finally{
      dispatch({ type: "EDIT_TIPO_MASCOTA_FINISH" })
    }
  }
}