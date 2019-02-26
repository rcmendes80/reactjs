import jsonPlaceholder from '../apis/jsonPlaceholder';
import pmDesktopAPI from '../apis/pmDesktopAPI';
import {
	SHOW_GLOBAL_MESSAGE,
	HIDE_GLOBAL_MESSAGE,
	SHOW_LOAD_SPINNER,
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
	SELECT_MENU,
	DELETE_TODO
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

export const showLoadSpinner = (loading) => {
	return {
		type: SHOW_LOAD_SPINNER,
		loading
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
	dispatch(showLoadSpinner(true));
	setTimeout(async () => {
		try {
			const response = await pmDesktopAPI.get('/todos');
			dispatch({
				type: FETCH_TODOS,
				payload: response.data
			});
		} catch (e) {
			console.error(e);
			dispatch(
				showGlobalMessage({
					type: 'error',
					title: 'Error on loading Todo list',
					details: e.message
				})
			);
		} finally {
			dispatch(showLoadSpinner(false));
		}
	}, 3000);
};
export const fetchTodo = (id) => async (dispatch) => {
	try {
		const response = await pmDesktopAPI.get(`/todos/${id}`);

		dispatch({
			type: FETCH_TODO,
			payload: response.data
		});
	} catch (e) {
		console.error(e);
		dispatch(
			showGlobalMessage({
				type: 'error',
				title: 'Error on fetching Todo',
				details: e.message
			})
		);
	}
};

export const createTodo = (todo) => async (dispatch) => {
	try {
		const response = await pmDesktopAPI.post('/todos', todo);

		dispatch({
			type: CREATE_TODO,
			payload: response.data
		});

		dispatch(
			showGlobalMessage({
				type: 'success',
				title: 'Todo created successfully!'
			})
		);
		history.push('/todos');
	} catch (e) {
		console.error(e);
		dispatch(
			showGlobalMessage({
				type: 'error',
				title: 'Error on creating Todo',
				details: e.message
			})
		);
	}
};

export const updateTodo = (todo) => async (dispatch) => {
	try {
		const response = await pmDesktopAPI.patch(`/todos/${todo.id}`, todo);

		dispatch({
			type: UPDATE_TODO,
			payload: response.data
		});
		dispatch(
			showGlobalMessage({
				type: 'success',
				title: 'Todo updated successfully!'
			})
		);
		history.push('/todos');
	} catch (e) {
		console.error(e);
		dispatch(
			showGlobalMessage({
				type: 'error',
				title: 'Error on updating Todo',
				details: e.message
			})
		);
	}
};

export const deleteTodo = (id) => async (dispatch) => {
	try {
		await pmDesktopAPI.delete(`/todos/${id}`, id);

		dispatch({
			type: DELETE_TODO,
			payload: id
		});

		dispatch(
			showGlobalMessage({
				type: 'success',
				title: 'Todo deleted successfully!'
			})
		);
		history.push('/todos');
	} catch (e) {
		console.error(e);
		dispatch(
			showGlobalMessage({
				type: 'error',
				title: 'Error on delete Todo',
				details: e.message
			})
		);
		history.push('/todos');
	}
};

export const updateTodoPropertyValue = (params) => {
	return {
		type: UPDATE_TODO_PROPERTY_VALUE,
		payload: { ...params }
	};
};
