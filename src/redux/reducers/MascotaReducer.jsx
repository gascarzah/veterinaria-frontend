
 const initialState = {
    list: {
        loadingmascota: false,
        data: null,
        mensaje: '',
        error: {
          error: false,
          message: ''
        }
  
    }
}

export const MascotaReducer = (state = initialState, action) => {
   
      
  switch (action.type) {
    case "GET_MASCOTA_START":
      return {
        ...state,
        list: {
            ...state.list,
            loadingmascota: true,
            error: initialState.list.error
          },
      };

    case "GET_MASCOTA_SUCCESS":
      return {
        ...state,
        list: {
            ...state.list,
            data: action.data
          },
      };

    case "GET_MASCOTA_FAIL":
      return {
        ...state,
        list: {
            ...state.list,
            error: action.error
          },
      };
    case "GET_MASCOTA_FINISH":
      return {
        ...state,
        list: {
            ...state.list,
            loadingmascota: false
          },
      };


      case "DELETE_MASCOTA_START":
        return {
          ...state,
          list: {
            ...state.list,
            loadingmascota: true,
            error: initialState.list.error
          },
        }
      case "DELETE_MASCOTA_SUCCESS":
        return {
          ...state,
          list: {
            ...state.list,
            data: action.data,
            mensaje: 'satisfactoriamente'
          },
        }
      case "DELETE_MASCOTA_FAIL":
        return {
          ...state,
          list: {
            ...state.list,
            error: action.error
          },
        }
      case "DELETE_MASCOTA_FINISH":
        return {
          ...state,
          list: {
            ...state.list,
            loadingmascota: false
          },
        }
      case  "ADD_MASCOTA_START":
        return {
          ...state,
          list: {
            ...state.list,
            loadingmascota: true,
            error: initialState.list.error
          },
        }
      case  "ADD_MASCOTA_SUCCESS":
        return {
          ...state,
          list: {
            ...state.list,
            data: action.data
          },
        }
      case  "ADD_MASCOTA_FAIL":
        return {
          ...state,
          list: {
            ...state.list,
            error: action.error
          },
        }
      case  "ADD_MASCOTA_FINISH":
        return {
          ...state,
          list: {
            ...state.list,
            loadingmascota: false
          },
        }
      case "EDIT_MASCOTA_START":
        return {
          ...state,
          list: {
            ...state.list,
            loadingmascota: true,
            error: initialState.list.error
          },
        }
      case "EDIT_MASCOTA_SUCCESS":
        return {
          ...state,
          list: {
            ...state.list,
            data: action.data
          },
        }
      case "EDIT_MASCOTA_FAIL":
        return {
          ...state,
          list: {
            ...state.list,
            error: action.error
          },
        }
      case "EDIT_MASCOTA_FINISH":
        return {
          ...state,
          list: {
            ...state.list,
            loadingmascota: false
          },
        }


      
    default:
      return state;
  }
};
