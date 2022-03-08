const initialState = {
  loadingList: false,
  loadingCrud: false,
  usuario: {},
  editOk: false,
  addOk: false,
  deleteOk: false,
  usuarioList: [],
  messageCrud: null,
};

export const UsuarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USUARIOS_START":
      return {
        ...state,
        loadingList: true,
      };

    case "GET_USUARIOS_SUCCESS":
      return {
        ...state,
        usuarioList: action.data,
      };

    case "GET_USUARIOS_FAIL":
      return {
        ...state,
        usuarioList: null,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "GET_USUARIOS_FINISH":
      return {
        ...state,
        loadingList: false,
      };

    case "GET_USUARIO_START":
      return {
        ...state,
        loadingCrud: true,
      };

    case "GET_USUARIO_SUCCESS":
      return {
        ...state,
        usuario: action.data,
      };

    case "GET_USUARIO_FAIL":
      return {
        ...state,
        usuarioList: null,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "GET_USUARIO_FINISH":
      return {
        ...state,
        loadingCrud: false,
      };

    case "DELETE_USUARIO_START":
      return {
        ...state,
        loadingCrud: true,
      };

    case "DELETE_USUARIO_SUCCESS":
      return {
        ...state,
        addOk: false,
        editOk: false,
        deleteOk: true,
        usuarioList: action.data,
      };
    case "DELETE_USUARIO_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "DELETE_USUARIO_FINISH":
      return {
        ...state,
        loadingCrud: false,
      };
    case "ADD_USUARIO_START":
      return {
        ...state,

        loadingCrud: true,
      };
    case "ADD_USUARIO_SUCCESS":
      
    return {
        ...state,

        addOk: action.data,
        editOk: false,
        deleteOk: false,
        messageCrud: {
          code: "success",
          message: "Elemento Creado Correctamente",
        },
      };
    case "ADD_USUARIO_FAIL":
    
      return {
        ...state,
        messageCrud: {
          code: "error",
          message: action.message,
        },
       
      };
    case "ADD_USUARIO_FINISH":
      return {
        ...state,

        loadingCrud: false,
      };

    case "EDIT_USUARIO_START":
      return {
        ...state,
        loadingCrud: true,
      };
    case "EDIT_USUARIO_SUCCESS":
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
    case "EDIT_USUARIO_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "EDIT_USUARIO_FINISH":
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
