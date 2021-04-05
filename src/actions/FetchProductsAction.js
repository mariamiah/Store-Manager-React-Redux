import * as actions from './ActionTypes';

const { BASE_URL } = process.env;
const FetchProductsAction = () => dispatch => fetch(`${BASE_URL}/api/v2/products`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  mode: 'cors',
})
  .then(response => response.json())
  .then((json) => {
    if (json.Products) {
      console.log(json.Products)
      dispatch(actions.fetchProductsActionCreator(json.Products));
    } else {
      dispatch(actions.fetchProductsFailActionCreator(json));
    }
  })
  .catch(err => err);
export default FetchProductsAction;
