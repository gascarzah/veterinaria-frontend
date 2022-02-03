import axiosClient from "../../config/axios";

export const getCategoriasInsumo = (page, size) => {
  return async (dispatch) => {
    dispatch({ type: "GET_CATEGORIA_INSUMO_START" });
    try {
      const response = await axiosClient.get(
        `api/categoria-insumos/pageable?page=${page}&size=${size}`
      );
      dispatch({
        type: "GET_CATEGORIA_INSUMO_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_CATEGORIA_INSUMO_FAIL",
        error: {
          error: true,
          message: "Ocurrio un error al botener la categoria insumo",
        },
      });
    } finally {
      dispatch({
        type: "GET_CATEGORIA_INSUMO_FINISH",
      });
    }
  };
};


export const getCategoriaInsumo = (id) => {
  return async (dispatch) => {
    dispatch({ type: "GET_CATEGORIA_INSUMO_START" });
    try {
      const response = await axiosClient.get(
        `api/categoria-insumos/${id}`
      );
      dispatch({
        type: "GET_CATEGORIA_INSUMO_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_CATEGORIA_INSUMO_FAIL",
        error: {
          error: true,
          message: "Ocurrio un error al botener la categoria insumo",
        },
      });
    } finally {
      dispatch({
        type: "GET_CATEGORIA_INSUMO_FINISH",
      });
    }
  };
};

// export const deleteCategoriaInsumo = (idCategoriaInsumo)
export const eliminarCategoriaInsumo = (id, state) => {
  return async (dispatch) => {
    
    const arrayList = state.categoriaInsumos.list.data.content
   
    dispatch({ type: "DELETE_CATEGORIA_INSUMO_START" });
    try {
       await axiosClient.delete(`api/categoria-insumos/${id}`)
       const response = await axiosClient.get(
        `api/categoria-insumos/pageable?page=0&size=5`)
      //  const response = arrayList.filter((obj) => obj.idCategoriaInsumo !== id)

      
      dispatch({
        type: 'DELETE_CATEGORIA_INSUMO_SUCCESS',
        data: response.data
      });
    } catch (error) {
      dispatch({
        type: "DELETE_CATEGORIA_INSUMO_FAIL",
        error: {
          error: true,
          message: 'Error al agregar categoria insumo'
        }
      })
    }finally{
      dispatch({ type: "DELETE_CATEGORIA_INSUMO_FINISH" })
    }
  }
}

export const crearCategoriaInsumo = (dataForm) => {
  return async (dispatch) => {
    dispatch({ type: "ADD_CATEGORIA_INSUMO_START" });
    try {
      

      const response = await axiosClient.post('api/categoria-insumos', dataForm)
      console.log('response')
      console.log(response)
    dispatch({
      type: "ADD_CATEGORIA_INSUMO_SUCCESS",
      // data: newData
    })
    } catch (error) {
      dispatch({
        type: "ADD_CATEGORIA_INSUMO_FAIL",
        error: {
          error: true,
          message: 'Error al agregar categoria insumo'
        }
      })
    }finally{
      dispatch({ type: "ADD_CATEGORIA_INSUMO_FINISH" })
    }
  }
}

export const actualizarCategoriaInsumo = (dataForm) => {
  return async (dispatch) => {
    dispatch({ type: "EDIT_CATEGORIA_INSUMO_START" });
    try {
      console.log('dataForm')
      console.log(dataForm)

      const response = await axiosClient.put('api/categoria-insumos', dataForm)
      console.log('response')
      console.log(response)
    dispatch({
      type: "EDIT_CATEGORIA_INSUMO_SUCCESS",
      // data: newData
    })
    } catch (error) {
      dispatch({
        type: "EDIT_CATEGORIA_INSUMO_FAIL",
        error: {
          error: true,
          message: 'Error al agregar categoria insumo'
        }
      })
    }finally{
      dispatch({ type: "EDIT_CATEGORIA_INSUMO_FINISH" })
    }
  }
}