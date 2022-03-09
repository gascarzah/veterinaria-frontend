const initialState = {
  loadingList: false,
  loadingCrud: false,
  raza: {},
  editOk: false,
  addOk: false,
  deleteOk: false,
  razaList: [],
  messageCrud: null,
  loadingRazaporAnimal: false
};

export const RazaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RAZAS_START":
      return {
        ...state,
        loadingList: true,
      };

    case "GET_RAZAS_SUCCESS":
      return {
        ...state,
        razaList: action.data,
      };

    case "GET_RAZAS_FAIL":
      return {
        ...state,
        razaList: null,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "GET_RAZAS_FINISH":
      return {
        ...state,
        loadingList: false,
      };

    case "GET_RAZA_START":
      return {
        ...state,
        loadingCrud: true,
      };

    case "GET_RAZA_SUCCESS":
      return {
        ...state,
        raza: action.data,
      };

    case "GET_RAZA_FAIL":
      return {
        ...state,
        razaList: null,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "GET_RAZA_FINISH":
      return {
        ...state,
        loadingCrud: false,
      };

    case "DELETE_RAZA_START":
      return {
        ...state,

        loadingCrud: true,
      };
    case "DELETE_RAZA_SUCCESS":
      return {
        ...state,
        addOk: false,
        editOk: false,
        deleteOk: true,
        razaList: action.data,
      };
    case "DELETE_RAZA_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "DELETE_RAZA_FINISH":
      return {
        ...state,
        loadingCrud: false,
      };
    case "ADD_RAZA_START":
      return {
        ...state,

        loadingCrud: true,
      };
    case "ADD_RAZA_SUCCESS":
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
    case "ADD_RAZA_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "ADD_RAZA_FINISH":
      return {
        ...state,

        loadingCrud: false,
      };
    case "EDIT_RAZA_START":
      return {
        ...state,

        loadingCrud: true,
      };
    case "EDIT_RAZA_SUCCESS":
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
    case "EDIT_RAZA_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "EDIT_RAZA_FINISH":
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

    case "GET_RAZA_POR_ANIMAL_START":
      return {
        ...state,

        loadingRazaporAnimal: true,
      };

    case "GET_RAZA_POR_ANIMAL_SUCCESS":
      return {
        ...state,

        razaList: action.data,
      };

    case "GET_RAZA_POR_ANIMAL_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "GET_RAZA_POR_ANIMAL_FINISH":
      return {
        ...state,

        loadingRazaporAnimal: false,
      };

    default:
      return state;
  }
};
