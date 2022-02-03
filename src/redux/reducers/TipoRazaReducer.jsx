
 const initialState = {
    list: {
        loadingtiporaza: false,
        data: null,
        mensaje: '',
        error: {
          error: false,
          message: ''
        }
  
    }
}

export const TipoRazaReducer = (state = initialState, action) => {
   
      
  switch (action.type) {
    case "GET_TIPO_RAZA_START":
      return {
        ...state,
        list: {
            ...state.list,
            loadingtiporaza: true,
            error: initialState.list.error
          },
      };

    case "GET_TIPO_RAZA_SUCCESS":
      return {
        ...state,
        list: {
            ...state.list,
            data: action.data
          },
      };

    case "GET_TIPO_RAZA_FAIL":
      return {
        ...state,
        list: {
            ...state.list,
            error: action.error
          },
      };
    case "GET_TIPO_RAZA_FINISH":
      return {
        ...state,
        list: {
            ...state.list,
            loadingtiporaza: false
          },
      };


      case "DELETE_TIPO_RAZA_START":
        return {
          ...state,
          list: {
            ...state.list,
            loadingtiporaza: true,
            error: initialState.list.error
          },
        }
      case "DELETE_TIPO_RAZA_SUCCESS":
        return {
          ...state,
          list: {
            ...state.list,
            data: action.data,
            mensaje: 'satisfactoriamente'
          },
        }
      case "DELETE_TIPO_RAZA_FAIL":
        return {
          ...state,
          list: {
            ...state.list,
            error: action.error
          },
        }
      case "DELETE_TIPO_RAZA_FINISH":
        return {
          ...state,
          list: {
            ...state.list,
            loadingtiporaza: false
          },
        }
      case  "ADD_TIPO_RAZA_START":
        return {
          ...state,
          list: {
            ...state.list,
            loadingtiporaza: true,
            error: initialState.list.error
          },
        }
      case  "ADD_TIPO_RAZA_SUCCESS":
        return {
          ...state,
          list: {
            ...state.list,
            data: action.data
          },
        }
      case  "ADD_TIPO_RAZA_FAIL":
        return {
          ...state,
          list: {
            ...state.list,
            error: action.error
          },
        }
      case  "ADD_TIPO_RAZA_FINISH":
        return {
          ...state,
          list: {
            ...state.list,
            loadingtiporaza: false
          },
        }
      case "EDIT_TIPO_RAZA_START":
        return {
          ...state,
          list: {
            ...state.list,
            loadingtiporaza: true,
            error: initialState.list.error
          },
        }
      case "EDIT_TIPO_RAZA_SUCCESS":
        return {
          ...state,
          list: {
            ...state.list,
            data: action.data
          },
        }
      case "EDIT_TIPO_RAZA_FAIL":
        return {
          ...state,
          list: {
            ...state.list,
            error: action.error
          },
        }
      case "EDIT_TIPO_RAZA_FINISH":
        return {
          ...state,
          list: {
            ...state.list,
            loadingtiporaza: false
          },
        }


      
    default:
      return state;
  }
};
