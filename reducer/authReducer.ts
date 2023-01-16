const AuthReducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'USER_LOGIN':
      return {
        ...state,
        isLoggedIn: action.payload,
        isLoading: false,
      };
    case 'SET_USER_PROFILE':
      return {
        ...state,
        profile: action.payload,
      };
    case 'SELECT_COURSE':
      return {
        ...state,
        selected_course: action.payload,
        isLoading: false,
      };
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default AuthReducer;
