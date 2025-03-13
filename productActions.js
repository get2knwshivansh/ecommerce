// src/actions/productActions.js
import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/products');
    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: res.data });
  } catch (err) {
    console.error(err);
  }
};
