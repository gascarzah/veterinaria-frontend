const initialState = {
  loadingList: false,
  loadingCrud: false,
  animal: {},
  editOk: false,
  addOk: false,
  deleteOk: false,
  animalList: [],
  messageCrud: null,

};

export const AnimalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ANIMALES_START":
      return {
        ...state,
        loadingList: true,
      };

    case "GET_ANIMALES_SUCCESS":
      return {
        ...state,
        animalList: action.data,
      };

    case "GET_ANIMALES_FAIL":
      return {
        ...state,
        animalList: null,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "GET_ANIMALES_FINISH":
      return {
        ...state,
        loadingList: false,
      };

    case "GET_ANIMAL_START":
      return {
        ...state,
        loadingCrud: true,
      };

    case "GET_ANIMAL_SUCCESS":
      return {
        ...state,
        animal: action.data,
      };

    case "GET_ANIMAL_FAIL":
      return {
        ...state,
        animalList: null,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "GET_ANIMAL_FINISH":
      return {
        ...state,
        loadingCrud: false,
      };

    case "DELETE_ANIMAL_START":
      return {
        ...state,
        loadingCrud: true,
      };

    case "DELETE_ANIMAL_SUCCESS":
      return {
        ...state,
        addOk: false,
        editOk: false,
        deleteOk: true,
        animalList: action.data,
      };
    case "DELETE_ANIMAL_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "DELETE_ANIMAL_FINISH":
      return {
        ...state,
        loadingCrud: false,
      };
    case "ADD_ANIMAL_START":
      return {
        ...state,

        loadingCrud: true,
      };
    case "ADD_ANIMAL_SUCCESS":
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
    case "ADD_ANIMAL_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "ADD_ANIMAL_FINISH":
      return {
        ...state,

        loadingCrud: false,
      };

    case "EDIT_ANIMAL_START":
      return {
        ...state,
        loadingCrud: true,
      };
    case "EDIT_ANIMAL_SUCCESS":
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
    case "EDIT_ANIMAL_FAIL":
      return {
        ...state,
        messageCrud: {
          code: action.error,
          message: action.message,
        },
      };
    case "EDIT_ANIMAL_FINISH":
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
