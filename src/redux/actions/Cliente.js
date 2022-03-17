
import axiosClient from "../../config/axios";

export const getTodoClientes = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_CLIENTES_START" });
    try {
 
      const response = await axiosClient.get(`api/clientes`);
      dispatch({
        type: "GET_CLIENTES_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_CLIENTES_FAIL",
        error: true,
        message: "Ocurrio un error al obtener la cliente",
      
      });
    } finally {
      dispatch({
        type: "GET_CLIENTES_FINISH",
      });
    }
  };
};

export const getClientes = (page, size) => {
  return async (dispatch) => {
    dispatch({ type: "GET_CLIENTES_START" });
    try {
     
      const response = await axiosClient.get(`api/clientes/pageable?page=${page}&size=${size}`);
      dispatch({
        type: "GET_CLIENTES_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_CLIENTES_FAIL",
        error: true,
        message: "Ocurrio un error al obtener la cliente",
      
      });
    } finally {
      dispatch({
        type: "GET_CLIENTES_FINISH",
      });
    }
  };
};


export const getCliente = (id) => {
  return async (dispatch) => {

    dispatch({ type: "GET_CLIENTE_START" });
    try {

      const response = await axiosClient.get(`api/clientes/${id}`);
      dispatch({
        type: "GET_CLIENTE_SUCCESS",
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "GET_CLIENTE_FAIL",
        error: true,
        message: "Ocurrio un error al botener la cliente",
       
      });
    } finally {
      dispatch({
        type: "GET_CLIENTE_FINISH",
      });
    }
  };
};


export const eliminarCliente = (id, page, size) => {
  return async (dispatch) => {
    dispatch({ type: "DELETE_CLIENTE_START" });
    try {
      
      await axiosClient.delete(`api/clientes/${id}`);
       const response = await axiosClient.get(`api/clientes/pageable?page=${page}&size=${size}`);
      //  const response = arrayList.filter((obj) => obj.idCliente !== id)
      
      
      dispatch({
        type: 'DELETE_CLIENTE_SUCCESS',
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "DELETE_CLIENTE_FAIL",
        
          error: true,
          message: 'Error al eliminar tipo raza'
      
      })
    }finally{
      dispatch({ type: "DELETE_CLIENTE_FINISH" })
    }
  }
}

export const crearCliente = (dataForm, resetForm, navigate) => {
  return async (dispatch) => {
    
    dispatch({ type: "ADD_CLIENTE_START" });
    try {
     
      await axiosClient.post('api/clientes', dataForm);

    dispatch({
      type: "ADD_CLIENTE_SUCCESS",
      data: true,
    })

    
    setTimeout(() => {
      dispatch({
        type: 'CLEAR_MESSAGE_NOTIFICATION',
      });
      resetForm();
      // if (errors) {
        navigate('/list-cliente');
      // }
    }, 1500);

    } catch (error) {
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
      dispatch({
        type: "ADD_CLIENTE_FAIL",
        
          error: "error",
          message: error.response.data.mensaje
      
      })
    }finally{
      dispatch({ type: "ADD_CLIENTE_FINISH" })
    }
  }
}

export const actualizarCliente = (dataForm, resetForm, navigate) => {
  return async (dispatch) => {

    dispatch({ type: "EDIT_CLIENTE_START" });
    try {
      
      await axiosClient.put('api/clientes', dataForm);

    dispatch({
      type: "EDIT_CLIENTE_SUCCESS",
      data: true
    })

    setTimeout(() => {
      dispatch({
        type: 'CLEAR_MESSAGE_NOTIFICATION',
      });
      resetForm();
      // if (errors) {
        navigate('/list-cliente');
      // }
    }, 1500);


    } catch (error) {
      dispatch({
        type: "EDIT_CLIENTE_FAIL",
  
          error: true,
          message: 'Error al agregar cliente'
   
      })
    }finally{
      dispatch({ type: "EDIT_CLIENTE_FINISH" })
    }
  }
}