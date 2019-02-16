import jsonPlaceholder from '../apis/jsonPlaceholder';
import pmDesktopAPI from '../apis/pmDesktopAPI';
import {
	FETCH_USERS,
	FETCH_USER,
	CREATE_USER,
	UPDATE_USER,
	DELETE_USER,
	FETCH_PRODUCTS,
	FETCH_PRODUCT,
	CREATE_PRODUCT,
	UPDATE_PRODUCT,
	DELETE_PRODUCT
} from './types';

export const fetchUsers = () => async (dispatch) => {
	const response = await jsonPlaceholder.get('/users');
	dispatch({
		type: FETCH_USERS,
		payload: response.data
	});
};

export const fetchProducts = () => async (dispatch) => {
	const response = await pmDesktopAPI('/products');

	dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};
