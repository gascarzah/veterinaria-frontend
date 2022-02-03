
 const initialState = {
    list: {
        loadingtipomascota: false,
        data: null,
        mensaje: '',
        error: {
          error: false,
          message: ''
        }
  
    }
}

export const TipoMascotaReducer = (state = initialState, action) => {
   
      
  switch (action.type) {
    case "GET_TIPO_MASCOTA_START":
      return {
        ...state,
        list: {
            ...state.list,
            loadingtipomascota: true,
            error: initialState.list.error
          },
      };

    case "GET_TIPO_MASCOTA_SUCCESS":
      return {
        ...state,
        list: {
            ...state.list,
            data: action.data
          },
      };

    case "GET_TIPO_MASCOTA_FAIL":
      return {
        ...state,
        list: {
            ...state.list,
            error: action.error
          },
      };
    case "GET_TIPO_MASCOTA_FINISH":
      return {
        ...state,
        list: {
            ...state.list,
            loadingtipomascota: false
          },
      };


      case "DELETE_TIPO_MASCOTA_START":
        return {
          ...state,
          list: {
            ...state.list,
            loadingtipomascota: true,
            error: initialState.list.error
          },
        }
      case "DELETE_TIPO_MASCOTA_SUCCESS":
        return {
          ...state,
          list: {
            ...state.list,
            data: action.data,
            mensaje: 'satisfactoriamente'
          },
        }
      case "DELETE_TIPO_MASCOTA_FAIL":
        return {
          ...state,
          list: {
            ...state.list,
            error: action.error
          },
        }
      case "DELETE_TIPO_MASCOTA_FINISH":
        return {
          ...state,
          list: {
            ...state.list,
            loadingtipomascota: false
          },
        }
      case  "ADD_TIPO_MASCOTA_START":
        return {
          ...state,
          list: {
            ...state.list,
            loadingtipomascota: true,
            error: initialState.list.error
          },
        }
      case  "ADD_TIPO_MASCOTA_SUCCESS":
        return {
          ...state,
          list: {
            ...state.list,
            data: action.data
          },
        }
      case  "ADD_TIPO_MASCOTA_FAIL":
        return {
          ...state,
          list: {
            ...state.list,
            error: action.error
          },
        }
      case  "ADD_TIPO_MASCOTA_FINISH":
        return {
          ...state,
          list: {
            ...state.list,
            loadingtipomascota: false
          },
        }
      case "EDIT_TIPO_MASCOTA_START":
        return {
          ...state,
          list: {
            ...state.list,
            loadingtipomascota: true,
            error: initialState.list.error
          },
        }
      case "EDIT_TIPO_MASCOTA_SUCCESS":
        return {
          ...state,
          list: {
            ...state.list,
            data: action.data
          },
        }
      case "EDIT_TIPO_MASCOTA_FAIL":
        return {
          ...state,
          list: {
            ...state.list,
            error: action.error
          },
        }
      case "EDIT_TIPO_MASCOTA_FINISH":
        return {
          ...state,
          list: {
            ...state.list,
            loadingtipomascota: false
          },
        }


      
    default:
      return state;
  }
};
