
import axiosClient from "../../config/axios";

export const getUsuarios = (page, size) => {
  return async (dispatch) => {
    dispatch({ type: "GET_USUARIOS_START" });
    try {
      const response = await axiosClient.get(`api/usuarios/pageable?page=${page}&size=${size}`);
      dispatch({
        type: "GET_USUARIOS_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_USUARIOS_FAIL",
        error: true,
        message: "Ocurrio un error al botener la usuario",
      
      });
    } finally {
      dispatch({
        type: "GET_USUARIOS_FINISH",
      });
    }
  };
};


export const getUsuario = (id) => {
  return async (dispatch) => {

    dispatch({ type: "GET_USUARIO_START" });
    try {
      const response = await axiosClient.get(
        `api/usuarios/${id}`
      );
      dispatch({
        type: "GET_USUARIO_SUCCESS",
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "GET_USUARIO_FAIL",
        error: true,
        message: "Ocurrio un error al botener la usuario",
       
      });
    } finally {
      dispatch({
        type: "GET_USUARIO_FINISH",
      });
    }
  };
};

// export const deleteUsuario = (idUsuario)
export const eliminarUsuario = (id, page, size) => {
  return async (dispatch) => {
    dispatch({ type: "DELETE_USUARIO_START" });
    try {
       await axiosClient.delete(`api/usuarios/${id}`)
       const response = await axiosClient.get(`api/usuarios/pageable?page=${page}&size=${size}`);
      //  const response = arrayList.filter((obj) => obj.idUsuario !== id)
      
      
      dispatch({
        type: 'DELETE_USUARIO_SUCCESS',
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "DELETE_USUARIO_FAIL",
        
          error: true,
          message: 'Error al eliminar tipo raza'
      
      })
    }finally{
      dispatch({ type: "DELETE_USUARIO_FINISH" })
    }
  }
}

export const crearUsuario = (dataForm, resetForm, navigate) => {
  return async (dispatch) => {
    
    dispatch({ type: "ADD_USUARIO_START" });
    try {


    await axiosClient.post('api/usuarios', dataForm)
    

    dispatch({
      type: "ADD_USUARIO_SUCCESS",
      data: true,
    })

    
    setTimeout(() => {
      dispatch({ type: 'CLEAR_MESSAGE_NOTIFICATION' });
      resetForm();
      // if (errors) {
        navigate('/');
      // }
    }, 1500);

    } catch (error) {
      
      dispatch({
        type: "ADD_USUARIO_FAIL",
        error: true,
        message: 'correo ya se encuentra registrado'
      
      })

      setTimeout(() => {
        dispatch({
          type: 'CLEAR_MESSAGE_NOTIFICATION',
        });
        
       
      }, 1500);



    }finally{
      dispatch({ type: "ADD_USUARIO_FINISH" })
    }
  }
}

export const actualizarUsuario = (dataForm, page, size) => {
  return async (dispatch) => {
    // console.log('5')
    dispatch({ type: "EDIT_USUARIO_START" });
    try {
      // console.log('actualizarUsuario')
      // console.log(dataForm)
      await axiosClient.put('api/usuarios', dataForm)
      //  const response = await axiosClient.get(`api/usuarios/pageable?page=${page}&size=${size}`);

    dispatch({
      type: "EDIT_USUARIO_SUCCESS",
      data: true
    })
    } catch (error) {
      dispatch({
        type: "EDIT_USUARIO_FAIL",
  
          error: true,
          message: 'Error al agregar usuario'
   
      })
    }finally{
      dispatch({ type: "EDIT_USUARIO_FINISH" })
    }
  }
}