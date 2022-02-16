
 const initialState = {
    loadingEmpleados: false,
    loadingGetEmpleado: false,
    empleado: {},
    editOk: false,
    addOk: false,
    deleteOk: false,
    empleadoList: [],
    message: '',
    error: 0,

}

export const EmpleadoReducer = (state = initialState, action) => {


switch (action.type) {

case "GET_EMPLEADOS_START":
  return {
    ...state,
    loadingEmpleados: true
  };

case "GET_EMPLEADOS_SUCCESS":
  return {
    ...state,
    empleadoList: action.data
  };

case "GET_EMPLEADOS_FAIL":
  return {
    ...state,
    empleadoList: null,
    error: action.error,
    message: action.message
  };
case "GET_EMPLEADOS_FINISH":
  return {
    ...state,
    loadingempleados: false
  };



case "GET_EMPLEADO_START":
 
return {
  ...state,
  loadingGetEmpleado: true,
}

case "GET_EMPLEADO_SUCCESS":
  
  return {
    ...state,
    empleado: action.data,
  };

case "GET_EMPLEADO_FAIL":
  return {
    ...state,
    empleadoList: null,
    error: action.error,
    message: action.message
  };
case "GET_EMPLEADO_FINISH":
  return {
    ...state,
    loadingGetEmpleado: false,
  };


  case "DELETE_EMPLEADO_START":
    return {
      ...state,

        loadingempleado: true,
        
      
    }
  case "DELETE_EMPLEADO_SUCCESS":
    return {
      ...state,
        addOk: false,
        editOk: false,
        deleteOk: true,
        empleadoList: action.data
    }
  case "DELETE_EMPLEADO_FAIL":
    return {
      ...state,
        error: action.error,
        message: action.message
    }
  case "DELETE_EMPLEADO_FINISH":
    return {
      ...state,
        loadingempleado: false
      
    }
  case  "ADD_EMPLEADO_START":
    return {
      ...state,

        loadingempleado: true,
      
    }
  case  "ADD_EMPLEADO_SUCCESS":
    return {
      ...state,

      addOk: action.data,
      editOk: false,
      deleteOk: false,

    }
  case  "ADD_EMPLEADO_FAIL":
    return {
      ...state,

        error: action.error,
       message: action.message
    }
  case  "ADD_EMPLEADO_FINISH":
    return {
      ...state,

        loadingempleado: false
    }
  case "EDIT_EMPLEADO_START":
    return {
      ...state,

        loadingempleado: true,
        

    }
  case "EDIT_EMPLEADO_SUCCESS":
    return {
      ...state,
      addOk: false,
      editOk: action.data,
      deleteOk: false
    }
  case "EDIT_EMPLEADO_FAIL":
    return {
      ...state,

        error: action.error,
        message: action.message
    }
  case "EDIT_EMPLEADO_FINISH":
    return {
      ...state,

        loadingempleado: false

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
