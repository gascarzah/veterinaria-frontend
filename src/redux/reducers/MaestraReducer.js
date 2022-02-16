
 const initialState = {
    loadingMaestras: false,
    loadingGetMaestra: false,
    maestra: {},
    editOk: false,
    addOk: false,
    deleteOk: false,
    maestraList: [],
    message: '',
    error: 0,

}

export const MaestraReducer = (state = initialState, action) => {


switch (action.type) {

case "GET_MAESTRAS_START":
  return {
    ...state,
    loadingMaestras: true
  };

case "GET_MAESTRAS_SUCCESS":
  return {
    ...state,
    maestraList: action.data
  };

case "GET_MAESTRAS_FAIL":
  return {
    ...state,
    maestraList: null,
    error: action.error,
    message: action.message
  };
case "GET_MAESTRAS_FINISH":
  return {
    ...state,
    loadingmaestras: false
  };



case "GET_MAESTRA_START":
 
return {
  ...state,
  loadingGetMaestra: true,
}

case "GET_MAESTRA_SUCCESS":
  
  return {
    ...state,
    maestra: action.data,
  };

case "GET_MAESTRA_FAIL":
  return {
    ...state,
    maestraList: null,
    error: action.error,
    message: action.message
  };
case "GET_MAESTRA_FINISH":
  return {
    ...state,
    loadingGetMaestra: false,
  };


  case "DELETE_MAESTRA_START":
    return {
      ...state,

        loadingmaestra: true,
        
      
    }
  case "DELETE_MAESTRA_SUCCESS":
    return {
      ...state,
        addOk: false,
        editOk: false,
        deleteOk: true,
        maestraList: action.data
    }
  case "DELETE_MAESTRA_FAIL":
    return {
      ...state,
        error: action.error,
        message: action.message
    }
  case "DELETE_MAESTRA_FINISH":
    return {
      ...state,
        loadingmaestra: false
      
    }
  case  "ADD_MAESTRA_START":
    return {
      ...state,

        loadingmaestra: true,
      
    }
  case  "ADD_MAESTRA_SUCCESS":
    return {
      ...state,

      addOk: action.data,
      editOk: false,
      deleteOk: false,

    }
  case  "ADD_MAESTRA_FAIL":
    return {
      ...state,

        error: action.error,
       message: action.message
    }
  case  "ADD_MAESTRA_FINISH":
    return {
      ...state,

        loadingmaestra: false
    }
  case "EDIT_MAESTRA_START":
    return {
      ...state,

        loadingmaestra: true,
        

    }
  case "EDIT_MAESTRA_SUCCESS":
    return {
      ...state,
      addOk: false,
      editOk: action.data,
      deleteOk: false
    }
  case "EDIT_MAESTRA_FAIL":
    return {
      ...state,

        error: action.error,
        message: action.message
    }
  case "EDIT_MAESTRA_FINISH":
    return {
      ...state,

        loadingmaestra: false

    }
    case 'CLEAR_MESSAGE_NOTIFICATION':
      return {
        ...state,
        message: null,
        // messageLogin: null,
      };

  
default:
  return state;
}
};
