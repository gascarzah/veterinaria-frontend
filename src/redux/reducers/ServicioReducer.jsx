
 const initialState = {
    loadingServicios: false,
    loadingGetServicio: false,
    servicio: {},
    editOk: false,
    addOk: false,
    deleteOk: false,
    servicioList: [],
    message: '',
    error: 0,

}

export const ServicioReducer = (state = initialState, action) => {


switch (action.type) {

case "GET_SERVICIOS_START":
  return {
    ...state,
    loadingServicios: true
  };

case "GET_SERVICIOS_SUCCESS":
  return {
    ...state,
    servicioList: action.data
  };

case "GET_SERVICIOS_FAIL":
  return {
    ...state,
    servicioList: null,
    error: action.error,
    message: action.message
  };
case "GET_SERVICIOS_FINISH":
  return {
    ...state,
    loadingservicios: false
  };



case "GET_SERVICIO_START":
 
return {
  ...state,
  loadingGetServicio: true,
}

case "GET_SERVICIO_SUCCESS":
  
  return {
    ...state,
    servicio: action.data,
  };

case "GET_SERVICIO_FAIL":
  return {
    ...state,
    servicioList: null,
    error: action.error,
    message: action.message
  };
case "GET_SERVICIO_FINISH":
  return {
    ...state,
    loadingGetServicio: false,
  };


  case "DELETE_SERVICIO_START":
    return {
      ...state,

        loadingservicio: true,
        
      
    }
  case "DELETE_SERVICIO_SUCCESS":
    return {
      ...state,
        addOk: false,
        editOk: false,
        deleteOk: true,
        servicioList: action.data
    }
  case "DELETE_SERVICIO_FAIL":
    return {
      ...state,
        error: action.error,
        message: action.message
    }
  case "DELETE_SERVICIO_FINISH":
    return {
      ...state,
        loadingservicio: false
      
    }
  case  "ADD_SERVICIO_START":
    return {
      ...state,

        loadingservicio: true,
      
    }
  case  "ADD_SERVICIO_SUCCESS":
    return {
      ...state,

      addOk: action.data,
      editOk: false,
      deleteOk: false,

    }
  case  "ADD_SERVICIO_FAIL":
    return {
      ...state,

        error: action.error,
       message: action.message
    }
  case  "ADD_SERVICIO_FINISH":
    return {
      ...state,

        loadingservicio: false
    }
  case "EDIT_SERVICIO_START":
    return {
      ...state,

        loadingservicio: true,
        

    }
  case "EDIT_SERVICIO_SUCCESS":
    return {
      ...state,
      addOk: false,
      editOk: action.data,
      deleteOk: false
    }
  case "EDIT_SERVICIO_FAIL":
    return {
      ...state,

        error: action.error,
        message: action.message
    }
  case "EDIT_SERVICIO_FINISH":
    return {
      ...state,

        loadingservicio: false

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
