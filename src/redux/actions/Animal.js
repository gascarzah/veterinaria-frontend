
import axiosClient from "../../config/axios";

export const getTodoAnimales = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_ANIMALES_START" });
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token
      const response = await axiosClient.get(`api/animales`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }});


      dispatch({
        type: "GET_ANIMALES_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_ANIMALES_FAIL",
        error: true,
        message: "Ocurrio un error al botener la animal",
      
      });
    } finally {
      dispatch({
        type: "GET_ANIMALES_FINISH",
      });
    }
  };
};

export const getAnimales = (page, size) => {
  return async (dispatch) => {
    dispatch({ type: "GET_ANIMALES_START" });
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token
      const response = await axiosClient.get(`api/animales/pageable?page=${page}&size=${size}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }});


      dispatch({
        type: "GET_ANIMALES_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_ANIMALES_FAIL",
        error: true,
        message: "Ocurrio un error al botener la animal",
      
      });
    } finally {
      dispatch({
        type: "GET_ANIMALES_FINISH",
      });
    }
  };
};


export const getAnimal = (id) => {
  return async (dispatch) => {

    dispatch({ type: "GET_ANIMAL_START" });
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token
      const response = await axiosClient.get(`api/animales/${id}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }});
      dispatch({
        type: "GET_ANIMAL_SUCCESS",
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "GET_ANIMAL_FAIL",
        error: true,
        message: "Ocurrio un error al botener la animal",
       
      });
    } finally {
      dispatch({
        type: "GET_ANIMAL_FINISH",
      });
    }
  };
};

// export const deleteAnimal = (idAnimal)
export const eliminarAnimal = (id, page, size) => {
  return async (dispatch) => {
    dispatch({ type: "DELETE_ANIMAL_START" });
    try {

      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token

       await axiosClient.delete(`api/animales/${id}`,
       {
         headers: {
           'Authorization': `Bearer ${token}`
         }});

       const response = await axiosClient.get(`api/animales/pageable?page=${page}&size=${size}`,
       {
         headers: {
           'Authorization': `Bearer ${token}`
         }});
      //  const response = arrayList.filter((obj) => obj.idAnimal !== id)
      
      
      dispatch({
        type: 'DELETE_ANIMAL_SUCCESS',
        data: response.data,
        
      });
    } catch (error) {
      dispatch({
        type: "DELETE_ANIMAL_FAIL",
        
          error: true,
          message: 'Error al eliminar raza'
      
      })
    }finally{
      dispatch({ type: "DELETE_ANIMAL_FINISH" })
    }
  }
}

export const crearAnimal = (dataForm, resetForm, navigate) => {
  return async (dispatch) => {
    
    dispatch({ type: "ADD_ANIMAL_START" });
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token

      await axiosClient.post('api/animales', dataForm,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }});

    dispatch({
      type: "ADD_ANIMAL_SUCCESS",
      data: true,
    })

    
    setTimeout(() => {
      dispatch({
        type: 'CLEAR_MESSAGE_NOTIFICATION',
      });
      resetForm();
      // if (errors) {
        navigate('/list-animal');
      // }
    }, 1500);

    } catch (error) {
      console.log(error)
      dispatch({
        type: "ADD_ANIMAL_FAIL",
        
          error: true,
          message: 'Error al agregar animal'
      
      })
    }finally{
      dispatch({ type: "ADD_ANIMAL_FINISH" })
    }
  }
}

export const actualizarAnimal = (dataForm, resetForm, navigate) => {
  return async (dispatch) => {
    // console.log('5')
    dispatch({ type: "EDIT_ANIMAL_START" });
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      const token = user.access_token
     
      await axiosClient.put('api/animales', dataForm,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }});
   
    dispatch({
      type: "EDIT_ANIMAL_SUCCESS",
      data: true
    })

    setTimeout(() => {
      dispatch({
        type: 'CLEAR_MESSAGE_NOTIFICATION',
      });
      resetForm();
      // if (errors) {
        navigate('/list-animal');
      // }
    }, 1500);

    } catch (error) {
      dispatch({
        type: "EDIT_ANIMAL_FAIL",
  
          error: true,
          message: 'Error al agregar animal'
   
      })
    }finally{
      dispatch({ type: "EDIT_ANIMAL_FINISH" })
    }
  }
}