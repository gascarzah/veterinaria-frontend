const initialState = {
  loadingList: false,
  loadingCrud: false,
  mascota: {},
  editOk: false,
  addOk: false,
  deleteOk: false,
  mascotaList: [],
  messageCrud: null,
};

export const MascotaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MASCOTAS_START":
      return {
        ...state,
        loadingList: true,
      };

    case "GET_MASCOTAS_SUCCESS":
      return {
        ...state,
        mascotaList: action.data,
      };

    case "GET_MASCOTAS_FAIL":
      return {
        ...state,
        mascotaList: null,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "GET_MASCOTAS_FINISH":
      return {
        ...state,
        loadingList: false,
      };

    case "GET_MASCOTA_START":
      return {
        ...state,
        loadingCrud: true,
      };

    case "GET_MASCOTA_SUCCESS":
      return {
        ...state,
        mascota: action.data,
      };

    case "GET_MASCOTA_FAIL":
      return {
        ...state,
        mascotaList: null,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "GET_MASCOTA_FINISH":
      return {
        ...state,
        loadingCrud: false,
      };

    case "DELETE_MASCOTA_START":
      return {
        ...state,

        loadingCrud: true,
      };
    case "DELETE_MASCOTA_SUCCESS":
      return {
        ...state,
        addOk: false,
        editOk: false,
        deleteOk: true,
        mascotaList: action.data,
      };
    case "DELETE_MASCOTA_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "DELETE_MASCOTA_FINISH":
      return {
        ...state,
        loadingCrud: false,
      };
    case "ADD_MASCOTA_START":
      return {
        ...state,

        loadingCrud: true,
      };
    case "ADD_MASCOTA_SUCCESS":
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
    case "ADD_MASCOTA_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "ADD_MASCOTA_FINISH":
      return {
        ...state,

        loadingCrud: false,
      };
    case "EDIT_MASCOTA_START":
      return {
        ...state,

        loadingCrud: true,
      };
    case "EDIT_MASCOTA_SUCCESS":
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
    case "EDIT_MASCOTA_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "EDIT_MASCOTA_FINISH":
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
