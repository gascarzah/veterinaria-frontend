
 const initialState = {
    list: {
        loading: false,
        data: null,
        error: {
          error: false,
          message: ''
        }
  
    }
}

export const CategoriaInsumoReducer = (state = initialState, action) => {
   
      
  switch (action.type) {
    case "GET_CATEGORIA_INSUMO_START":
      return {
        ...state,
        list: {
            ...state.list,
            loading: true,
            error: initialState.list.error
          },
      };

    case "GET_CATEGORIA_INSUMO_SUCCESS":
      return {
        ...state,
        list: {
            ...state.list,
            data: action.data
          },
      };

    case "GET_CATEGORIA_INSUMO_FAIL":
      return {
        ...state,
        list: {
            ...state.list,
            error: action.error
          },
      };
    case "GET_CATEGORIA_INSUMO_FINISH":
      return {
        ...state,
        list: {
            ...state.list,
            loading: false
          },
      };


      case "DELETE_CATEGORIA_INSUMO_START":
        return {
          ...state,
          list: {
            ...state.list,
            loading: true,
            error: initialState.list.error
          },
        }
      case "DELETE_CATEGORIA_INSUMO_SUCCESS":
        return {
          ...state,
          list: {
            ...state.list,
            data: action.data
          },
        }
      case "DELETE_CATEGORIA_INSUMO_FAIL":
        return {
          ...state,
          list: {
            ...state.list,
            error: action.error
          },
        }
      case "DELETE_CATEGORIA_INSUMO_FINISH":
        return {
          ...state,
          list: {
            ...state.list,
            loading: false
          },
        }
      case  "ADD_CATEGORIA_INSUMO_START":
        return {
          ...state,
          list: {
            ...state.list,
            loading: true,
            error: initialState.list.error
          },
        }
      case  "ADD_CATEGORIA_INSUMO_SUCCESS":
        return {
          ...state,
          list: {
            ...state.list,
            data: action.data
          },
        }
      case  "ADD_CATEGORIA_INSUMO_FAIL":
        return {
          ...state,
          list: {
            ...state.list,
            error: action.error
          },
        }
      case  "ADD_CATEGORIA_INSUMO_FINISH":
        return {
          ...state,
          list: {
            ...state.list,
            loading: false
          },
        }
      case "EDIT_CATEGORIA_INSUMO_START":
        return {
          ...state,
          list: {
            ...state.list,
            loading: true,
            error: initialState.list.error
          },
        }
      case "EDIT_CATEGORIA_INSUMO_SUCCESS":
        return {
          ...state,
          list: {
            ...state.list,
            data: action.data
          },
        }
      case "EDIT_CATEGORIA_INSUMO_FAIL":
        return {
          ...state,
          list: {
            ...state.list,
            error: action.error
          },
        }
      case "EDIT_CATEGORIA_INSUMO_FINISH":
        return {
          ...state,
          list: {
            ...state.list,
            loading: false
          },
        }


      
    default:
      return state;
  }
};
