const initialState = {
  loadingList: false,
  loadingCrud: false,
  cliente: {},
  editOk: false,
  addOk: false,
  deleteOk: false,
  clienteList: [],
  messageCrud: null,
};

export const ClienteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CLIENTES_START":
      return {
        ...state,
        loadingList: true,
      };

    case "GET_CLIENTES_SUCCESS":
      return {
        ...state,
        clienteList: action.data,
      };

    case "GET_CLIENTES_FAIL":
      return {
        ...state,
        clienteList: null,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "GET_CLIENTES_FINISH":
      return {
        ...state,
        loadingList: false,
      };

    case "GET_CLIENTE_START":
      return {
        ...state,
        loadingCrud: true,
      };

    case "GET_CLIENTE_SUCCESS":
      return {
        ...state,
        cliente: action.data,
      };

    case "GET_CLIENTE_FAIL":
      return {
        ...state,
        clienteList: null,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "GET_CLIENTE_FINISH":
      return {
        ...state,
        loadingCrud: false,
      };

    case "DELETE_CLIENTE_START":
      return {
        ...state,

        loadingCrud: true,
      };
    case "DELETE_CLIENTE_SUCCESS":
      return {
        ...state,
        addOk: false,
        editOk: false,
        deleteOk: true,
        clienteList: action.data,
      };
    case "DELETE_CLIENTE_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "DELETE_CLIENTE_FINISH":
      return {
        ...state,
        loadingCrud: false,
      };
    case "ADD_CLIENTE_START":
      return {
        ...state,

        loadingCrud: true,
      };
    case "ADD_CLIENTE_SUCCESS":
      return {
        ...state,

        addOk: action.data,
        editOk: false,
        deleteOk: false,
        messageCrud: {
          code: "success",
          message: "Elemento creado correctamente",
        },
      };
    case "ADD_CLIENTE_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "ADD_CLIENTE_FINISH":
      return {
        ...state,

        loadingCrud: false,
      };
    case "EDIT_CLIENTE_START":
      return {
        ...state,

        loadingCrud: true,
      };
    case "EDIT_CLIENTE_SUCCESS":
      return {
        ...state,
        addOk: false,
        editOk: action.data,
        deleteOk: false,
        messageCrud: {
          code: "success",
          message: "Elemento editado Correctamente",
        },
      };
    case "EDIT_CLIENTE_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "EDIT_CLIENTE_FINISH":
      return {
        ...state,
        loadingCrud: false,
      };
    case "CLEAR_MESSAGE_NOTIFICATION":
      return {
        ...state,
        messageCrud: null,
        // messageLogin: null,
      };

    default:
      return state;
  }
};
