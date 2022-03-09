const initialState = {
  loadingList: false,
  loadingCrud: false,
  empleado: {},
  editOk: false,
  addOk: false,
  deleteOk: false,
  empleadoList: [],
  messageCrud: null,
};

export const EmpleadoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EMPLEADOS_START":
      return {
        ...state,
        loadingList: true,
      };

    case "GET_EMPLEADOS_SUCCESS":
      return {
        ...state,
        empleadoList: action.data,
      };

    case "GET_EMPLEADOS_FAIL":
      return {
        ...state,
        empleadoList: null,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "GET_EMPLEADOS_FINISH":
      return {
        ...state,
        loadingList: false,
      };

    case "GET_EMPLEADO_START":
      return {
        ...state,
        loadingCrud: true,
      };

    case "GET_EMPLEADO_SUCCESS":
      return {
        ...state,
        empleado: action.data,
      };

    case "GET_EMPLEADO_FAIL":
      return {
        ...state,
        empleadoList: null,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "GET_EMPLEADO_FINISH":
      return {
        ...state,
        loadingCrud: false,
      };

    case "DELETE_EMPLEADO_START":
      return {
        ...state,

        loadingCrud: true,
      };
    case "DELETE_EMPLEADO_SUCCESS":
      return {
        ...state,
        addOk: false,
        editOk: false,
        deleteOk: true,
        empleadoList: action.data,
      };
    case "DELETE_EMPLEADO_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "DELETE_EMPLEADO_FINISH":
      return {
        ...state,
        loadingCrud: false,
      };
    case "ADD_EMPLEADO_START":
      return {
        ...state,

        loadingCrud: true,
      };
    case "ADD_EMPLEADO_SUCCESS":
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
    case "ADD_EMPLEADO_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "ADD_EMPLEADO_FINISH":
      return {
        ...state,

        loadingCrud: false,
      };
    case "EDIT_EMPLEADO_START":
      return {
        ...state,

        loadingCrud: true,
      };
    case "EDIT_EMPLEADO_SUCCESS":
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
    case "EDIT_EMPLEADO_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "EDIT_EMPLEADO_FINISH":
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
