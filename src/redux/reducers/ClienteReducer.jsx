
 const initialState = {
    loadingClientes: false,
    loadingGetCliente: false,
    cliente: {},
    editOk: false,
    addOk: false,
    deleteOk: false,
    clienteList: [],
    message: '',
    error: 0,

}

export const ClienteReducer = (state = initialState, action) => {


switch (action.type) {

case "GET_CLIENTES_START":
  return {
    ...state,
    loadingClientes: true
  };

case "GET_CLIENTES_SUCCESS":
  return {
    ...state,
    clienteList: action.data
  };

case "GET_CLIENTES_FAIL":
  return {
    ...state,
    clienteList: null,
    error: action.error,
    message: action.message
  };
case "GET_CLIENTES_FINISH":
  return {
    ...state,
    loadingclientes: false
  };



case "GET_CLIENTE_START":
 
return {
  ...state,
  loadingGetCliente: true,
}

case "GET_CLIENTE_SUCCESS":
  
  return {
    ...state,
    cliente: action.data,
  };

case "GET_CLIENTE_FAIL":
  return {
    ...state,
    clienteList: null,
    error: action.error,
    message: action.message
  };
case "GET_CLIENTE_FINISH":
  return {
    ...state,
    loadingGetCliente: false,
  };


  case "DELETE_CLIENTE_START":
    return {
      ...state,

        loadingcliente: true,
        
      
    }
  case "DELETE_CLIENTE_SUCCESS":
    return {
      ...state,
        addOk: false,
        editOk: false,
        deleteOk: true,
        clienteList: action.data
    }
  case "DELETE_CLIENTE_FAIL":
    return {
      ...state,
        error: action.error,
        message: action.message
    }
  case "DELETE_CLIENTE_FINISH":
    return {
      ...state,
        loadingcliente: false
      
    }
  case  "ADD_CLIENTE_START":
    return {
      ...state,

        loadingcliente: true,
      
    }
  case  "ADD_CLIENTE_SUCCESS":
    return {
      ...state,

      addOk: action.data,
      editOk: false,
      deleteOk: false,

    }
  case  "ADD_CLIENTE_FAIL":
    return {
      ...state,

        error: action.error,
       message: action.message
    }
  case  "ADD_CLIENTE_FINISH":
    return {
      ...state,

        loadingcliente: false
    }
  case "EDIT_CLIENTE_START":
    return {
      ...state,

        loadingcliente: true,
        

    }
  case "EDIT_CLIENTE_SUCCESS":
    return {
      ...state,
      addOk: false,
      editOk: action.data,
      deleteOk: false
    }
  case "EDIT_CLIENTE_FAIL":
    return {
      ...state,

        error: action.error,
        message: action.message
    }
  case "EDIT_CLIENTE_FINISH":
    return {
      ...state,

        loadingcliente: false

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
