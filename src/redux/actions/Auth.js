
import axiosClient from "../../config/axios";

export const login = (dataForm,resetForm) => {
  return async (dispatch) => {

    dispatch({ type: "GET_AUTH_START" });
    try {
      
      const response = await axiosClient.post("/api/login", dataForm);
    
      dispatch({
        type: "GET_AUTH_SUCCESS",
        data: response.data,
      });

    } catch (error) {
// if (error.response) {
//   // Request made and server responded
//   console.log(error.response.data);
//   console.log(error.response.status);
//   console.log(error.response.headers);
// }
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
