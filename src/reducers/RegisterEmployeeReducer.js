const initialState = {
  username: '',
  password: '',
  confirm_password: '',
  employee_name: '',
  email: '',
  gender: '',
  role: '',
};

const RegisterEmployeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_EMPLOYEE_SUCCESS':
      return {
        ...state,
        payload: action.payload,
      };
    case 'REGISTER_EMPLOYEE_FAIL':
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
export default RegisterEmployeesReducer;
