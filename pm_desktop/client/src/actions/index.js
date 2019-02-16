import jsonPlaceholder from '../apis/jsonPlaceholder';
import pmDesktopAPI from '../apis/pmDesktopAPI';
import {
	FETCH_USERS,
	// FETCH_USER,
	// CREATE_USER,
	// UPDATE_USER,
	// DELETE_USER,
	FETCH_PRODUCTS,
	FETCH_PRODUCT,
	// CREATE_PRODUCT,
	// UPDATE_PRODUCT,
	// DELETE_PRODUCT,
	ADD_PRODUCT_TAG,
	// DELETE_PRODUCT_TAG,
	FETCH_PRODUCT_TAGS
} from './types';

// import history from '../components/history';

//USERS ACTIONS
export const fetchUsers = () => async (dispatch) => {
	const response = await jsonPlaceholder.get('/users');
	dispatch({
		type: FETCH_USERS,
		payload: response.data
	});
};

//PRODUCTS ACTIONS
export const fetchProducts = () => async (dispatch) => {
	const response = await pmDesktopAPI('/products');

	dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
	const response = await pmDesktopAPI.get(`/products/${id}`);

	dispatch({ type: FETCH_PRODUCT, payload: response.data });
};

export const createProduct = (formValues) => async (dispatch) => {
	console.log(formValues);
	// const response = await pmDesktopAPI.post('/products', formValues);
	// dispatch({ type: CREATE_PRODUCT, payload: response.data });
	//history.push('/products');
};

export const updateProduct = (formValues) => async (dispatch) => {
	console.log(formValues);
};

export const fetchProductTags = (product) => {
	return {
		type: FETCH_PRODUCT_TAGS,
		payload: product.tags
	};
};

export const addProductTag = (tag) => (dispatch) => {
	dispatch({ type: ADD_PRODUCT_TAG, payload: tag });
	// history.push('/products/new');
};
