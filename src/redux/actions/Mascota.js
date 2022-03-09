
import axiosClient from "../../config/axios";

export const getMascotas = (page, size) => {
  return async (dispatch) => {
    dispatch({ type: "GET_MASCOTAS_START" });
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token
      const response = await axiosClient.get(`api/mascotas/pageable?page=${page}&size=${size}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }});
      dispatch({
        type: "GET_MASCOTAS_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_MASCOTAS_FAIL",
        error: true,
        message: "Ocurrio un error al botener la mascota",
      
      });
    } finally {
      dispatch({
        type: "GET_MASCOTAS_FINISH",
      });
    }
  };
};


export const getMascota = (id) => {
  return async (dispatch) => {

    dispatch({ type: "GET_MASCOTA_START" });
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token
      const response = await axiosClient.get(
        `api/mascotas/${id}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }});
      dispatch({
        type: "GET_MASCOTA_SUCCESS",
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "GET_MASCOTA_FAIL",
        error: true,
        message: "Ocurrio un error al botener la mascota",
       
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
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token
       await axiosClient.delete(`api/mascotas/${id}`,
       {
         headers: {
           'Authorization': `Bearer ${token}`
         }});
       const response = await axiosClient.get(`api/mascotas/pageable?page=${page}&size=${size}`,
       {
         headers: {
           'Authorization': `Bearer ${token}`
         }});
      //  const response = arrayList.filter((obj) => obj.idMascota !== id)
      
      
      dispatch({
        type: 'DELETE_MASCOTA_SUCCESS',
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "DELETE_MASCOTA_FAIL",
        
          error: true,
          message: 'Error al eliminar tipo raza'
      
      })
    }finally{
      dispatch({ type: "DELETE_MASCOTA_FINISH" })
    }
  }
}

export const crearMascota = (dataForm, resetForm, navigate) => {
  return async (dispatch) => {
    
    dispatch({ type: "ADD_MASCOTA_START" });
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token

      await axiosClient.post('api/mascotas', dataForm,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }});
    dispatch({
      type: "ADD_MASCOTA_SUCCESS",
      data: true,
    })

    
    setTimeout(() => {
      dispatch({
        type: 'CLEAR_MESSAGE_NOTIFICATION',
      });
      resetForm();
      // if (errors) {
        navigate('/list-mascota');
      // }
    }, 1500);

    } catch (error) {
      console.log(error)
      dispatch({
        type: "ADD_MASCOTA_FAIL",
        
          error: true,
          message: 'Error al agregar mascota'
      
      })
    }finally{
      dispatch({ type: "ADD_MASCOTA_FINISH" })
    }
  }
}

export const actualizarMascota = (dataForm, resetForm, navigate) => {
  return async (dispatch) => {
    // console.log('5')
    dispatch({ type: "EDIT_MASCOTA_START" });
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token
      await axiosClient.put('api/mascotas', dataForm,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }});
      //  const response = await axiosClient.get(`api/mascotas/pageable?page=${page}&size=${size}`);

    dispatch({
      type: "EDIT_MASCOTA_SUCCESS",
      data: true
    })

    setTimeout(() => {
      dispatch({
        type: 'CLEAR_MESSAGE_NOTIFICATION',
      });
      resetForm();
      // if (errors) {
        navigate('/list-mascota');
      // }
    }, 1500);

    } catch (error) {
      dispatch({
        type: "EDIT_MASCOTA_FAIL",
  
          error: true,
          message: 'Error al agregar mascota'
   
      })
    }finally{
      dispatch({ type: "EDIT_MASCOTA_FINISH" })
    }
  }
}