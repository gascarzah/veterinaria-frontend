
import axiosClient from "../../config/axios";

export const getPersonas = (entidad,page, size) => {
  return async (dispatch) => {
    dispatch({ type: "GET_PERSONAS_START" });
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token
      // const response = await axiosClient.get(`api/personas/pageable?page=${page}&size=${size}`);
      const response = await axiosClient.get(`api/personas/${entidad.stakeholder}/${entidad.negocio}/${entidad.sistema}/pageable?page=${page}&size=${size}`
      ,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }}
        );
      dispatch({
        type: "GET_PERSONAS_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_PERSONAS_FAIL",
        error: true,
        message: "Ocurrio un error al botener la persona",
      
      });
    } finally {
      dispatch({
        type: "GET_PERSONAS_FINISH",
      });
    }
  };
};


export const getPersona = (id) => {
  return async (dispatch) => {

    dispatch({ type: "GET_PERSONA_START" });
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token
      const response = await axiosClient.get(
        `api/personas/${id}` ,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }}
      );
      dispatch({
        type: "GET_PERSONA_SUCCESS",
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "GET_PERSONA_FAIL",
        error: true,
        message: "Ocurrio un error al botener la persona",
       
      });
    } finally {
      dispatch({
        type: "GET_PERSONA_FINISH",
      });
    }
  };
};

// export const deletePersona = (idPersona)
export const eliminarPersona = (id, page, size) => {
  return async (dispatch) => {
    dispatch({ type: "DELETE_PERSONA_START" });
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token
       await axiosClient.delete(`api/personas/${id}`)
       const response = await axiosClient.get(`api/personas/pageable?page=${page}&size=${size}` ,
       {
         headers: {
           'Authorization': `Bearer ${token}`
         }});
      //  const response = arrayList.filter((obj) => obj.idPersona !== id)
      
      
      dispatch({
        type: 'DELETE_PERSONA_SUCCESS',
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "DELETE_PERSONA_FAIL",
        
          error: true,
          message: 'Error al eliminar tipo raza'
      
      })
    }finally{
      dispatch({ type: "DELETE_PERSONA_FINISH" })
    }
  }
}

export const crearPersona = (dataForm, resetForm, navigate) => {
  return async (dispatch) => {
    
    dispatch({ type: "ADD_PERSONA_START" });
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token

      await axiosClient.post('api/personas', dataForm,  {
        headers: {
          'Authorization': `Bearer ${token}`
        }})
    dispatch({
      type: "ADD_PERSONA_SUCCESS",
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
        type: "ADD_PERSONA_FAIL",
        
          error: true,
          message: 'Error al agregar persona'
      
      })
    }finally{
      dispatch({ type: "ADD_PERSONA_FINISH" })
    }
  }
}

export const actualizarPersona = (dataForm, page, size) => {
  return async (dispatch) => {
    // console.log('5')
    dispatch({ type: "EDIT_PERSONA_START" });
    try {
      // console.log('actualizarPersona')
      // console.log(dataForm)
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token
      await axiosClient.put('api/personas', dataForm ,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }})
      //  const response = await axiosClient.get(`api/personas/pageable?page=${page}&size=${size}`);

    dispatch({
      type: "EDIT_PERSONA_SUCCESS",
      data: true
    })
    } catch (error) {
      dispatch({
        type: "EDIT_PERSONA_FAIL",
  
          error: true,
          message: 'Error al agregar persona'
   
      })
    }finally{
      dispatch({ type: "EDIT_PERSONA_FINISH" })
    }
  }
}