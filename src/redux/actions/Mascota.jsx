import axiosClient from "../../config/axios";

export const getMascotas = (page, size) => {
  return async (dispatch) => {
    dispatch({ type: "GET_MASCOTA_START" });
    try {
      const response = await axiosClient.get(`api/mascotas/pageable?page=${page}&size=${size}`);
      dispatch({
        type: "GET_MASCOTA_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_MASCOTA_FAIL",
        error: {
          error: true,
          message: "Ocurrio un error al botener la mascota",
        },
      });
    } finally {
      dispatch({
        type: "GET_MASCOTA_FINISH",
      });
    }
  };
};


export const getMascota = (id) => {
  return async (dispatch) => {
    dispatch({ type: "GET_MASCOTA_START" });
    try {
      const response = await axiosClient.get(
        `api/mascotas/${id}`
      );
      console.log(response)
      dispatch({
        type: "GET_MASCOTA_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_MASCOTA_FAIL",
        error: {
          error: true,
          message: "Ocurrio un error al botener la mascota",
        },
      });
    } finally {
      dispatch({
        type: "GET_MASCOTA_FINISH",
      });
    }
  };
};

// export const deleteMascota = (idMascota)
export const eliminarMascota = (id, page, size) => {
  return async (dispatch) => {

    dispatch({ type: "DELETE_MASCOTA_START" });
    try {
       await axiosClient.delete(`api/mascotas/${id}`)
       
      //  const response = arrayList.filter((obj) => obj.idMascota !== id)
      const response = await axiosClient.get(`api/mascotas/pageable?page=${page}&size=${size}`);
      
      dispatch({
        type: 'DELETE_MASCOTA_SUCCESS',
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "DELETE_MASCOTA_FAIL",
        error: {
          error: true,
          message: 'Error al eliminar tipo raza'
        }
      })
    }finally{
      dispatch({ type: "DELETE_MASCOTA_FINISH" })
    }
  }
}

export const crearMascota = (dataForm) => {
  return async (dispatch) => {
    dispatch({ type: "ADD_MASCOTA_START" });
    try {
      console.log('crearMascota')
      console.log(dataForm)

      const response = await axiosClient.post('api/mascotas', dataForm)
      //  const response = await axiosClient.get(`api/mascotas/pageable?page=${page}&size=${size}`);

    dispatch({
      type: "ADD_MASCOTA_SUCCESS",
      data: response.data,
    })
    } catch (error) {
      dispatch({
        type: "ADD_MASCOTA_FAIL",
        error: {
          error: true,
          message: 'Error al agregar mascota'
        }
      })
    }finally{
      dispatch({ type: "ADD_MASCOTA_FINISH" })
    }
  }
}

export const actualizarMascota = (dataForm, page, size) => {
  return async (dispatch) => {
    dispatch({ type: "EDIT_MASCOTA_START" });
    try {
      // console.log('actualizarMascota')
      // console.log(dataForm)
       await axiosClient.put('api/mascotas', dataForm)
       const response = await axiosClient.get(`api/mascotas/pageable?page=${page}&size=${size}`);

    dispatch({
      type: "EDIT_MASCOTA_SUCCESS",
      data: response.data
    })
    } catch (error) {
      dispatch({
        type: "EDIT_MASCOTA_FAIL",
        error: {
          error: true,
          message: 'Error al agregar mascota'
        }
      })
    }finally{
      dispatch({ type: "EDIT_MASCOTA_FINISH" })
    }
  }
}