
import axiosClient from "../../config/axios";



export const getVentas = (page, size) => {
  return async (dispatch) => {
    dispatch({ type: "GET_VENTAS_START" });
    try {
     
      const response = await axiosClient.get(`api/ventas/pageable?page=${page}&size=${size}`);
      dispatch({
        type: "GET_VENTAS_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_VENTAS_FAIL",
        error: true,
        message: "Ocurrio un error al obtener la venta",
      
      });
    } finally {
      dispatch({
        type: "GET_VENTAS_FINISH",
      });
    }
  };
};


export const getVenta = (id) => {
  return async (dispatch) => {

    dispatch({ type: "GET_VENTA_START" });
    try {
      
      const response = await axiosClient.get(
        `api/ventas/${id}`);
      dispatch({
        type: "GET_VENTA_SUCCESS",
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "GET_VENTA_FAIL",
        error: true,
        message: "Ocurrio un error al botener la venta",
       
      });
    } finally {
      dispatch({
        type: "GET_VENTA_FINISH",
      });
    }
  };
};

// export const deleteVenta = (idVenta)
export const eliminarVenta = (id, page, size) => {
  return async (dispatch) => {
    dispatch({ type: "DELETE_VENTA_START" });
    try {
     
       await axiosClient.delete(`api/ventas/${id}`);
       const response = await axiosClient.get(`api/ventas/pageable?page=${page}&size=${size}`);
      //  const response = arrayList.filter((obj) => obj.idVenta !== id)
      
      
      dispatch({
        type: 'DELETE_VENTA_SUCCESS',
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "DELETE_VENTA_FAIL",
        
          error: true,
          message: 'Error al eliminar tipo raza'
      
      })
    }finally{
      dispatch({ type: "DELETE_VENTA_FINISH" })
    }
  }
}

export const crearVenta = (dataForm, resetForm, navigate) => {
  return async (dispatch) => {
 
    dispatch({ type: "ADD_VENTA_START" });
    try {
           await axiosClient.post('api/ventas', dataForm);
    dispatch({
      type: "ADD_VENTA_SUCCESS",
      data: true,
    })

    
    setTimeout(() => {
      dispatch({
        type: 'CLEAR_MESSAGE_NOTIFICATION',
      });
      resetForm();
      // if (errors) {
        navigate('/list-venta');
      // }
    }, 1500);

    } catch (error) {
      console.log(error)
      dispatch({
        type: "ADD_VENTA_FAIL",
        
          error: true,
          message: 'Error al agregar venta'
      
      })
    }finally{
      dispatch({ type: "ADD_VENTA_FINISH" })
    }
  }
}

export const actualizarVenta = (dataForm, resetForm, navigate) => {
  return async (dispatch) => {
    
    dispatch({ type: "EDIT_VENTA_START" });
    try {
     
      await axiosClient.put('api/ventas', dataForm);
      //  const response = await axiosClient.get(`api/ventas/pageable?page=${page}&size=${size}`);

    dispatch({
      type: "EDIT_VENTA_SUCCESS",
      data: true
    })

    setTimeout(() => {
      dispatch({
        type: 'CLEAR_MESSAGE_NOTIFICATION',
      });
      resetForm();
      // if (errors) {
        navigate('/list-venta');
      // }
    }, 1500);

    } catch (error) {
      dispatch({
        type: "EDIT_VENTA_FAIL",
  
          error: true,
          message: 'Error al agregar venta'
   
      })
    }finally{
      dispatch({ type: "EDIT_VENTA_FINISH" })
    }
  }
}