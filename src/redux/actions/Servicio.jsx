import axiosClient from "../../config/axios";

export const getTodoServicios = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_SERVICIOS_START" });
    try {
      const response = await axiosClient.get(`api/servicios`);

      dispatch({
        type: "GET_SERVICIOS_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_SERVICIOS_FAIL",
        
          error: true,
          message: "Ocurrio un error al obtener el servicio",
        
      });
    } finally {
      dispatch({
        type: "GET_SERVICIO_FINISH",
      });
    }
  };
};


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
          message: "Ocurrio un error al obtener el servicio",
        
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
        `api/servicios/${id}`
      );
      dispatch({
        type: "GET_SERVICIO_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_SERVICIO_FAIL",
        error: {
          error: true,
          message: "Ocurrio un error al obtener el tipo mascota",
        },
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
       await axiosClient.delete(`api/servicios/${id}`)
       
      
      const response = await axiosClient.get(`api/servicios/pageable?page=${page}&size=${size}`);
      
      dispatch({
        type: 'DELETE_SERVICIO_SUCCESS',
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "DELETE_SERVICIO_FAIL",
        error: {
          error: true,
          message: 'Error al eliminarservicio'
        }
      })
    }finally{
      dispatch({ type: "DELETE_SERVICIO_FINISH" })
    }
  }
}

export const crearServicio = (dataForm, page, size) => {
  return async (dispatch) => {
    dispatch({ type: "ADD_SERVICIO_START" });
    try {
      // console.log('crearServicio')
      // console.log(dataForm)
       await axiosClient.post('api/servicios', dataForm)
       const response = await axiosClient.get(`api/servicios/pageable?page=${page}&size=${size}`);

    dispatch({
      type: "ADD_SERVICIO_SUCCESS",
      data: response.data,
    })
    } catch (error) {
      dispatch({
        type: "ADD_SERVICIO_FAIL",
        error: {
          error: true,
          message: 'Error al agregar categoria insumo'
        }
      })
    }finally{
      dispatch({ type: "ADD_SERVICIO_FINISH" })
    }
  }
}

export const actualizarServicio = (dataForm, page, size) => {
  return async (dispatch) => {
    dispatch({ type: "EDIT_SERVICIO_START" });
    try {
    
       await axiosClient.put('api/servicios', dataForm)
       const response = await axiosClient.get(`api/servicios/pageable?page=${page}&size=${size}`);

    dispatch({
      type: "EDIT_SERVICIO_SUCCESS",
      data: response.data
    })
    } catch (error) {
      dispatch({
        type: "EDIT_SERVICIO_FAIL",
        error: {
          error: true,
          message: 'Error al agregar tipo mascota'
        }
      })
    }finally{
      dispatch({ type: "EDIT_SERVICIO_FINISH" })
    }
  }
}