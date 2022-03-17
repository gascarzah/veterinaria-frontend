
import axiosClient from "../../config/axios";

export const login = (dataForm,resetForm) => {
  return async (dispatch) => {

    dispatch({ type: "GET_AUTH_START" });
    try {
      
      const response = await axiosClient.post("/api/login", dataForm);
      // console.log('response')
      // console.log(response)
      dispatch({
        type: "GET_AUTH_SUCCESS",
        data: response.data,
      });

    } catch (error) {

      dispatch({
        type: "GET_AUTH_FAIL",
        error: 'error',
        message: "Credenciales no validas",
      
      });
    } finally {
      dispatch({
        type: "GET_AUTH_FINISH",
      });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {

    dispatch({ type: "LOGOUT" });
    
  };
};