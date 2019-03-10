import * as actions from './ActionTypes';

const { BASE_URL } = process.env;
const token = localStorage.getItem('token');
export const RegistrationAction = payload => dispatch => fetch(`${BASE_URL}/api/v2/auth/signup`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  mode: 'cors',
  body: JSON.stringify(
    payload,
  ),
})
  .then(response => response.json())
  .then((json) => {
    if (json.message === 'User registered successfully') {
      dispatch(actions.registerEmployeeActionCreator(json));
    } else {
      dispatch(actions.registerEmployeeFailActionCreator(json));
    }
  })
  .catch(err => err);
export default RegistrationAction;
