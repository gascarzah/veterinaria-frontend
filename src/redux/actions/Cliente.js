
import axiosClient from "../../config/axios";

export const getTodoClientes = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_CLIENTES_START" });
    try {
      const user = JSON.parse(sessionStorage.getItem("user"));
      const token = user.access_token;
      const response = await axiosClient.get(`api/clientes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
      const user = JSON.parse(sessionStorage.getItem("user"));
      const token = user.access_token;
      const response = await axiosClient.get(`api/clientes/pageable?page=${page}&size=${size}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
      const user = JSON.parse(sessionStorage.getItem("user"));
      const token = user.access_token;
      const response = await axiosClient.get(`api/clientes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
      const user = JSON.parse(sessionStorage.getItem("user"));
      const token = user.access_token;
      await axiosClient.delete(`api/clientes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
       const response = await axiosClient.get(`api/clientes/pageable?page=${page}&size=${size}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
      const user = JSON.parse(sessionStorage.getItem("user"));
      const token = user.access_token;
      await axiosClient.post('api/clientes', dataForm, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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
      console.log(error)
      dispatch({
        type: "ADD_CLIENTE_FAIL",
        
          error: true,
          message: 'Error al agregar cliente'
      
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
      const user = JSON.parse(sessionStorage.getItem("user"));
      const token = user.access_token;
      await axiosClient.put('api/clientes', dataForm , {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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