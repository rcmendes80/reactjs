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
	FETCH_PRODUCT_TAGS,
	// UPDATE_PRODUCT,
	FETCH_TODOS,
	// FETCH_TODO,
	// SAVE_TODO,
	// CREATE_TODO,
	CREATE_TEMP_TODO,
	CHANGE_VALUE_TODO_FIELD,
	SAVE_TODO
} from './types';

import history from '../components/history';

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
	console.log('CREATE product action', formValues);
	// const response = await pmDesktopAPI.post('/products', formValues);
	// dispatch({ type: CREATE_PRODUCT, payload: response.data });
	//history.push('/products');
};

export const updateProduct = (formValues) => async (dispatch) => {
	console.log('UPDATE product action', formValues);
	// const response = await pmDesktopAPI.patch(`/products/${formValues.id}`, formValues);
	// dispatch({ type: UPDATE_PRODUCT, payload: response.data });
	// history.push('/products');
};

export const fetchProductTags = (product) => {
	return {
		type: FETCH_PRODUCT_TAGS,
		payload: product.tags
	};
};

export const addProductTag = (tag) => (dispatch) => {
	console.log('add tag action', tag);
	dispatch({ type: ADD_PRODUCT_TAG, payload: tag });
	// history.push('/products/new');
};

export const fetchTodos = () => async (dispatch) => {
	dispatch({
		type: FETCH_TODOS,
		loading: true
	});

	try {
		const response = await pmDesktopAPI.get('/todos');
		dispatch({
			type: FETCH_TODOS,
			loading: false,
			payload: response.data
		});
		history.push('/todos');
	} catch (e) {
		console.error(e);
		dispatch({
			type: FETCH_TODOS,
			loading: false,
			isError: true,
			errorMessage: e.message
		});
	}
};

export const createTempTodo = () => {
	return {
		type: CREATE_TEMP_TODO
	};
};

export const changeValueTodoField = (field, value) => {
	return {
		type: CHANGE_VALUE_TODO_FIELD,
		field,
		value
	};
};

export const saveTodo = () => async (dispatch, getState) => {
	const { tempTodo } = getState().todos;

	dispatch({
		type: SAVE_TODO,
		loading: true
	});

	try {
		const response = await pmDesktopAPI.post('/todos', tempTodo);

		dispatch({
			type: SAVE_TODO,
			success: true,
			payload: response.data
		});
	} catch (e) {
		dispatch({
			type: SAVE_TODO,
			isError: true,
			errorMessage: e.message
		});
	}
};
