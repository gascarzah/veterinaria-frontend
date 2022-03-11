
import axiosClient from "../../config/axios";

export const getMenus = (usuario) => {
  return async (dispatch) => {

    
    dispatch({ type: "GET_MENU_START" });
    try {
      const response = await axiosClient.get("/api/menu", usuario);

      dispatch({
        type: "GET_MENU_SUCCESS",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_MENU_FAIL",
        error: true,
        message: "Error al obtener menus",
      
      });
    } finally {
      dispatch({
        type: "GET_MENU_FINISH",
      });
    }
  };
};
