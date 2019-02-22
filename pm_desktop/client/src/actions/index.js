import jsonPlaceholder from '../apis/jsonPlaceholder';
import pmDesktopAPI from '../apis/pmDesktopAPI';
import {
	SHOW_GLOBAL_MESSAGE,
	HIDE_GLOBAL_MESSAGE,
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
	// UPDATE_PRODUCT,
	FETCH_TODOS,
	FETCH_TODO,
	UPDATE_TODO,
	CREATE_TODO,
	UPDATE_TODO_PROPERTY_VALUE,
	SELECT_MENU
} from './types';

import history from '../components/history';

export const selectMenu = (menu) => {
	return { type: SELECT_MENU, menu };
};

export const showGlobalMessage = (params) => {
	return {
		type: SHOW_GLOBAL_MESSAGE,
		globalMessage: {
			...params,
			show: true
		}
	};
};

export const hideGlobalMessage = () => {
	return {
		type: HIDE_GLOBAL_MESSAGE,
		globalMessage: {
			show: false
		}
	};
};

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

export const fetchTodo = (id) => async (dispatch) => {
	dispatch({ type: FETCH_TODO, loading: true });

	try {
		const response = await pmDesktopAPI.get(`/todos/${id}`);

		dispatch({
			type: FETCH_TODO,
			success: true,
			payload: response.data
		});
	} catch (e) {
		dispatch({
			type: FETCH_TODO,
			isError: true,
			errorMessage: e.message
		});
	}
};

export const createTodo = (todo) => async (dispatch) => {
	dispatch({
		type: CREATE_TODO,
		loading: true
	});

	try {
		const response = await pmDesktopAPI.post('/todos', todo);

		dispatch({
			type: CREATE_TODO,
			success: true,
			payload: response.data
		});
		history.push('/todos');
	} catch (e) {
		dispatch({
			type: CREATE_TODO,
			isError: true,
			errorMessage: e.message
		});
	}
};

export const updateTodo = (todo) => async (dispatch) => {
	dispatch({
		type: UPDATE_TODO,
		loading: true
	});

	try {
		const response = await pmDesktopAPI.patch(`/todos/${todo.id}`, todo);

		dispatch({
			type: UPDATE_TODO,
			success: true,
			payload: response.data
		});
		history.push('/todos');
	} catch (e) {
		dispatch({
			type: UPDATE_TODO,
			isError: true,
			errorMessage: e.message
		});
	}
};

export const updateTodoPropertyValue = (params) => {
	return {
		type: UPDATE_TODO_PROPERTY_VALUE,
		payload: { ...params }
	};
};
