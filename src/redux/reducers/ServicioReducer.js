const initialState = {
  loadingList: false,
  loadingCrud: false,
  servicio: {},
  editOk: false,
  addOk: false,
  deleteOk: false,
  servicioList: [],
  messageCrud: null,

};

export const ServicioReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SERVICIOS_START":
      return {
        ...state,
        loadingList: true,
      };

    case "GET_SERVICIOS_SUCCESS":
      return {
        ...state,
        servicioList: action.data,
      };

    case "GET_SERVICIOS_FAIL":
      return {
        ...state,
        servicioList: null,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "GET_SERVICIOS_FINISH":
      return {
        ...state,
        loadingList: false,
      };

    case "GET_SERVICIO_START":
      return {
        ...state,
        loadingCrud: true,
      };

    case "GET_SERVICIO_SUCCESS":
      return {
        ...state,
        servicio: action.data,
      };

    case "GET_SERVICIO_FAIL":
      return {
        ...state,
        servicioList: null,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "GET_SERVICIO_FINISH":
      return {
        ...state,
        loadingCrud: false,
      };

    case "DELETE_SERVICIO_START":
      return {
        ...state,
        loadingCrud: true,
      };

    case "DELETE_SERVICIO_SUCCESS":
      return {
        ...state,
        addOk: false,
        editOk: false,
        deleteOk: true,
        servicioList: action.data,
      };
    case "DELETE_SERVICIO_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "DELETE_SERVICIO_FINISH":
      return {
        ...state,
        loadingCrud: false,
      };
    case "ADD_SERVICIO_START":
      return {
        ...state,

        loadingCrud: true,
      };
    case "ADD_SERVICIO_SUCCESS":
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
    case "ADD_SERVICIO_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "ADD_SERVICIO_FINISH":
      return {
        ...state,

        loadingCrud: false,
      };

    case "EDIT_SERVICIO_START":
      return {
        ...state,
        loadingCrud: true,
      };
    case "EDIT_SERVICIO_SUCCESS":
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
    case "EDIT_SERVICIO_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "EDIT_SERVICIO_FINISH":
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
