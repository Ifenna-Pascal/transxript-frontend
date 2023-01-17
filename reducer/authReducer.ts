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

    case 'COURSE_DETAILS':
      return {
        ...state,
        course_details: action.payload,
      };

    case 'ALL_STUDENTS':
      console.log(action.payload, 'payloadddd');
      return {
        ...state,
        students: action.payload,
        isLoading: false,
      };

    case 'SAVE_RESULT':
      return {
        ...state,
        savedResults: action.payload,
        isLoading: false,
        result: [],
      };

    case 'SET_RESULT':
      return {
        ...state,
        result: action.payload,
      };

    case 'ADD_RESULT':
      return {
        ...state,
        result: [action.payload, ...state.result],
      };

    case 'STUDENT_RESULTS':
      return {
        ...state,
        studentResults: action.payload,
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
