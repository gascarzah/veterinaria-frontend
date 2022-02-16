
 const initialState = {
        loadingMascotas: false,
        loadingGetMascota: false,
        mascota: {},
        editOk: false,
        addOk: false,
        deleteOk: false,
        mascotaList: [],
        message: '',
        error: 0,

}

export const MascotaReducer = (state = initialState, action) => {
   
    
  switch (action.type) {

    case "GET_MASCOTAS_START":
      return {
        ...state,
        loadingMascotas: true
      };

    case "GET_MASCOTAS_SUCCESS":
      return {
        ...state,
        mascotaList: action.data
      };

    case "GET_MASCOTAS_FAIL":
      return {
        ...state,
        mascotaList: null,
        error: action.error,
        message: action.message
      };
    case "GET_MASCOTAS_FINISH":
      return {
        ...state,
        loadingmascotas: false
      };



    case "GET_MASCOTA_START":
     
    return {
      ...state,
      loadingGetMascota: true,
    }

    case "GET_MASCOTA_SUCCESS":
      
      return {
        ...state,
        mascota: action.data,
      };

    case "GET_MASCOTA_FAIL":
      return {
        ...state,
        mascotaList: null,
        error: action.error,
        message: action.message
      };
    case "GET_MASCOTA_FINISH":
      return {
        ...state,
        loadingGetMascota: false,
      };


      case "DELETE_MASCOTA_START":
        return {
          ...state,

            loadingmascota: true,
            
          
        }
      case "DELETE_MASCOTA_SUCCESS":
        return {
          ...state,
            addOk: false,
            editOk: false,
            deleteOk: true,
            mascotaList: action.data
        }
      case "DELETE_MASCOTA_FAIL":
        return {
          ...state,
            error: action.error,
            message: action.message
        }
      case "DELETE_MASCOTA_FINISH":
        return {
          ...state,
            loadingmascota: false
          
        }
      case  "ADD_MASCOTA_START":
        return {
          ...state,

            loadingmascota: true,
          
        }
      case  "ADD_MASCOTA_SUCCESS":
        return {
          ...state,

          addOk: action.data,
          editOk: false,
          deleteOk: false,

        }
      case  "ADD_MASCOTA_FAIL":
        return {
          ...state,
 
            error: action.error,
           message: action.message
        }
      case  "ADD_MASCOTA_FINISH":
        return {
          ...state,

            loadingmascota: false
        }
      case "EDIT_MASCOTA_START":
        return {
          ...state,

            loadingmascota: true,
            
  
        }
      case "EDIT_MASCOTA_SUCCESS":
        return {
          ...state,
          addOk: false,
          editOk: action.data,
          deleteOk: false
        }
      case "EDIT_MASCOTA_FAIL":
        return {
          ...state,

            error: action.error,
            message: action.message
        }
      case "EDIT_MASCOTA_FINISH":
        return {
          ...state,

            loadingmascota: false
  
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
