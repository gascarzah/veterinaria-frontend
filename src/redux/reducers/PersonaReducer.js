const initialState = {
  loadingList: false,
  loadingCrud: false,
  persona: {},
  editOk: false,
  addOk: false,
  deleteOk: false,
  personaList: [],
  messageCrud: null,
};

export const PersonaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PERSONAS_START":
      return {
        ...state,
        loadingList: true,
      };

    case "GET_PERSONAS_SUCCESS":
      return {
        ...state,
        personaList: action.data,
      };

    case "GET_PERSONAS_FAIL":
      return {
        ...state,
        personaList: null,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "GET_PERSONAS_FINISH":
      return {
        ...state,
        loadingList: false,
      };

    case "GET_PERSONA_START":
      return {
        ...state,
        loadingCrud: true,
      };

    case "GET_PERSONA_SUCCESS":
      return {
        ...state,
        persona: action.data,
      };

    case "GET_PERSONA_FAIL":
      return {
        ...state,
        personaList: null,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "GET_PERSONA_FINISH":
      return {
        ...state,
        loadingCrud: false,
      };

    case "DELETE_PERSONA_START":
      return {
        ...state,

        loadingCrud: true,
      };
    case "DELETE_PERSONA_SUCCESS":
      return {
        ...state,
        addOk: false,
        editOk: false,
        deleteOk: true,
        personaList: action.data,
      };
    case "DELETE_PERSONA_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "DELETE_PERSONA_FINISH":
      return {
        ...state,
        loadingCrud: false,
      };
    case "ADD_PERSONA_START":
      return {
        ...state,

        loadingCrud: true,
      };
    case "ADD_PERSONA_SUCCESS":
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
    case "ADD_PERSONA_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "ADD_PERSONA_FINISH":
      return {
        ...state,

        loadingCrud: false,
      };
    case "EDIT_PERSONA_START":
      return {
        ...state,

        loadingCrud: true,
      };
    case "EDIT_PERSONA_SUCCESS":
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
    case "EDIT_PERSONA_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "EDIT_PERSONA_FINISH":
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
