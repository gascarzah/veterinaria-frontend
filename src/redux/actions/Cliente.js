
import axiosClient from "../../config/axios";

export const getClientes = (entidad,page, size) => {
  return async (dispatch) => {
    dispatch({ type: "GET_CLIENTES_START" });
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token
      // const response = await axiosClient.get(`api/clientes/pageable?page=${page}&size=${size}`);
      const response = await axiosClient.get(`api/clientes/${entidad.stakeholder}/${entidad.negocio}/${entidad.sistema}/pageable?page=${page}&size=${size}`
      ,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }}
        );
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
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token
      const response = await axiosClient.get(
        `api/clientes/${id}` ,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }}
      );
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

// export const deleteCliente = (idCliente)
export const eliminarCliente = (id, page, size) => {
  return async (dispatch) => {
    dispatch({ type: "DELETE_CLIENTE_START" });
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token
       await axiosClient.delete(`api/clientes/${id}`)
       const response = await axiosClient.get(`api/clientes/pageable?page=${page}&size=${size}` ,
       {
         headers: {
           'Authorization': `Bearer ${token}`
         }});
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
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token

      await axiosClient.post('api/clientes', dataForm,  {
        headers: {
          'Authorization': `Bearer ${token}`
        }})
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
        navigate('/list-empleado');
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

export const actualizarCliente = (dataForm, page, size) => {
  return async (dispatch) => {
    // console.log('5')
    dispatch({ type: "EDIT_CLIENTE_START" });
    try {
      // console.log('actualizarCliente')
      // console.log(dataForm)
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token
      await axiosClient.put('api/clientes', dataForm ,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }})
      //  const response = await axiosClient.get(`api/clientes/pageable?page=${page}&size=${size}`);

    dispatch({
      type: "EDIT_CLIENTE_SUCCESS",
      data: true
    })
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