const initialState = {
  loadingList: false,
  loadingCrud: false,
  loadingLogin: false,
  auth: {},
  editOk: false,
  addOk: false,
  deleteOk: false,
  authList: [],
  messageLogin: null,
  user: JSON.parse(sessionStorage.getItem('user')) || { logged: false },
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    

    case "GET_AUTH_START":
      return {
        ...state,
        // loadingCrud: true,
        loadingLogin: true,

      };

    case "GET_AUTH_SUCCESS":
      const user = {
        ...action.data,
        logged: true,
      };
      sessionStorage.setItem('user', JSON.stringify(user));
      return {
        ...state,
        loadingLogin: false,
        messageLogin: null,
        user: user,
      };


    case "GET_AUTH_FAIL":
      return {
        ...state,
        authList: null,
        loadingLogin: false,
        messageLogin: {
          code: action.error,
          message: action.message,
        },
        user: { logged: false },
      };
    // case "GET_AUTH_FINISH":
    //   return {
    //     ...state,
    //     loadingLogin: false,
    //     // isLogged: false
    //   };
    case "LOGOUT":
      sessionStorage.removeItem("user");
      return {
        ...state,        
        user: { logged: false }
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
