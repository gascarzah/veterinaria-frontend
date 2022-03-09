
import axiosClient from "../../config/axios";

export const getEmpleados = (page, size) => {
  return async (dispatch) => {
    dispatch({ type: "GET_EMPLEADOS_START" });
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token
      // const response = await axiosClient.get(`api/empleados/pageable?page=${page}&size=${size}`);
      const response = await axiosClient.get(`api/empleados/pageable?page=${page}&size=${size}`
      ,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }}
        );
      dispatch({
        type: "GET_EMPLEADOS_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_EMPLEADOS_FAIL",
        error: true,
        message: "Ocurrio un error al botener la empleado",
      
      });
    } finally {
      dispatch({
        type: "GET_EMPLEADOS_FINISH",
      });
    }
  };
};


export const getEmpleado = (id) => {
  return async (dispatch) => {

    dispatch({ type: "GET_EMPLEADO_START" });
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token
      const response = await axiosClient.get(
        `api/empleados/${id}` ,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }}
      );
      dispatch({
        type: "GET_EMPLEADO_SUCCESS",
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "GET_EMPLEADO_FAIL",
        error: true,
        message: "Ocurrio un error al botener la empleado",
       
      });
    } finally {
      dispatch({
        type: "GET_EMPLEADO_FINISH",
      });
    }
  };
};

// export const deleteEmpleado = (idEmpleado)
export const eliminarEmpleado = (id, page, size) => {
  return async (dispatch) => {
    dispatch({ type: "DELETE_EMPLEADO_START" });
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token
       await axiosClient.delete(`api/empleados/${id}`)
       const response = await axiosClient.get(`api/empleados/pageable?page=${page}&size=${size}` ,
       {
         headers: {
           'Authorization': `Bearer ${token}`
         }});
      //  const response = arrayList.filter((obj) => obj.idEmpleado !== id)
      
      
      dispatch({
        type: 'DELETE_EMPLEADO_SUCCESS',
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "DELETE_EMPLEADO_FAIL",
        
          error: true,
          message: 'Error al eliminar tipo raza'
      
      })
    }finally{
      dispatch({ type: "DELETE_EMPLEADO_FINISH" })
    }
  }
}

export const crearEmpleado = (dataForm, resetForm, navigate) => {
  return async (dispatch) => {
    
    dispatch({ type: "ADD_EMPLEADO_START" });
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token

      await axiosClient.post('api/empleados', dataForm,  {
        headers: {
          'Authorization': `Bearer ${token}`
        }})
    dispatch({
      type: "ADD_EMPLEADO_SUCCESS",
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
        type: "ADD_EMPLEADO_FAIL",
        
          error: true,
          message: 'Error al agregar empleado'
      
      })
    }finally{
      dispatch({ type: "ADD_EMPLEADO_FINISH" })
    }
  }
}

export const actualizarEmpleado = (dataForm, page, size) => {
  return async (dispatch) => {
    // console.log('5')
    dispatch({ type: "EDIT_EMPLEADO_START" });
    try {
      // console.log('actualizarEmpleado')
      // console.log(dataForm)
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token
      await axiosClient.put('api/empleados', dataForm ,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }})
      //  const response = await axiosClient.get(`api/empleados/pageable?page=${page}&size=${size}`);

    dispatch({
      type: "EDIT_EMPLEADO_SUCCESS",
      data: true
    })
    } catch (error) {
      dispatch({
        type: "EDIT_EMPLEADO_FAIL",
  
          error: true,
          message: 'Error al agregar empleado'
   
      })
    }finally{
      dispatch({ type: "EDIT_EMPLEADO_FINISH" })
    }
  }
}