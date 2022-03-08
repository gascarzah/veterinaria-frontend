const initialState = {
    loadingList: false,
    loadingCrud: false,
    menu: {},
    editOk: false,
    addOk: false,
    deleteOk: false,
    menuList: [],
    messageLogin: null,
    isLogged: false
  };
  
  export const MenuReducer = (state = initialState, action) => {
    switch (action.type) {
      
  
      case "GET_MENU_START":
        return {
          ...state,
          loadingCrud: true,
        };
  
      case "GET_MENU_SUCCESS":
        return {
          ...state,
          menu: action.data,
          isLogged: true
        };
  
      case "GET_MENU_FAIL":
        return {
          ...state,
          menuList: null,
          isLogged: false,
          messageLogin: {
            code: action.error,
            message: action.message,
          },
        };
      case "GET_MENU_FINISH":
        return {
          ...state,
          loadingCrud: false,
        };
  
      
      case "CLEAR_MESSAGE_NOTIFICATION":
        return {
          ...state,
          
          messageLogin: null,
        };
  
      default:
        return state;
    }
  };
  