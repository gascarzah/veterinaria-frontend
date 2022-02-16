
 const initialState = {
    loadingVentas: false,
    loadingGetVenta: false,
    venta: {},
    editOk: false,
    addOk: false,
    deleteOk: false,
    ventaList: [],
    message: '',
    error: 0,

}

export const VentaReducer = (state = initialState, action) => {


switch (action.type) {

case "GET_VENTAS_START":
  return {
    ...state,
    loadingVentas: true
  };

case "GET_VENTAS_SUCCESS":
  return {
    ...state,
    ventaList: action.data
  };

case "GET_VENTAS_FAIL":
  return {
    ...state,
    ventaList: null,
    error: action.error,
    message: action.message
  };
case "GET_VENTAS_FINISH":
  return {
    ...state,
    loadingventas: false
  };



case "GET_VENTA_START":
 
return {
  ...state,
  loadingGetVenta: true,
}

case "GET_VENTA_SUCCESS":
  
  return {
    ...state,
    venta: action.data,
  };

case "GET_VENTA_FAIL":
  return {
    ...state,
    ventaList: null,
    error: action.error,
    message: action.message
  };
case "GET_VENTA_FINISH":
  return {
    ...state,
    loadingGetVenta: false,
  };


  case "DELETE_VENTA_START":
    return {
      ...state,

        loadingventa: true,
        
      
    }
  case "DELETE_VENTA_SUCCESS":
    return {
      ...state,
        addOk: false,
        editOk: false,
        deleteOk: true,
        ventaList: action.data
    }
  case "DELETE_VENTA_FAIL":
    return {
      ...state,
        error: action.error,
        message: action.message
    }
  case "DELETE_VENTA_FINISH":
    return {
      ...state,
        loadingventa: false
      
    }
  case  "ADD_VENTA_START":
    return {
      ...state,

        loadingventa: true,
      
    }
  case  "ADD_VENTA_SUCCESS":
    return {
      ...state,

      addOk: action.data,
      editOk: false,
      deleteOk: false,

    }
  case  "ADD_VENTA_FAIL":
    return {
      ...state,

        error: action.error,
       message: action.message
    }
  case  "ADD_VENTA_FINISH":
    return {
      ...state,

        loadingventa: false
    }
  case "EDIT_VENTA_START":
    return {
      ...state,

        loadingventa: true,
        

    }
  case "EDIT_VENTA_SUCCESS":
    return {
      ...state,
      addOk: false,
      editOk: action.data,
      deleteOk: false
    }
  case "EDIT_VENTA_FAIL":
    return {
      ...state,

        error: action.error,
        message: action.message
    }
  case "EDIT_VENTA_FINISH":
    return {
      ...state,

        loadingventa: false

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
