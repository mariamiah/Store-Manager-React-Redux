const initialState = {
  Products: [],
};

const FetchProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCT_SUCCESS':
      return {
        ...state,
        Products: action.payload,
      };
    case 'FETCH_PRODUCT_FAIL':
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
export default FetchProductsReducer;
