const initialState = {
  username: '',
  password: '',
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case 'LOGIN_FAIL':
      return {
        ...state,
        error: action.error,
        loading: false
      };

    default:
      return state;
  }
};
export default LoginReducer;
